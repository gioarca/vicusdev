import { useState } from "react";
import axios from "axios";
import errorHandler from "../utils/errorHandler";
import { useAuthContext } from "../auth/useAuthContext";
import { toast } from "react-toastify";

export const useManageAdmin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, token, dispatch } = useAuthContext();

  const baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://borghi-backend.onrender.com";

  // Funzione centralizzata per gestire la sessione scaduta
  const handleSessionExpired = () => {
    console.log("Token scaduto. Disconnessione in corso...");
    localStorage.removeItem("admin");
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

      setIsLoading(false);

      if (error.response && error.response.status === 401) {
        handleSessionExpired();
      } else {
        errorHandler(error);
      }

      return null;
    }
  };

  const getAdmins = async () => {
    const response = await apiRequest("get", "/admins");
    return response?.data || null;
  };

  const getAdminById = async (adminId) => {
    const id = adminId || user?._id;
    if (!id) {
      toast.error("ID dell'amministratore non disponibile");
      return null;
    }

    const response = await apiRequest("get", `/admin/${id}`);
    return response?.data || null;
  };

  const getUsers = async () => {
    const response = await apiRequest("get", "/admin/users");
    return response?.data || null;
  };

  const createAdmin = async ({ formData }) => {
    const response = await apiRequest("post", "/admin/sign-up", formData, true);

    if (response?.status === 201) {
      toast.success("Per favore controlla la tua email per la verifica.");
      return true;
    }

    return false;
  };

  const updateAdmin = async ({ formData }) => {
    if (!user?._id) {
      toast.error("ID dell'amministratore non disponibile");
      return false;
    }

    // Crea una copia dei dati del form
    const requestData = { ...formData };

    // Rimuovi i campi relativi alla password dall'aggiornamento del profilo
    // perché ora il backend non richiede più la password per gli aggiornamenti
    delete requestData.currentPassword;
    delete requestData.password;
    delete requestData.newPassword;
    delete requestData.confirmPassword;

    const response = await apiRequest(
      "put",
      `/admin/update/${user._id}`,
      requestData,
      true
    );

    if (response?.status === 200) {
      const updatedAdmin = response.data.user;
      dispatch({ type: "LOGIN", payload: { admin: updatedAdmin, token } });
      toast.success("Profilo aggiornato con successo.");
      return response.data;
    }

    return false;
  };

  // Funzione separata specificamente per il cambio password
  const changePassword = async ({
    currentPassword,
    newPassword,
    confirmPassword,
  }) => {
    if (!user?._id) {
      toast.error("ID dell'amministratore non disponibile");
      return false;
    }

    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("Tutti i campi password sono obbligatori");
      return false;
    }

    if (newPassword !== confirmPassword) {
      toast.error("La nuova password e la conferma non corrispondono");
      return false;
    }

    const requestData = {
      currentPassword,
      password: newPassword,
      confirmPassword,
    };

    const response = await apiRequest(
      "put",
      `/admin/change-password/${user._id}`,
      requestData,
      true
    );

    if (response?.status === 200) {
      toast.success("Password aggiornata con successo.");
      return true;
    }

    return false;
  };

  const deleteAdmin = async () => {
    if (!user?._id) {
      toast.error("ID dell'amministratore non disponibile");
      return false;
    }

    const isConfirmed = window.confirm(
      "Sei veramente sicuro di voler eliminare questo account? Tutti i tuoi dati verranno eliminati."
    );

    if (!isConfirmed) return false;

    const response = await apiRequest(
      "delete",
      `/admin/delete/${user._id}`,
      null,
      true
    );

    if (response?.status === 200) {
      dispatch({ type: "LOGOUT" });
      toast.success("Admin eliminato con successo.");
      alert("Admin eliminato con successo.");
      return true;
    }

    return false;
  };

  return {
    isLoading,
    getAdmins,
    getAdminById,
    getUsers,
    createAdmin,
    updateAdmin,
    changePassword,
    deleteAdmin,
  };
};
