import { useState } from "react";
import axios from "axios";
import errorHandler from "../utils/errorHandler";
import { useAuthContext } from "../auth/useAuthContext";
import { toast } from "react-toastify";

export const useManageUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, token, dispatch } = useAuthContext();

  // Configurazione dell'ambiente
  const baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://borghi-backend.onrender.com";

  // Funzione centralizzata per gestire la sessione scaduta
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
        headers: {
          Authorization: token?.token ? `Bearer ${token.token}` : undefined,
        },
        withCredentials,
      };

      // Aggiungi token se disponibile
      if (token?.token) {
        config.headers.Authorization = `Bearer ${token.token}`;
      }

      // Rimuovi header undefined
      if (!config.headers.Authorization) {
        delete config.headers.Authorization;
      }

      let response;

      switch (method.toLowerCase()) {
        case "get":
          response = await axios.get(url, config);
          break;
        case "post":
          response = await axios.post(url, data, config);
          break;
        case "put":
          response = await axios.put(url, data, config);
          break;
        case "delete":
          response = await axios.delete(url, config);
          break;
        default:
          throw new Error("Metodo non supportato");
      }

      setIsLoading(false);
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
    }
  };

  // Ottieni info dell'utente - CORRETTO
  const getUserProfile = async (userId) => {
    const id = userId || user?._id;
    if (!id) {
      toast.error("ID utente non disponibile");
      console.error("ID utente non disponibile");
      return null;
    }

    const response = await apiRequest("get", `/user/${id}`);
    return response?.data;
  };

  // Registrazione utente
  const signUp = async ({ formData }) => {
    // Array degli endpoint da provare in ordine
    const response = await apiRequest("post", "/user/sign-up", formData, true);

    if (response?.status === 201) {
      toast.success("Per favore controlla la tua email per la verifica.");
      return true;
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

    const response = await apiRequest(
      "put",
      `/user/update/${user._id}`,
      dataToSend,
      true
    );

    if (response?.status === 200) {
      const updatedUser = response.data.user;
      dispatch({ type: "LOGIN", payload: { user: updatedUser, token } });
      toast.success("Utente aggiornato con successo.");
      alert("Utente aggiornato con successo.");
      return true;
    }
    return false;
  };

  // Eliminazione utente
  const deleteUser = async () => {
    // Controllo se l'ID utente è disponibile
    if (!user?._id) {
      console.error("ID utente non disponibile per l'eliminazione");
      toast.error("Impossibile eliminare l'utente: ID non disponibile");
      return false;
    }

    const isConfirmed = window.confirm(
      "Sei veramente sicuro di voler eliminare questo account? Tutti i tuoi dati verranno eliminati dal nostro database."
    );

    if (!isConfirmed) return false;

    const response = await apiRequest(
      "delete",
      `/user/delete/${user._id}`,
      null,
      true
    );

    if (response?.status === 200) {
      dispatch({ type: "LOGOUT" });
      toast.success("Utente eliminato con successo.");
      alert("Utente eliminato con successo.");
      return true;
    }
    return false;
  };

  return {
    getUserProfile,
    signUp,
    updateUser,
    deleteUser,
    isLoading,
  };
};
