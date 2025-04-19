import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Loader from "../../components/Loader";
import { useManageAuth } from "../../hooks/auth/useManageAuth";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const PasswordReset = ({ model }) => {
  const { token } = useParams();
  const { passwordReset, isLoading, resetSuccess } = useManageAuth();

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const [passwordVisibility, setPasswordVisibility] = useState({
    newPassword: false,
    confirmNewPassword: false,
  });

  const passwordRequirements = [
    {
      id: 1,
      text: "Almeno 6 caratteri",
      valid: formData.newPassword.length >= 6,
    },
    {
      id: 2,
      text: "Almeno una lettera maiuscola",
      valid: /[A-Z]/.test(formData.newPassword),
    },
    {
      id: 3,
      text: "Almeno un numero",
      valid: /[0-9]/.test(formData.newPassword),
    },
    {
      id: 4,
      text: "Almeno un carattere speciale",
      valid: /[!@#$%^&*(),.?":{}|<>]/.test(formData.newPassword),
    },
  ];

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const validateForm = () => {
    let valid = true;
    const errors = {
      newPassword: "",
      confirmNewPassword: "",
    };

    // Verifica che la password soddisfi tutti i requisiti
    const allRequirementsMet = passwordRequirements.every((req) => req.valid);

    if (!allRequirementsMet) {
      errors.newPassword = "La password non soddisfa tutti i requisiti";
      valid = false;
    }

    // Verifica che le password corrispondano
    if (formData.newPassword !== formData.confirmNewPassword) {
      errors.confirmNewPassword = "Le password non corrispondono";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Reset degli errori quando l'utente inizia a digitare
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await passwordReset({ model, token, formData });
      setFormData({
        newPassword: "",
        confirmNewPassword: "",
      });
    } catch (error) {
      console.error("Errore durante il reset della password", error);
    }
  };

  useEffect(() => {
    scroll.scrollToTop({ duration: 800, smooth: "easeInOutQuad" });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="w-full min-h-screen"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-rose-50 to-pink-50 px-4 py-12">
        <div className="w-full max-w-md rounded-2xl shadow-xl p-8 bg-white border border-red-100">
          <h3 className="text-red-600 text-2xl font-semibold mb-6 text-center">
            Imposta la tua nuova password
          </h3>

          {resetSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 bg-green-50 p-4 rounded-lg border border-green-200"
            >
              <p className="text-green-700 font-medium text-center">
                Password aggiornata con successo!
              </p>
            </motion.div>
          )}

          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Requisiti password:
                  </h4>
                  <ul className="space-y-1">
                    {passwordRequirements.map((req) => (
                      <li key={req.id} className="flex items-center text-xs">
                        <span
                          className={`mr-2 ${
                            req.valid ? "text-green-500" : "text-gray-400"
                          }`}
                        >
                          {req.valid ? "✓" : "○"}
                        </span>
                        <span
                          className={
                            req.valid ? "text-green-600" : "text-gray-600"
                          }
                        >
                          {req.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <InputField
                  name="newPassword"
                  label="Nuova password"
                  type={passwordVisibility.newPassword ? "text" : "password"}
                  placeholder="Inserisci la tua nuova password"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  error={formErrors.newPassword}
                  showPassword={passwordVisibility.newPassword}
                  onToggleVisibility={() =>
                    togglePasswordVisibility("newPassword")
                  }
                />

                <InputField
                  name="confirmNewPassword"
                  label="Conferma password"
                  type={
                    passwordVisibility.confirmNewPassword ? "text" : "password"
                  }
                  placeholder="Conferma la tua nuova password"
                  value={formData.confirmNewPassword}
                  onChange={handleInputChange}
                  error={formErrors.confirmNewPassword}
                  showPassword={passwordVisibility.confirmNewPassword}
                  onToggleVisibility={() =>
                    togglePasswordVisibility("confirmNewPassword")
                  }
                />
              </div>

              <button
                disabled={isLoading}
                type="submit"
                className="w-full font-medium py-3 mt-4 flex items-center justify-center bg-gradient-to-r from-red-500 to-red-700 text-white rounded-full hover:from-red-600 hover:to-red-800 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? "Elaborazione..." : "Reimposta password"}
              </button>

              <div className="text-center text-gray-500 text-xs">
                <p className="mt-4">
                  La tua sicurezza è la nostra priorità. Utilizza una password
                  unica e complessa per proteggere il tuo account.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </motion.div>
  );
};

const InputField = ({
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  showPassword,
  onToggleVisibility,
}) => {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-3 bg-gray-50 rounded-lg border focus:ring-2 transition-all duration-200 ease-in-out ${
            error
              ? "border-red-400 focus:ring-red-200"
              : "border-gray-200 focus:border-red-500 focus:ring-red-100"
          }`}
          required
        />
        <button
          type="button"
          onClick={onToggleVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700 focus:outline-none"
          aria-label={showPassword ? "Nascondi password" : "Mostra password"}
        >
          {showPassword ? (
            <IoEyeOffOutline className="w-5 h-5" />
          ) : (
            <IoEyeOutline className="w-5 h-5" />
          )}
        </button>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default PasswordReset;
