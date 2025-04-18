// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { animateScroll as scroll } from "react-scroll";
// import Loader from "../../components/Loader";
// import { useManageAuth } from "../../hooks/auth/useManageAuth";
// import { IoIosCheckmarkCircle } from "react-icons/io";
// import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
// import { motion } from "framer-motion";

// const PasswordReset = ({ model }) => {
//   const { token } = useParams();
//   const { passwordReset, isLoading } = useManageAuth();

//   const [formData, setFormData] = useState({
//     newPassword: "",
//     confirmNewPassword: "",
//   });

//   const [passwordVisibility, setPasswordVisibility] = useState({
//     newPassword: false,
//     confirmNewPassword: false,
//   });

//   const togglePasswordVisibility = (field) => {
//     setPasswordVisibility((prev) => ({
//       ...prev,
//       [field]: !prev[field],
//     }));
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await passwordReset({ model, token, formData });
//       setFormData({
//         newPassword: "",
//         confirmNewPassword: "",
//       });
//     } catch (error) {
//       console.error("Error during password reset", error);
//     }
//   };

//   useEffect(() => {
//     scroll.scrollToTop({ duration: 1000, smooth: "easeInOutQuad" });
//   }, []);

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   return (
//     <motion.div
//       className="space-y-6 w-full"
//       initial="hidden"
//       animate="visible"
//       variants={fadeInUp}
//     >
//       <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-rose-50 to-pink-50 px-3 md:px-0 py-10 md:py-20">
//         <div className="w-full max-w-[570px] rounded-2xl shadow-2xl p-10 bg-white border border-red-100">
//           <h3 className="text-red-600 text-3xl leading-9 font-semibold mb-8 text-center">
//             Imposta la tua nuova password
//           </h3>
//           {isLoading && (
//             <div className="flex items-center justify-center mx-auto py-10">
//               <Loader />
//             </div>
//           )}
//           {!isLoading && (
//             <form onSubmit={handleSubmit} className="py-4">
//               <div className="flex flex-col items-center w-full">
//                 <div className="relative w-full mb-6 group">
//                   <p className="text-xs text-gray-500 italic">
//                     La password dev'essere composta da almeno 6 caratteri,
//                     almeno una lettera maiuscola, un numero e un carattere
//                     speciale
//                   </p>
//                   <p className="text-xs text-bold mb-5">(esempio: Ciao123!)</p>
//                 </div>

//                 <div className="space-y-4">
//                   <InputField
//                     name="newPassword"
//                     type={passwordVisibility.newPassword ? "text" : "password"}
//                     placeholder="Conferma la tua nuova Password"
//                     value={formData.newPassword}
//                     onChange={handleInputChange}
//                     icon="🔒"
//                     isPassword={true}
//                     showPassword={passwordVisibility.newPassword}
//                     onToggleVisibility={() =>
//                       togglePasswordVisibility("newPassword")
//                     }
//                   />

//                   <InputField
//                     name="confirmNewPassword"
//                     type={
//                       passwordVisibility.confirmNewPassword
//                         ? "text"
//                         : "password"
//                     }
//                     placeholder="Conferma la tua nuova Password"
//                     value={formData.confirmNewPassword}
//                     onChange={handleInputChange}
//                     icon="🔒"
//                     isPassword={true}
//                     showPassword={passwordVisibility.confirmNewPassword}
//                     onToggleVisibility={() =>
//                       togglePasswordVisibility("confirmNewPassword")
//                     }
//                   />
//                 </div>

//                 <button
//                   disabled={isLoading}
//                   type="submit"
//                   className="w-full font-bold py-4 m-4 flex items-center justify-center bg-gradient-to-r from-red-500 to-red-700 text-white rounded-full hover:from-red-600 hover:to-red-800 transition-all duration-300 ease-in-out focus:outline-none hover:shadow-lg"
//                 >
//                   Reset Password
//                 </button>

//                 <div className="mt-6 text-center text-gray-400 text-sm">
//                   La tua sicurezza è la nostra priorità. Assicurati di
//                   utilizzare una password unica e complessa per proteggere il
//                   tuo account.
//                 </div>
//               </div>
//             </form>
//           )}
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// // Input field componente con animazione
// const InputField = ({
//   name,
//   type,
//   placeholder,
//   value,
//   onChange,
//   icon,
//   isPassword,
//   showPassword,
//   onToggleVisibility,
// }) => {
//   const [isFocused, setIsFocused] = useState(false);

//   return (
//     <div
//       className={`relative rounded-full border ${
//         isFocused ? "border-red-500 shadow-sm" : "border-gray-300"
//       } transition-all duration-300 overflow-hidden`}
//     >
//       <div className="flex items-center px-6">
//         <span className="text-gray-400 mr-3">{icon}</span>
//         <input
//           name={name}
//           type={type}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//           className="w-full py-4 bg-transparent placeholder-gray-400 text-gray-800 focus:outline-none"
//           required
//         />
//         {isPassword && (
//           <button
//             type="button"
//             onClick={onToggleVisibility}
//             className="ml-2 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors duration-200"
//           >
//             {showPassword ? (
//               <IoEyeOffOutline className="w-5 h-5" />
//             ) : (
//               <IoEyeOutline className="w-5 h-5" />
//             )}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PasswordReset;

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
