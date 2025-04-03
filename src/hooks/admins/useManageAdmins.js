import { useState } from "react";
import axios from "axios";
import errorHandler from "../utils/errorHandler";
import { useAuthContext } from "../auth/useAuthContext";
import { toast } from "react-toastify";

export const useManageAdmin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { admin, token, dispatch } = useAuthContext();

  const baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://borghi-backend.onrender.com";

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
    try {
      setIsLoading(true);
      const res = await axios.get(`${baseURL}/admin`);
      if (res.status === 200) {
        setIsLoading(false);
        const admin = res.data;
        return admin;
      }
    } catch (error) {
      console.error("Error getting admin:", error);
      setIsLoading(false);

      errorHandler(error);
    }
  };

  const getAdminById = async (id) => {
    try {
      setIsLoading(true);

      const res = await axios.get(`${baseURL}/admin/${id}`);

      if (res.status === 200) {
        setIsLoading(false);
        const admin = res.data;
        return admin;
      }
    } catch (error) {
      console.error("Error getting admin details:", error);
      setIsLoading(false);

      errorHandler(error);
    }
  };

  const createAdmin = async ({ formData }) => {
    try {
      setIsLoading(true);

      const res = await axios.post(`${baseURL}/admin/create`, formData, {
        withCredentials: true,
      });

      if (res.status === 201) {
        setIsLoading(false);
        toast.success("Admin created succesfully.");
      }
    } catch (error) {
      console.error("Error adding an admin:", error);

      if (error.response && error.response.status === 401) {
        console.log("Token expired. Logging out...");
        localStorage.removeItem("admin");
        localStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });

        toast.warning("Session expired. Please log in again.");
      } else {
        errorHandler(error);
      }
      setIsLoading(false);
    }
  };

  const updateAdmin = async ({ formData }) => {
    try {
      setIsLoading(true);

      const res = await axios.put(
        `${baseURL}/admin/update/${admin._id}`,
        formData,
        { withCredentials: true }
      );

      if (res.status === 200) {
        setIsLoading(false);
        const updatedadmin = res.data.admin;

        dispatch({ type: "LOGIN", payload: { admin: updatedadmin, token } });

        toast.success("Admin updated successfully.");
      }
    } catch (error) {
      console.error("Error during update:", error);
      if (error.response && error.response.status === 401) {
        console.log("Token expired. Logging out...");
        localStorage.removeItem("admin");
        localStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });

        toast.warning("Session expired. Please log in again.");
      } else {
        errorHandler(error);
      }
      setIsLoading(false);
    }
  };

  const deleteAdmin = async (id) => {
    const isConfirmed = window.confirm(
      "Sei veramente sicuro di voler eliminare questo borgo? Tutti i tuoi dati verranno eliminati."
    );
    if (!isConfirmed) return false;
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
  // Modificata la funzione deleteAdmin per utilizzare axios
  //   try {
  //     setIsLoading(true);

  //     const res = await axios.delete(`${baseURL}/admin/delete/${id}`, {
  //       withCredentials: true,
  //     });

  //     if (res.status === 200) {
  //       setIsLoading(false);
  //       toast.success("Admin deleted successfully.");
  //     }
  //   } catch (error) {
  //     console.error("Error during deletion:", error);

  //     if (error.response && error.response.status === 401) {
  //       console.log("Token expired. Logging out...");
  //       localStorage.removeItem("admin");
  //       localStorage.removeItem("token");
  //       dispatch({ type: "LOGOUT" });

  //       toast.warning("Session expired. Please log in again.");
  //     } else {
  //       errorHandler(error);
  //     }
  //     setIsLoading(false);
  //   }
  // };

  return {
    isLoading,
    getAdmins,
    getAdminById,
    createAdmin,
    updateAdmin,
    deleteAdmin,
  };
};
