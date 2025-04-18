import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/auth/useAuthContext";
import Loader from "../components/Loader";
import { useManageUsers } from "../hooks/users/useManageUsers";
import { useTranslation } from "react-i18next";

const UpdateUser = ({ userId }) => {
  const { updateUser, getUserProfile, isLoading } = useManageUsers();
  const { user } = useAuthContext();
  const { t } = useTranslation();

  const [imageError, setImageError] = useState("");
  const [isFormModified, setIsFormModified] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: "",
    phoneNumber: "",
  });

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (dataLoaded) return;

    const loadUserData = async () => {
      if (!user) return;

      setFormData({
        name: user.name || "",
        email: user.email || "",
        password: "",
        confirmPassword: "",
        profilePicture: user.profilePicture || "",
        phoneNumber: user.phoneNumber || "",
      });

      try {
        const id = userId || user._id;
        const freshUserData = await getUserProfile(id);
        if (freshUserData) {
          setFormData((prev) => ({
            ...prev,
            name: freshUserData.name || "",
            email: freshUserData.email || "",
            profilePicture: freshUserData.profilePicture || "",
            phoneNumber: freshUserData.phoneNumber || "",
            password: "",
            confirmPassword: "",
          }));
          setDataLoaded(true);
        }
      } catch (error) {
        console.error("Errore nel caricamento dei dati utente:", error);
      }
    };

    loadUserData();
  }, [user, userId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setIsFormModified(true);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setImageError("La dimensione del file deve essere inferiore a 10MB.");
        return;
      }

      setIsFormModified(true);
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({
          ...formData,
          profilePicture: reader.result,
        });
        setImageError("");
      };
      reader.onerror = (err) => {
        console.log("Errore: ", err);
        setImageError("Errore nella lettura del file.");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password && formData.password !== formData.confirmPassword) {
      window.alert("Le password non corrispondono.");
      return;
    }

    const dataToSubmit = { ...formData };

    try {
      const result = await updateUser({ formData: dataToSubmit });

      if (result) {
        setFormData((prev) => ({
          ...prev,
          password: "",
          confirmPassword: "",
        }));
        setIsFormModified(false);
        // Feedback all'utente
        window.alert("Profilo aggiornato con successo!");
      }
    } catch (error) {
      console.error("Errore nell'aggiornamento del profilo:", error);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center bg-white shadow-md rounded-lg p-8">
          <h3 className="text-2xl mb-4 font-bold text-gray-800">
            Sessione non valida
          </h3>
          <p className="text-gray-600 mb-4">
            Effettua il login per accedere a questa pagina.
          </p>
          <a
            href="/login"
            className="px-6 py-2 bg-red-800 text-white rounded-full hover:bg-red-700 transition-all"
          >
            Vai al login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-10 2xl:px-20 max-w-5xl mx-auto py-6">
      {isLoading ? (
        <div className="flex items-center justify-center mx-auto py-10">
          <Loader />
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="font-semibold flex items-center justify-center mb-6">
            <h3 className="text-3xl md:text-4xl text-gray-800 text-center px-3 border-b-2 border-red-800 pb-2">
              {t("update_profile")}
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Picture Section */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mx-auto pt-4">
              <div className="flex items-center justify-center">
                <figure className="w-[120px] h-[120px] rounded-full border-2 border-red-800 shadow-md flex items-center justify-center overflow-hidden">
                  <img
                    src={formData.profilePicture || "/default-avatar.png"}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                    onError={(e) => {
                      e.target.src = "/default-avatar.png";
                    }}
                  />
                </figure>
              </div>

              <div className="flex flex-col items-center justify-center">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full border-2 border-red-800 border-dashed rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100 transition-all"
                >
                  <div className="flex flex-col items-center justify-center py-4 px-4">
                    <svg
                      className="w-8 h-8 mb-2 text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 16v-4m0-4h.01M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
                      />
                    </svg>
                    <p className="mb-1 text-sm text-gray-600 text-center font-medium">
                      <span className="font-semibold">Clicca per caricare</span>
                    </p>
                    <p className="text-xs text-gray-500">
                      PNG, JPEG o JPG (max. 10MB)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".jpeg, .png, .jpg"
                  />
                </label>
                {imageError && (
                  <p className="text-red-500 text-sm mt-2">{imageError}</p>
                )}
              </div>
            </div>

            {/* Griglia campi form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="text-base font-semibold text-gray-700 block mb-1">
                  {t("name")}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="text-base w-full px-4 py-3 rounded-lg font-medium bg-gray-50 border border-gray-300 focus:border-red-800 focus:outline-none focus:ring-1 focus:ring-red-800 transition-all"
                  placeholder="Inserisci il tuo nome"
                />
              </div>

              <div className="form-group">
                <label className="text-base font-semibold text-gray-700 block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="text-base w-full px-4 py-3 rounded-lg font-medium bg-gray-50 border border-gray-300 focus:border-red-800 focus:outline-none focus:ring-1 focus:ring-red-800 transition-all"
                  placeholder="nome@esempio.com"
                />
              </div>

              <div className="form-group">
                <label className="text-base font-semibold text-gray-700 block mb-1">
                  {t("phone")}
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="text-base w-full px-4 py-3 rounded-lg font-medium bg-gray-50 border border-gray-300 focus:border-red-800 focus:outline-none focus:ring-1 focus:ring-red-800 transition-all"
                  placeholder="+39 123 456 7890"
                />
              </div>

              <div className="form-group">
                <label className="text-base font-semibold text-gray-700 block mb-1">
                  {t("password")}
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="text-base w-full px-4 py-3 rounded-lg font-medium bg-gray-50 border border-gray-300 focus:border-red-800 focus:outline-none focus:ring-1 focus:ring-red-800 transition-all"
                  placeholder="Nuova password"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Lascia vuoto per mantenere la password attuale
                </p>
              </div>

              <div className="form-group">
                <label className="text-base font-semibold text-gray-700 block mb-1">
                  {t("confirm_password")}
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="text-base w-full px-4 py-3 rounded-lg font-medium bg-gray-50 border border-gray-300 focus:border-red-800 focus:outline-none focus:ring-1 focus:ring-red-800 transition-all"
                  placeholder="Conferma password"
                />
              </div>
            </div>

            {/* Pulsante Submit */}
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                disabled={isLoading || !isFormModified}
                className={`px-10 py-3 rounded-full text-white font-semibold text-lg transition-all ${
                  !isFormModified
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-800 hover:bg-red-700 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {t("updating")}...
                  </span>
                ) : (
                  t("update").toUpperCase()
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
