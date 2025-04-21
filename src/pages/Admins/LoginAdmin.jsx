import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import { animateScroll as scroll } from "react-scroll";
import { useManageAuth } from "../../hooks/auth/useManageAuth";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const LoginAdmin = ({ model }) => {
  const { t } = useTranslation();
  const { loginAdmin, isLoading } = useManageAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
  });

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await loginAdmin({ formData, model });
    } catch (error) {
      console.log("Errore nel login:", error);
      alert("Email o password non corretti");
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  useEffect(() => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: "easeInOutQuad",
    });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white shadow-2xl rounded-3xl overflow-hidden"
        variants={fadeInUp}
      >
        <div className="p-8">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-light text-gray-800 mb-4">
              <span className="text-red-800 font-medium">
                {t("welcome_back")} Admin
              </span>
            </h1>

            {isLoading ? (
              <div className="flex items-center justify-center py-10">
                <Loader />
              </div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="w-full space-y-6"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <div className="space-y-4">
                  <InputField
                    name="email"
                    type="email"
                    placeholder={t("email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    icon="✉️"
                    isPassword={false}
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
                    onToggleVisibility={() =>
                      togglePasswordVisibility("password")
                    }
                  />
                </div>

                <div className="flex items-center justify-center">
                  <div className="font-medium text-red-800 hover:text-red-700 text-sm">
                    <Link to="/admin/password-reset ">
                      {t("forgot_password")}
                    </Link>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-red-700 to-red-900 text-white font-medium transition-all duration-300 ease-in-out hover:shadow-lg transform hover:scale-105 focus:outline-none"
                  >
                    {t("sign_in")}
                  </button>
                </div>
              </motion.form>
            )}
            <div className="mt-10 text-center space-y-4 w-full">
              <div className="border-t border-gray-100 pt-6 flex flex-col space-y-4">
                <Link
                  to="/registration"
                  className="text-sm text-gray-600 hover:text-red-800 transition-colors"
                >
                  {t("no_account")}{" "}
                  <span className="font-medium text-red-800">
                    {t("click_here")}
                  </span>
                </Link>

                <Link
                  to="/registrationadmin"
                  className="text-sm text-gray-600 hover:text-red-800 transition-colors"
                >
                  {t("normal_user")}{" "}
                  <span className="font-medium text-red-800">
                    {t("click_here")}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
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

export default LoginAdmin;
