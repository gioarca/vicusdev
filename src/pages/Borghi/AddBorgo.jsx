import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function AddBorgo() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [borgoData, setBorgoData] = useState({
    name: "",
    place: "",
    imgURL: "",
  });

  const baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://borghi-backend.onrender.com";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBorgoData({
      ...borgoData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${baseURL}/borghi/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(borgoData),
      });

      if (response.ok) {
        alert("Borgo aggiunto con successo!");
        setBorgoData({
          name: "",
          place: "",
          imgURL: "",
        });
        navigate("/thanks");
      }
    } catch (error) {
      console.error("Errore:", error);
      alert("Errore di connessione al server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center py-10 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8)), url(https://images.unsplash.com/photo-1518335935020-cfd6580c1ab4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="backdrop-blur-sm bg-white/80 shadow-2xl rounded-3xl overflow-hidden border border-white/50 px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {t("thank_you_for_support")}
          </h1>

          <div className="mb-8 overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1518335935020-cfd6580c1ab4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Borgo"
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t("improve_southern_italy")}
            </h2>
            <p className="text-gray-600 mb-6">{t("borgo_criteria")}</p>

            <div className="bg-red-50 rounded-2xl p-6 mb-8 border border-red-100">
              <ul className="space-y-2 text-left">
                {[
                  "public_services",
                  "borgo_beauty",
                  "accessibility",
                  "internet_speed",
                  "coworking_space",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="mr-2 text-red-800">✓</span>
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t("add_borgo")}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome del borgo
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Inserisci il nome intero"
                  value={borgoData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-full text-gray-800 border border-gray-300 
                  focus:ring-2 focus:ring-red-800/30 focus:border-red-800 
                  transition-all duration-300 bg-white/80 backdrop-blur-sm"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Posizione su Google Maps
                </label>
                <input
                  type="text"
                  name="place"
                  placeholder="Link di maps"
                  value={borgoData.place}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-full text-gray-800 border border-gray-300 
                  focus:ring-2 focus:ring-red-800/30 focus:border-red-800 
                  transition-all duration-300 bg-white/80 backdrop-blur-sm"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Foto
                </label>
                <input
                  type="text"
                  name="imgURL"
                  placeholder="Linka una foto stupenda del borgo"
                  value={borgoData.imgURL}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-full text-gray-800 border border-gray-300 
                  focus:ring-2 focus:ring-red-800/30 focus:border-red-800 
                  transition-all duration-300 bg-white/80 backdrop-blur-sm"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto px-8 py-3 font-semibold bg-gradient-to-r from-red-700 to-red-900 
                  text-white rounded-full shadow-md hover:shadow-lg transform hover:scale-102 
                  hover:from-red-800 hover:to-red-950 transition-all duration-300 
                  focus:outline-none disabled:opacity-70 flex items-center justify-center"
                >
                  {loading ? (
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
                      Elaborazione...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <span className="mr-1">Aggiungi Borgo</span>
                      <span className="ml-1">➕</span>
                    </span>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-6">
              <button
                onClick={() => navigate(-1)}
                className="text-red-800 hover:text-red-900 font-medium transition-colors duration-300"
              >
                ← Torna indietro
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBorgo;
