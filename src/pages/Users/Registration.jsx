import React, { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { animateScroll as scroll } from "react-scroll";
import { useManageUsers } from "../../hooks/users/useManageUsers";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Registration = () => {
  const { t } = useTranslation();
  const { signUp, isLoading } = useManageUsers();
  const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const registrationSuccessful = await signUp({ formData });
      if (registrationSuccessful) {
        setIsRegistrationComplete(true);
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    scroll.scrollToTop({ duration: 1000, smooth: "easeInOutQuad" });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Step content basato sullo step attuale 1 e 2
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            className="space-y-6 w-full"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2 className="text-xl font-medium text-gray-700">
              {t("personal_info")}
            </h2>
            <div className="space-y-4">
              <InputField
                name="name"
                type="text"
                placeholder={t("name")}
                value={formData.name}
                onChange={handleInputChange}
                icon="👤"
              />
            </div>
            <div className="pt-4">
              <button
                onClick={nextStep}
                className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-red-700 to-red-900 text-white font-medium transition-all duration-300 ease-in-out hover:shadow-lg transform hover:scale-105 focus:outline-none"
              >
                {t("continue")} →
              </button>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            className="space-y-6 w-full"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2 className="text-xl font-medium text-gray-700">
              {t("account_details")}
            </h2>
            <div className="space-y-4">
              <InputField
                name="email"
                type="email"
                placeholder={t("email")}
                value={formData.email}
                onChange={handleInputChange}
                icon="✉️"
              />
              <InputField
                name="password"
                type={passwordVisibility.password ? "text" : "password"}
                placeholder={t("password")}
                value={formData.password}
                onChange={handleInputChange}
                icon="🔒"
                isPassword={true}
                showPassword={passwordVisibility.password}
                onToggleVisibility={() => togglePasswordVisibility("password")}
              />
              <InputField
                name="confirmPassword"
                type={passwordVisibility.confirmPassword ? "text" : "password"}
                placeholder={t("confirm_password")}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                icon="🔒"
                isPassword={true}
                showPassword={passwordVisibility.confirmPassword}
                onToggleVisibility={() =>
                  togglePasswordVisibility("confirmPassword")
                }
              />
              <p className="text-xs text-gray-500 italic">
                La password dev'essere composta da almeno 6 caratteri, almeno
                una lettera maiuscola, un numero e un carattere speciale
              </p>
              <p className="text-xs text-bold">(esempio: Ciao123!)</p>
            </div>
            <div className="flex space-x-4 pt-4">
              <button
                onClick={prevStep}
                className="w-1/3 py-3 px-6 rounded-full bg-white border border-gray-300 text-gray-700 font-medium transition-all duration-300 ease-in-out hover:bg-gray-50 focus:outline-none"
              >
                ← {t("back")}
              </button>
              <button
                type="submit"
                className="w-2/3 py-3 px-6 rounded-full bg-gradient-to-r from-red-700 to-red-900 text-white font-medium transition-all duration-300 ease-in-out hover:shadow-lg transform hover:scale-105 focus:outline-none"
                onClick={handleSubmit}
              >
                {t("complete_registration")}
              </button>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {!isRegistrationComplete ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-white shadow-2xl rounded-3xl overflow-hidden"
        >
          <div className="p-8">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-light text-gray-800 mb-1">
                <span className="text-red-800 font-medium">{t("signUp")}</span>
              </h1>
              <p className="text-gray-500 text-sm mb-8">
                {t("SignUpWithEmail")}
              </p>

              {/* Step indicator */}
              <div className="w-full mb-8">
                <div className="flex justify-between relative">
                  <StepIndicator
                    step={1}
                    currentStep={currentStep}
                    label={t("personal_info")}
                  />
                  <StepIndicator
                    step={2}
                    currentStep={currentStep}
                    label={t("account_details")}
                  />

                  {/* barra di progresso */}
                  <div className="absolute top-5 h-1 bg-gray-200 left-0 right-0 z-0">
                    <motion.div
                      className="h-full bg-red-800"
                      initial={{ width: "0%" }}
                      animate={{ width: currentStep === 1 ? "50%" : "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>

              {isLoading ? (
                <div className="flex items-center justify-center py-10">
                  <Loader />
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full space-y-6">
                  {renderStepContent()}
                </form>
              )}

              <div className="mt-10 text-center space-y-4 w-full">
                <p className="text-xs text-gray-500">
                  {t("accept_terms")}{" "}
                  <a href="#" className="text-red-800 hover:underline">
                    {t("terms_of_service")}
                  </a>{" "}
                  {t("and")}{" "}
                  <a href="#" className="text-red-800 hover:underline">
                    {t("privacy_policy")}
                  </a>
                </p>

                <div className="border-t border-gray-100 pt-6 flex flex-col space-y-4">
                  <Link
                    to="/login"
                    className="text-sm text-gray-600 hover:text-red-800 transition-colors"
                  >
                    {t("alreadyHaveAccount")}{" "}
                    <span className="font-medium text-red-800">
                      {t("click_here")}
                    </span>
                  </Link>

                  <Link
                    to="/registrationadmin"
                    className="text-sm text-gray-600 hover:text-red-800 transition-colors"
                  >
                    {t("admin_or_structure")}{" "}
                    <span className="font-medium text-red-800">
                      {t("click_here")}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <IoIosCheckmarkCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          </motion.div>

          <h2 className="text-3xl font-light text-gray-800 mb-6">
            <span className="font-medium">Registrazione completata!</span>
          </h2>

          <p className="text-gray-600 mb-8">
            Verifica la tua email per completare la registrazione.
          </p>

          <Link to="/login">
            <button className="py-3 px-8 rounded-full bg-gradient-to-r from-red-700 to-red-900 text-white font-medium transition-all duration-300 ease-in-out hover:shadow-lg transform hover:scale-105 focus:outline-none">
              Vai al login
            </button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

// componente per gli indicatori degli step
const StepIndicator = ({ step, currentStep, label }) => {
  const isActive = step <= currentStep;

  return (
    <div className="flex flex-col items-center relative z-10">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${
          isActive ? "bg-red-800 text-white" : "bg-gray-200 text-gray-500"
        } font-medium transition-all duration-300`}
      >
        {step}
      </div>
      <span
        className={`text-xs mt-2 ${
          isActive ? "text-red-800" : "text-gray-500"
        }`}
      >
        {label}
      </span>
    </div>
  );
};

// Input field componente con animazione
const InputField = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  icon,
  isPassword,
  showPassword,
  onToggleVisibility,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`relative rounded-full border ${
        isFocused ? "border-red-500 shadow-sm" : "border-gray-300"
      } transition-all duration-300 overflow-hidden`}
    >
      <div className="flex items-center px-6">
        <span className="text-gray-400 mr-3">{icon}</span>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full py-4 bg-transparent placeholder-gray-400 text-gray-800 focus:outline-none"
          required
        />
        {isPassword && (
          <button
            type="button"
            onClick={onToggleVisibility}
            className="ml-2 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors duration-200"
          >
            {showPassword ? (
              <IoEyeOffOutline className="w-5 h-5" />
            ) : (
              <IoEyeOutline className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Registration;
