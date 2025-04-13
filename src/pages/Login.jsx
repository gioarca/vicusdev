import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { animateScroll as scroll } from "react-scroll";
import { useManageAuth } from "../hooks/auth/useManageAuth";
import { motion } from "framer-motion";

const Login = ({ model }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { userLogin, isLoading, user } = useManageAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await userLogin({ formData, model });
      if (userData) {
        navigate("/user/dashboard"); // ✅ QUESTO FA IL REDIRECT DIRETTO
      }
      console.log("User data:", userData);
    } catch (error) {
      console.log("Error during login", error);
      alert("Email o password non corretti");
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  useEffect(() => {
    scroll.scrollToTop({ duration: 1000, smooth: "easeInOutQuad" });
    if (user) {
      navigate("/user/dashboard");
    }
  }, [user, navigate]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 py-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        <div className="p-8">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-light text-gray-800 mb-4">
              <span className="text-red-800 font-medium">
                {t("welcome_back")}
              </span>
            </h1>
            {/* <p className="text-gray-500 text-sm mb-8">{t("loginWithEmail")}</p> */}

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
                  />
                  <InputField
                    name="password"
                    type="password"
                    placeholder={t("password")}
                    value={formData.password}
                    onChange={handleInputChange}
                    icon="🔒"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="rememberMe"
                      name="Ricordati di me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      className="h-4 w-4 text-red-800 focus:ring-red-700 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="Ricordati di me"
                      className="ml-2 block text-sm text-gray-600"
                    >
                      Ricordati di me
                    </label>
                  </div>
                  <div className="text-sm">
                    <Link
                      to="/forgotpassword"
                      className="font-medium text-red-800 hover:text-red-700"
                    >
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
                  to="/loginadmin"
                  className="text-sm text-gray-600 hover:text-red-800 transition-colors"
                >
                  {t("admin_account")}{" "}
                  <span className="font-medium text-red-800">
                    {t("click_here")}
                  </span>
                </Link>

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
    </div>
  );
};

// Input field component with animation
const InputField = ({ name, type, placeholder, value, onChange, icon }) => {
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
      </div>
    </div>
  );
};

export default Login;
