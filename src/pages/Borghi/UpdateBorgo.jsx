import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { useAuthState } from "react-firebase-hooks/auth";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function UpdateBorgo() {
  const navigate = useNavigate();
  let params = useParams();
  const [borghi, setBorghi] = useState(
    JSON.parse(localStorage.getItem(`borghi_${params._id}`)) || []
  );
  const [isLoading, setIsLoading] = useState(!borghi.length);
  const [isFormModified, setIsFormModified] = useState(false);
  const { t } = useTranslation();

  const baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://borghi-backend.onrender.com";

  const [borgoData, setBorgoData] = useState({
    name: "",
    place: "",
    place_description: "",
    description: "",
    imgURL: "",
    internet: "",
    priceHouses: "",
    airbnbFilter: "",
    hospital: "",
    app: "",
    school: "",
    district: "",
    airport: "",
    coworking: "",
  });

  const handleChange = (e) => {
    setBorgoData({
      ...borgoData,
      [e.target.name]: e.target.value,
    });
    setIsFormModified(true);
  };

  useEffect(() => {
    const fetchDetails = async () => {
      if (!borghi.length) {
        setIsLoading(true);
        try {
          const response = await fetch(`${baseURL}/borghi/${params._id}`);
          const detailBorgo = await response.json();
          setBorghi(detailBorgo);

          // Popola i campi del form con i dati ricevuti
          setBorgoData({
            name: detailBorgo.name || "",
            place: detailBorgo.place || "",
            place_description: detailBorgo.place_description || "",
            description: detailBorgo.description || "",
            imgURL: detailBorgo.imgURL || "",
            internet: detailBorgo.internet || "",
            priceHouses: detailBorgo.priceHouses || "",
            airbnbFilter: detailBorgo.airbnbFilter || "",
            hospital: detailBorgo.hospital || "",
            app: detailBorgo.app || "",
            school: detailBorgo.school || "",
            district: detailBorgo.district || "",
            airport: detailBorgo.airport || "",
            coworking: detailBorgo.coworking || "",
          });

          localStorage.setItem(
            `borghi_${params._id}`,
            JSON.stringify(detailBorgo)
          );
        } catch (error) {
          console.error("Errore durante il fetching dei borghi:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchDetails();
  }, [params._id, borghi.length, baseURL]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseURL}/borghi/${params._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(borgoData),
      });
      if (response.ok) {
        alert("Borgo modificato con successo!");
        navigate("/borghi/thanks");
      } else {
        alert("Errore nella modifica del borgo.");
      }
    } catch (error) {
      console.error("Errore:", error);
      alert("Errore di connessione al server.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-8"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header con immagine */}
          <div className="relative h-64 w-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={borghi.imgURL}
              alt={borghi.name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-4 left-6">
                <h1 className="text-3xl font-bold text-white">{borghi.name}</h1>
                <p className="text-sm text-white/80 mt-1">
                  {t("modificaBorgo")}
                </p>
              </div>
            </div>
          </div>

          {/* Form contenuto */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome del borgo
                  </label>
                  <input
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent transition duration-200"
                    type="text"
                    name="name"
                    placeholder="Inserisci il nome intero"
                    value={borgoData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Posizione su Google Maps
                  </label>
                  <input
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent transition duration-200"
                    type="text"
                    name="place"
                    placeholder="Link di maps"
                    value={borgoData.place}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL Immagine
                </label>
                <input
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent transition duration-200"
                  type="text"
                  name="imgURL"
                  placeholder="Linka una foto stupenda del borgo"
                  value={borgoData.imgURL}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descrizione
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent transition duration-200"
                  name="description"
                  rows="3"
                  placeholder="Descrivi il borgo"
                  value={borgoData.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Internet
                  </label>
                  <input
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent transition duration-200"
                    type="text"
                    name="internet"
                    placeholder="Qualità connessione"
                    value={borgoData.internet}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prezzo Case
                  </label>
                  <input
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent transition duration-200"
                    type="text"
                    name="priceHouses"
                    placeholder="Costo medio abitazioni"
                    value={borgoData.priceHouses}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="pt-5 border-t border-gray-200">
                <button
                  type="submit"
                  disabled={!isFormModified}
                  className="w-full md:w-auto px-6 py-3 bg-red-800 text-white font-medium rounded-lg shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isFormModified ? "Salva Modifiche" : "Nessuna Modifica"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default UpdateBorgo;
