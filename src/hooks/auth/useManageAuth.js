import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import errorHandler from "../utils/errorHandler";

export const useManageAuth = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://borghi-backend.onrender.com";

  const userLogin = async ({ formData, model = "user" }) => {
    try {
      setIsLoading(true);
      console.log("Form data per login:", formData);
      const response = await axios.post(`${baseURL}/${model}/login`, formData);
      const { codeRequested, ...json } = response.data;

      if (response.status === 200 && !codeRequested) {
        dispatch({
          type: "LOGIN",
          payload: {
            user: json.user,
            token: {
              token: json.token,
              expiration: json.expiration,
            },
          },
        });

        localStorage.setItem("user", JSON.stringify(json.user));
        localStorage.setItem(
          "token",
          JSON.stringify({ token: json.token, expiration: json.expiration })
        );

        setIsLoading(false);

        if (model) {
          console.log("Il parametro model è definito");
        }

        setTimeout(() => {
          navigate(`/${model}/dashboard`);
        }, 200);
        return json;
      }
    } catch (error) {
      console.error("Errore durante il login", error);
      alert(
        "Errore durante il login, i tuoi dati non sono corretti oppure il tuo account non è stato verificato"
      );
      setIsLoading(false);

      if (
        error.response &&
        error.response.status === 401 &&
        error.response.data.message ===
          "Email not verified. Please check your email for verification instructions."
      ) {
        try {
          await requestNewVerificationEmail(formData.email);
          window.alert("New verification email requested successfully.");
        } catch (err) {
          console.error("Error requesting new verification email:", err);
        }
      }
      errorHandler(error);
    }
  };

  const loginAdmin = async ({ formData, model = "admin" }) => {
    try {
      setIsLoading(true);
      const res = await axios.post(`${baseURL}/${model}/login`, formData, {
        withCredentials: true,
      });
      const { codeRequested, ...json } = res.data;

      if (res.status === 200 && !codeRequested) {
        dispatch({
          type: "LOGIN",
          payload: {
            user: json.user,
            token: {
              token: json.token,
              expiration: json.expiration,
            },
          },
        });
        console.log("json", json.user);

        localStorage.setItem("admin", JSON.stringify(json.user));
        localStorage.setItem(
          "token",
          JSON.stringify({ token: json.token, expiration: json.expiration })
        );

        setIsLoading(false);

        if (model) {
          console.log("Il parametro model è definito");
        }
        setTimeout(() => {
          navigate(`/${model}/dashboard`);
        });
        return json;
      }
    } catch (error) {
      console.error("Error during login", error);
      alert(
        "Errore durante il login, i tuoi dati non sono corretti oppure il tuo account non è stato verificato"
      );
      setIsLoading(false);

      if (
        error.response &&
        error.response.status === 401 &&
        error.response.data.message ===
          "Email not verified. Please check your email for verification instructions."
      ) {
        try {
          await requestNewVerificationEmail(formData.email);
          window.alert("New verification email requested successfully.");
        } catch (err) {
          console.error("Error requesting new verification email:", err);
        }
      }
      errorHandler(error);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);

      const res = await axios.get(`${baseURL}/sign-out`, {
        withCredentials: true,
      });

      if (res.status === 200) {
        setIsLoading(false);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });

        navigate("/signout"); // Redirect to the sign-out page
      }
    } catch (error) {
      console.error("Error during logout:", error);

      if (error.response && error.response.status === 401) {
        console.log("Token rimosso. Disconnessione in corso...");
        // Rimuovi i dati dell'utente e il token da localStorage
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });
      } else {
        errorHandler(error);
      }

      setIsLoading(false);
    }
  };

  const verifyMail = async (model, token) => {
    try {
      setIsLoading(false);
      const res = await axios.post(`${baseURL}/${model}/verify-email/${token}`);
      if (res.status === 200) {
        setIsLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Error during email verification:", error);
      errorHandler(error);

      setIsLoading(false);
    }
    return false;
  };

  const requestNewVerificationEmail = async (email) => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${baseURL}/request-new-verification-email`,
        { email }
      );

      if (res.status === 200) {
        setIsLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Error during email verification:", error);
      errorHandler(error);

      setIsLoading(false);
    }
    return false;
  };

  const verifyPassword = async (model, password) => {
    try {
      setIsLoading(false);

      const res = await axios.post(
        `${baseURL}/${model}/verify-password`,
        { password },
        { withCredentials: true }
      );

      if (res.status === 200) {
        setIsLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Error during password verification:", error);
      errorHandler(error);

      setIsLoading(false);
    }
    return false;
  };

  const passwordReset = async ({ model, token, formData }) => {
    try {
      setIsLoading(false);

      const res = await axios.post(
        `${baseURL}/${model}/password-reset/${token}`,
        formData
      );

      if (res.status === 200) {
        setIsLoading(false);
        if (model === "admin") {
          navigate("/admin/dashboard");
        } else if (model === "admin") {
          navigate("/loginadmin");
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error during password reset", error);

      errorHandler(error);
    }
  };

  const passwordResetRequest = async ({ model, formData }) => {
    console.log(formData);
    try {
      setIsLoading(false);

      const res = await axios.post(
        `${baseURL}/${model}/password-reset-request`,
        formData
      );

      if (res.status === 200) {
        setIsLoading(false);
        navigate("/");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error during password reset", error);

      errorHandler(error);
    }
  };

  return {
    userLogin,
    loginAdmin,
    logout,
    verifyPassword,
    verifyMail,
    requestNewVerificationEmail,
    passwordReset,
    passwordResetRequest,
  };
};
