// import axios from "axios";
// import errorHandler from "../utils/errorHandler";
// import { useState } from "react";
// import { useAuthContext } from "../auth/useAuthContext";
// import { toast } from "react-toastify";

// export const useManageUsers = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const { user, token, dispatch } = useAuthContext();

//   const baseURL =
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3000"
//       : "https://borghi-backend.onrender.com";

//   const getUsers = async () => {
//     try {
//       setIsLoading(true);
//       const res = await axios.get(`${baseURL}/user`, {
//         headers: {
//           Authorization: `Bearer ${token.token}`,
//         },
//       });

//       if (res.status === 200) {
//         setIsLoading(false);
//         return res.data;
//       }
//     } catch (error) {
//       console.error("Error getting Users", error);
//       setIsLoading(false);

//       errorHandler(error);
//     }
//   };

//   const signUp = async ({ formData }) => {
//     try {
//       setIsLoading(true);
//       const res = await axios.post(`${baseURL}/sign-up`, formData);
//       // const res = await axios.post(`${baseURL}/sign-up`, formData);

//       if (res.status === 201) {
//         setIsLoading(false);
//         toast.success("Please check your email for verification.");
//         return true;
//       }
//     } catch (error) {
//       console.error("Error during sign-up:", error);
//       setIsLoading(false);

//       errorHandler(error);
//     }
//   };

//   // const updateUser = async ({ formData }) => {
//   //   try {
//   //     setIsLoading(true);

//   //     const res = await axios.put(
//   //       `${baseURL}/user/update/${user?._id}`,
//   //       formData,
//   //       { withCredentials: true }
//   //     );

//   //     if (res.status === 200) {
//   //       setIsLoading(false);
//   //       const updatedUser = res.data.user;
//   //       console.log(updatedUser);
//   //       dispatch({ type: "LOGIN", payload: { user: updatedUser, token } });

//   //       toast.success("User updated successfully.");
//   //       alert("User updated successfully.");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error during update:", error);

//   //     if (error.response && error.response.status === 401) {
//   //       console.log("Token expired. Logging out...");
//   //       localStorage.removeItem("user");
//   //       localStorage.removeItem("token");
//   //       dispatch({ type: "LOGOUT" });

//   //       toast.warning("Session expired. Please log in again.");
//   //     } else {
//   //       errorHandler(error);
//   //     }
//   //     setIsLoading(false);
//   //   }
//   // };

//   const updateUser = async ({ formData }) => {
//     try {
//       setIsLoading(true);

//       // Se stai inviando l'immagine del profilo come base64, potresti voler verificare la dimensione
//       if (formData.profilePicture && formData.profilePicture.length > 5000000) {
//         // ~5MB in base64
//         setIsLoading(false);
//         toast.error(
//           "L'immagine del profilo è troppo grande. Usa un'immagine più piccola."
//         );
//         return;
//       }

//       // Assicurati di non inviare dati non necessari
//       const dataToSend = { ...formData };
//       if (dataToSend.confirmPassword) {
//         delete dataToSend.confirmPassword; // Il backend probabilmente non ha bisogno di questo
//       }

//       const res = await axios.put(
//         `${baseURL}/user/update/${user?._id}`,
//         dataToSend,
//         { withCredentials: true }
//       );

//       if (res.status === 200) {
//         setIsLoading(false);
//         const updatedUser = res.data.user;
//         console.log(updatedUser);
//         dispatch({ type: "LOGIN", payload: { user: updatedUser, token } });

//         toast.success("Utente aggiornato con successo.");
//         alert("Utente aggiornato con successo.");
//       }
//     } catch (error) {
//       console.error("Errore durante l'aggiornamento:", error);

//       if (error.response && error.response.status === 401) {
//         console.log("Token scaduto. Disconnessione in corso...");
//         localStorage.removeItem("user");
//         localStorage.removeItem("token");
//         dispatch({ type: "LOGOUT" });

//         toast.warning("Sessione scaduta. Effettua nuovamente il login.");
//       } else {
//         errorHandler(error);
//       }
//       setIsLoading(false);
//     }
//   };

//   const deleteUser = async () => {
//     if (
//       window.confirm(
//         "Sei veramente sicuro di voler eliminare questo borgo? Tutti i tuoi dati verranno eliminati."
//       )
//     )
//       try {
//         setIsLoading(false);

//         const res = await axios.delete(`${baseURL}/user/delete/${user._id}`, {
//           withCredentials: true,
//         });

//         if (res.status === 200) {
//           setIsLoading(false);
//           dispatch({ type: "LOGOUT" });
//           toast.success("User deleted successfully.");
//           alert("User deleted successfully.");
//         }
//       } catch (error) {
//         console.error("Error during deletion:", error);

//         if (error.response && error.response.status === 401) {
//           console.log("Token expired. Logging out...");
//           localStorage.removeItem("user");
//           localStorage.removeItem("token");
//           dispatch({ type: "LOGOUT" });

//           toast.warning("Session expired. Please log in again.");
//         } else {
//           errorHandler(error);
//         }
//         setIsLoading(false);
//       }
//   };

//   return { getUsers, signUp, updateUser, deleteUser };
// };

// import axios from "axios";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import { useAuthContext } from "../auth/useAuthContext";
// import errorHandler from "../utils/errorHandler";

// export const useManageUsers = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const { user, token, dispatch } = useAuthContext();

//   // Configurazione dell'URL base
//   const baseURL =
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3000"
//       : "https://borghi-backend.onrender.com";

//   // Funzione di gestione delle richieste API con migliore logging
//   const apiRequest = async (
//     method,
//     endpoint,
//     data = null,
//     withCredentials = false
//   ) => {
//     try {
//       setIsLoading(true);

//       const url = `${baseURL}${endpoint}`;
//       console.log(`Effettuando richiesta ${method.toUpperCase()} a: ${url}`);

//       const config = {
//         headers: {
//           Authorization: token?.token ? `Bearer ${token.token}` : undefined,
//         },
//         withCredentials,
//       };

//       // Rimuovi header undefined
//       if (!config.headers.Authorization) {
//         delete config.headers.Authorization;
//       }

//       let response;

//       switch (method.toLowerCase()) {
//         case "get":
//           response = await axios.get(url, config);
//           break;
//         case "post":
//           response = await axios.post(url, data, config);
//           break;
//         case "put":
//           response = await axios.put(url, data, config);
//           break;
//         case "delete":
//           response = await axios.delete(url, config);
//           break;
//         default:
//           throw new Error("Metodo non supportato");
//       }

//       setIsLoading(false);
//       return response;
//     } catch (error) {
//       console.error(`Errore durante ${method} su ${endpoint}:`, error);

//       // Log più dettagliato per il debugging
//       if (error.response) {
//         console.log("Risposta del server:", error.response.data);
//         console.log("Status code:", error.response.status);
//       }

//       setIsLoading(false);

//       if (error.response && error.response.status === 401) {
//         handleSessionExpired();
//       } else {
//         errorHandler(error);
//       }

//       return null;
//     }
//   };

//   // Gestione della scadenza della sessione
//   const handleSessionExpired = () => {
//     console.log("Token scaduto. Disconnessione in corso...");
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     dispatch({ type: "LOGOUT" });
//     toast.warning("Sessione scaduta. Effettua nuovamente il login.");
//   };

//   // Ottieni tutti gli utenti
//   const getUsers = async () => {
//     const res = await apiRequest("get", "/user");
//     return res?.data;
//   };

//   // Registrazione utente
//   const signUp = async ({ formData }) => {
//     // MODIFICATO: Verifica quale endpoint è corretto - potrebbe essere uno di questi
//     // Prova prima con /api/sign-up (se il backend usa un prefisso /api)
//     const res = await apiRequest("post", "/api/sign-up", formData);

//     // Se fallisce, prova con l'endpoint originale
//     if (!res) {
//       console.log("Tentativo con endpoint alternativo...");
//       const altRes = await apiRequest("post", "/sign-up", formData);

//       if (altRes?.status === 201) {
//         toast.success("Per favore controlla la tua email per la verifica.");
//         return true;
//       }

//       // Se fallisce anche questo, prova con /user/sign-up
//       if (!altRes) {
//         console.log("Tentativo con terzo endpoint...");
//         const thirdRes = await apiRequest("post", "/user/sign-up", formData);

//         if (thirdRes?.status === 201) {
//           toast.success("Per favore controlla la tua email per la verifica.");
//           return true;
//         }
//       }

//       return false;
//     }

//     if (res?.status === 201) {
//       toast.success("Per favore controlla la tua email per la verifica.");
//       return true;
//     }

//     return false;
//   };

//   // Aggiornamento utente
//   const updateUser = async ({ formData }) => {
//     // Validazione dei dati
//     if (formData.profilePicture && formData.profilePicture.length > 5000000) {
//       toast.error(
//         "L'immagine del profilo è troppo grande. Usa un'immagine più piccola."
//       );
//       return false;
//     }

//     // Pulizia dei dati
//     const dataToSend = { ...formData };
//     if (dataToSend.confirmPassword) {
//       delete dataToSend.confirmPassword;
//     }

//     const res = await apiRequest(
//       "put",
//       `/user/update/${user?._id}`,
//       dataToSend,
//       true
//     );

//     if (res?.status === 200) {
//       const updatedUser = res.data.user;
//       dispatch({ type: "LOGIN", payload: { user: updatedUser, token } });
//       toast.success("Utente aggiornato con successo.");
//       alert("Utente aggiornato con successo.");
//       return true;
//     }
//     return false;
//   };

//   // Eliminazione utente
//   const deleteUser = async () => {
//     const isConfirmed = window.confirm(
//       "Sei veramente sicuro di voler eliminare questo borgo? Tutti i tuoi dati verranno eliminati."
//     );

//     if (!isConfirmed) return false;

//     const res = await apiRequest(
//       "delete",
//       `/user/delete/${user._id}`,
//       null,
//       true
//     );

//     if (res?.status === 200) {
//       dispatch({ type: "LOGOUT" });
//       toast.success("Utente eliminato con successo.");
//       alert("Utente eliminato con successo.");
//       return true;
//     }
//     return false;
//   };

//   return { getUsers, signUp, updateUser, deleteUser, isLoading };
// };

// import axios from "axios";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import { useAuthContext } from "../auth/useAuthContext";
// import errorHandler from "../utils/errorHandler";

// // Configurazione dell'ambiente
// const getBaseURL = () =>
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:3000"
//     : "https://borghi-backend.onrender.com";

// export const useManageUsers = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const { user, token, dispatch } = useAuthContext();
//   const baseURL = getBaseURL();

//   // Gestione della scadenza della sessione
//   const handleSessionExpired = () => {
//     console.log("Token scaduto. Disconnessione in corso...");
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     dispatch({ type: "LOGOUT" });
//     toast.warning("Sessione scaduta. Effettua nuovamente il login.");
//   };

//   // Funzione di gestione delle richieste API
//   const apiRequest = async (
//     method,
//     endpoint,
//     data = null,
//     withCredentials = false
//   ) => {
//     try {
//       setIsLoading(true);

//       const url = `${baseURL}${endpoint}`;
//       console.log(`Effettuando richiesta ${method.toUpperCase()} a: ${url}`);

//       const config = {
//         headers: {},
//         withCredentials,
//       };

//       // Aggiungi token se disponibile
//       if (token?.token) {
//         config.headers.Authorization = `Bearer ${token.token}`;
//       }

//       let response;
//       method = method.toLowerCase();

//       if (method === "get") {
//         response = await axios.get(url, config);
//       } else if (method === "post") {
//         response = await axios.post(url, data, config);
//       } else if (method === "put") {
//         response = await axios.put(url, data, config);
//       } else if (method === "delete") {
//         response = await axios.delete(url, config);
//       } else {
//         throw new Error("Metodo non supportato");
//       }

//       return response;
//     } catch (error) {
//       console.error(`Errore durante ${method} su ${endpoint}:`, error);

//       // Log più dettagliato per il debugging
//       if (error.response) {
//         console.log("Risposta del server:", error.response.data);
//         console.log("Status code:", error.response.status);
//       }

//       if (error.response && error.response.status === 401) {
//         handleSessionExpired();
//       } else {
//         errorHandler(error);
//       }

//       return null;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Ottieni tutti gli utenti
//   const getUsers = async () => {
//     const res = await apiRequest("get", "/user");
//     return res?.data;
//   };

//   // Ottieni info dell'utente
//   const getUserProfile = async () => {
//     const res = await apiRequest("get", "/user/_id");
//     return res?.data;
//   };

//   // Registrazione utente
//   const signUp = async ({ formData }) => {
//     // Array degli endpoint da provare in ordine
//     const endpoints = ["/api/sign-up", "/sign-up", "/user/sign-up"];

//     for (const endpoint of endpoints) {
//       console.log(`Tentativo registrazione con endpoint: ${endpoint}`);
//       const res = await apiRequest("post", endpoint, formData);

//       if (res?.status === 201) {
//         toast.success("Per favore controlla la tua email per la verifica.");
//         return true;
//       }
//     }

//     return false;
//   };

//   // Validazione dei dati utente
//   const validateUserData = (formData) => {
//     if (formData.profilePicture && formData.profilePicture.length > 5000000) {
//       toast.error(
//         "L'immagine del profilo è troppo grande. Usa un'immagine più piccola."
//       );
//       return false;
//     }
//     return true;
//   };

//   // Aggiornamento utente
//   const updateUser = async ({ formData }) => {
//     // Validazione dei dati
//     if (!validateUserData(formData)) return false;

//     // Pulizia dei dati
//     const dataToSend = { ...formData };
//     if (dataToSend.confirmPassword) {
//       delete dataToSend.confirmPassword;
//     }

//     const res = await apiRequest(
//       "put",
//       `/user/update/${user?._id}`,
//       dataToSend,
//       true
//     );

//     if (res?.status === 200) {
//       const updatedUser = res.data.user;
//       dispatch({ type: "LOGIN", payload: { user: updatedUser, token } });
//       toast.success("Utente aggiornato con successo.");
//       alert("Utente aggiornato con successo.");
//       return true;
//     }
//     return false;
//   };

//   // Eliminazione utente
//   const deleteUser = async () => {
//     const isConfirmed = window.confirm(
//       "Sei veramente sicuro di voler eliminare questo borgo? Tutti i tuoi dati verranno eliminati."
//     );

//     if (!isConfirmed) return false;

//     const res = await apiRequest(
//       "delete",
//       `/user/delete/${user._id}`,
//       null,
//       true
//     );

//     if (res?.status === 200) {
//       dispatch({ type: "LOGOUT" });
//       toast.success("Utente eliminato con successo.");
//       alert("Utente eliminato con successo.");
//       return true;
//     }
//     return false;
//   };

//   return {
//     getUserProfile,
//     getUsers,
//     signUp,
//     updateUser,
//     deleteUser,
//     isLoading,
//   };
// };

import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../auth/useAuthContext";
import errorHandler from "../utils/errorHandler";

// Configurazione dell'ambiente
const getBaseURL = () =>
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://borghi-backend.onrender.com";

export const useManageUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, token, dispatch } = useAuthContext();
  const baseURL = getBaseURL();

  // Gestione della scadenza della sessione
  const handleSessionExpired = () => {
    console.log("Token scaduto. Disconnessione in corso...");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
    toast.warning("Sessione scaduta. Effettua nuovamente il login.");
  };

  // Funzione di gestione delle richieste API
  const apiRequest = async (
    method,
    endpoint,
    data = null,
    withCredentials = false
  ) => {
    try {
      setIsLoading(true);

      const url = `${baseURL}${endpoint}`;
      console.log(`Effettuando richiesta ${method.toUpperCase()} a: ${url}`);

      const config = {
        headers: {},
        withCredentials,
      };

      // Aggiungi token se disponibile
      if (token?.token) {
        config.headers.Authorization = `Bearer ${token.token}`;
      }

      let response;
      method = method.toLowerCase();

      if (method === "get") {
        response = await axios.get(url, config);
      } else if (method === "post") {
        response = await axios.post(url, data, config);
      } else if (method === "put") {
        response = await axios.put(url, data, config);
      } else if (method === "delete") {
        response = await axios.delete(url, config);
      } else {
        throw new Error("Metodo non supportato");
      }

      return response;
    } catch (error) {
      console.error(`Errore durante ${method} su ${endpoint}:`, error);

      // Log più dettagliato per il debugging
      if (error.response) {
        console.log("Risposta del server:", error.response.data);
        console.log("Status code:", error.response.status);
      }

      if (error.response && error.response.status === 401) {
        handleSessionExpired();
      } else {
        errorHandler(error);
      }

      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // Ottieni tutti gli utenti
  const getUsers = async () => {
    const res = await apiRequest("get", "/user");
    return res?.data;
  };

  // Ottieni info dell'utente - CORRETTO
  const getUserProfile = async () => {
    if (!user?._id) {
      console.error("ID utente non disponibile");
      return null;
    }
    const res = await apiRequest("get", `/user/${user._id}`);
    return res?.data;
  };

  // Registrazione utente
  const signUp = async ({ formData }) => {
    // Array degli endpoint da provare in ordine
    const endpoints = ["/api/sign-up", "/sign-up", "/user/sign-up"];

    for (const endpoint of endpoints) {
      console.log(`Tentativo registrazione con endpoint: ${endpoint}`);
      const res = await apiRequest("post", endpoint, formData);

      if (res?.status === 201) {
        toast.success("Per favore controlla la tua email per la verifica.");
        return true;
      }
    }

    return false;
  };

  // Validazione dei dati utente
  const validateUserData = (formData) => {
    if (formData.profilePicture && formData.profilePicture.length > 5000000) {
      toast.error(
        "L'immagine del profilo è troppo grande. Usa un'immagine più piccola."
      );
      return false;
    }
    return true;
  };

  // Aggiornamento utente
  const updateUser = async ({ formData }) => {
    // Validazione dei dati
    if (!validateUserData(formData)) return false;

    // Controllo se l'ID utente è disponibile
    if (!user?._id) {
      console.error("ID utente non disponibile per l'aggiornamento");
      toast.error("Impossibile aggiornare l'utente: ID non disponibile");
      return false;
    }

    // Pulizia dei dati
    const dataToSend = { ...formData };
    if (dataToSend.confirmPassword) {
      delete dataToSend.confirmPassword;
    }

    const res = await apiRequest(
      "put",
      `/user/update/${user._id}`,
      dataToSend,
      true
    );

    if (res?.status === 200) {
      const updatedUser = res.data.user;
      dispatch({ type: "LOGIN", payload: { user: updatedUser, token } });
      toast.success("Utente aggiornato con successo.");
      alert("Utente aggiornato con successo.");
      return true;
    }
    return false;
  };

  // Eliminazione utente
  const deleteUser = async () => {
    const isConfirmed = window.confirm(
      "Sei veramente sicuro di voler eliminare questo account? Tutti i tuoi dati verranno eliminati dal nostro database."
    );

    if (!isConfirmed) return false;

    // Controllo se l'ID utente è disponibile
    if (!user?._id) {
      console.error("ID utente non disponibile per l'eliminazione");
      toast.error("Impossibile eliminare l'utente: ID non disponibile");
      return false;
    }

    const res = await apiRequest(
      "delete",
      `/user/delete/${user._id}`,
      null,
      true
    );

    if (res?.status === 200) {
      dispatch({ type: "LOGOUT" });
      toast.success("Utente eliminato con successo.");
      alert("Utente eliminato con successo.");
      return true;
    }
    return false;
  };

  return {
    getUserProfile,
    getUsers,
    signUp,
    updateUser,
    deleteUser,
    isLoading,
  };
};
