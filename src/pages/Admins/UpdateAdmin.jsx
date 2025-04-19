import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/auth/useAuthContext";
import Loader from "../../components/Loader";
import { useManageAdmin } from "../../hooks/admins/useManageAdmins";
import { useTranslation } from "react-i18next";

const UpdateAdmin = ({ adminId }) => {
  // Accetta l'ID come prop
  const { updateAdmin, getAdminById, isLoading } = useManageAdmin();
  const { user } = useAuthContext();
  const { t } = useTranslation();

  const [imageError, setImageError] = useState("");
  const [isFormModified, setIsFormModified] = useState(false);
  const [showPasswordSection, setShowPasswordSection] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    taxId: "",
    email: "",
    specialization: "",
    city: "",
    currentPassword: "", // Password attuale per verifica
    newPassword: "", // Nuova password
    confirmNewPassword: "", // Conferma nuova password
    profilePicture: "",
    phoneNumber: "",
  });
  const [dataLoaded, setDataLoaded] = useState(false); // Flag per tracciare se i dati sono già stati caricati

  useEffect(() => {
    // Evita di ricaricare i dati se sono già stati caricati
    if (dataLoaded) return;

    const loadUserData = async () => {
      if (!user) return;

      // Inizializzazione form con dati utente già disponibili
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
        profilePicture: user.profilePicture || "",
        phoneNumber: user.phoneNumber || "",
        specialization: user.specialization || "",
      });

      // Recupero dati aggiornati dal database
      try {
        // Usa l'ID passato come prop oppure l'ID dell'utente corrente
        const id = adminId || user._id;
        const freshUserData = await getAdminById(id);

        if (freshUserData) {
          setFormData((prev) => ({
            ...prev,
            firstName: freshUserData.firstName || "",
            lastName: freshUserData.lastName || "",
            email: freshUserData.email || "",
            specialization: freshUserData.specialization || "",
            profilePicture: freshUserData.profilePicture || "",
            phoneNumber: freshUserData.phoneNumber || "",
            // Non aggiornare i campi password
          }));

          // Segnala che i dati sono stati caricati
          setDataLoaded(true);
        }
      } catch (error) {
        console.error("Errore nel caricamento dei dati utente:", error);
        window.alert("Impossibile caricare i dati del profilo");
      }
    };

    loadUserData();
  }, [user, adminId]); // Rimuovi getAdminById dalle dipendenze e aggiungi adminId

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setIsFormModified(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setImageError("La dimensione del file deve essere inferiore a 10MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({
        ...prev,
        profilePicture: reader.result,
      }));
      setImageError("");
      setIsFormModified(true);
    };
    reader.onerror = (err) => {
      console.error("Errore nella lettura del file:", err);
      setImageError("Errore nella lettura del file.");
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Se l'utente sta cercando di cambiare password, valida i campi
    const isChangingPassword = formData.newPassword.length > 0;

    if (isChangingPassword) {
      // Verifica che la password attuale sia stata inserita
      if (!formData.currentPassword) {
        window.alert(
          "Inserisci la password attuale per verificare la tua identità."
        );
        return;
      }

      // Verifica che la nuova password sia stata confermata correttamente
      if (formData.newPassword !== formData.confirmNewPassword) {
        window.alert("Le nuove password non corrispondono.");
        return;
      }

      // Verifica la complessità della nuova password (esempio)
      if (formData.newPassword.length < 8) {
        window.alert("La nuova password deve essere di almeno 8 caratteri.");
        return;
      }
    }

    try {
      // Prepara dati per l'aggiornamento
      const updateData = {
        ...formData,
        // Se stiamo cambiando password, invia sia la password corrente che quella nuova
        password: formData.currentPassword, // La password attuale per autenticazione
        newPassword: isChangingPassword ? formData.newPassword : undefined, // La nuova password, solo se impostata
      };

      const result = await updateAdmin({ formData: updateData });

      if (result) {
        window.alert("Profilo aggiornato con successo");
        // Reset dei campi password dopo un aggiornamento riuscito
        setFormData((prev) => ({
          ...prev,
          currentPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        }));
        setIsFormModified(false);
        setShowPasswordSection(false); // Nascondi sezione password dopo l'aggiornamento
      }
    } catch (error) {
      console.error("Errore nell'aggiornamento del profilo:", error);
      window.alert("Errore durante l'aggiornamento del profilo");
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Per sicurezza sei stato disconnesso
          </h3>
          <p className="text-gray-600 mb-4">
            Effettua di nuovo il login per accedere a questa pagina
          </p>
          <a
            href="/login"
            className="px-6 py-2 bg-red-800 text-white rounded-full hover:bg-red-700 transition-colors"
          >
            Vai al Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <Loader />
        </div>
      ) : (
        <>
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {t("update_profile")}
            </h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-md p-6"
          >
            {/* Sezione upload immagine profilo */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-[120px] h-[120px] rounded-full border-2 border-red-800 overflow-hidden">
                  <img
                    src={formData.profilePicture || "/default-avatar.png"}
                    alt="Immagine profilo"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/default-avatar.png";
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full max-w-xs border-2 border-red-800 border-dashed rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center p-4">
                    <svg
                      className="w-8 h-8 mb-2 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-1 text-sm font-medium text-gray-700">
                      <span className="font-semibold">Clicca per caricare</span>{" "}
                      o trascina e rilascia
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
              <FormField
                label={t("name")}
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
              />

              <FormField
                label={t("surname")}
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
              />

              <FormField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />

              <FormField
                label={t("phone")}
                name="phoneNumber"
                type="text"
                value={formData.phoneNumber}
                onChange={handleChange}
              />

              <FormField
                label={t("specialization")}
                name="specialization"
                type="text"
                value={formData.specialization}
                onChange={handleChange}
              />
            </div>

            {/* Toggle per mostrare/nascondere la sezione password */}
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowPasswordSection(!showPasswordSection)}
                className="px-6 py-2 text-red-800 border border-red-800 rounded-full hover:bg-red-50 transition-colors"
              >
                {showPasswordSection
                  ? "Nascondi sezione cambio password"
                  : "Voglio cambiare la password"}
              </button>
            </div>

            {/* Sezione cambio password */}
            {showPasswordSection && (
              <div className="mt-8 border-t pt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  Cambio Password
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    label="Password attuale"
                    name="currentPassword"
                    type="password"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    required={formData.newPassword.length > 0}
                  />

                  <FormField
                    label="Nuova password"
                    name="newPassword"
                    type="password"
                    value={formData.newPassword}
                    onChange={handleChange}
                  />

                  <FormField
                    label={t("confirm_password")}
                    name="confirmNewPassword"
                    type="password"
                    value={formData.confirmNewPassword}
                    onChange={handleChange}
                    required={formData.newPassword.length > 0}
                  />
                </div>
                <div className="mt-4 bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                  <p className="text-sm text-yellow-700">
                    <span className="font-semibold">Nota:</span> Per aggiornare
                    la tua password, compila tutti e tre i campi sopra. La
                    password attuale serve per verificare la tua identità,
                    mentre la nuova password deve essere confermata due volte
                    per evitare errori di digitazione.
                  </p>
                </div>
              </div>
            )}

            {/* Pulsante submit */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                disabled={isLoading || !isFormModified}
                className={`px-8 py-3 rounded-full text-white font-semibold text-lg transition-all ${
                  !isFormModified
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-800 hover:bg-red-700 shadow-md hover:shadow-lg"
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                    AGGIORNAMENTO...
                  </span>
                ) : (
                  "AGGIORNA"
                )}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

// Componente riutilizzabile per i campi del form
const FormField = ({ label, name, type, value, onChange, required }) => {
  return (
    <div className="mb-2">
      <label className="block text-gray-800 font-semibold mb-2" htmlFor={name}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:border-red-800 focus:ring-1 focus:ring-red-800 focus:outline-none transition-colors"
      />
    </div>
  );
};

export default UpdateAdmin;
