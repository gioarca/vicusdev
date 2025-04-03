// import React, { useState, useEffect, useContext } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Loader from "../../components/Loader";
// // import { PencilIcon } from "@heroicons/react/outline";
// // import { useAuth } from "../context/AuthContext";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../utils/firebase";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// // import {
// //   PaperAirplaneIcon,
// //   AcademicCapIcon,
// //   DeviceTabletIcon,
// //   BuildingOffice2Icon,
// //   DevicePhoneMobileIcon,
// //   HeartIcon,
// //   WifiIcon,
// //   CurrencyDollarIcon,
// //   HomeIcon,
// //   GlobeAmericasIcon,
// // } from "@heroicons/react/20/solid";
// // import { useAuthContext } from "../hooks/auth/useAuthContext";

// function UpdateBorgo() {
//   // const [user] = useAuthState(auth);
//   // const { user } = useContext(AuthContext); // Uso il contesto di autenticazione
//   const navigate = useNavigate();
//   let params = useParams();
//   const [borghi, setBorghi] = useState(
//     JSON.parse(localStorage.getItem(`borghi_${params._id}`)) || []
//   );
//   const [isLoading, setIsLoading] = useState(!borghi.length);
//   const { t } = useTranslation();

//   const baseURL =
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3000"
//       : "https://borghi-backend.onrender.com";

//   const borgoFunction = async () => {
//     try {
//       const response = await fetch(`${baseURL}/borghi/${params._id}`);
//       const borgo = await response.json();
//       console.log(borgo);
//     } catch (error) {
//       console.error("Errore durante il fetching del borgo:", error);
//     }
//   };

//   borgoFunction();

//   const [borgoData, setBorgoData] = useState({
//     name: "",
//     place: "",
//     place_description: "",
//     description: "",
//     imgURL: "",
//     internet: "",
//     priceHouses: "",
//     airbnbFilter: "",
//     hospital: "",
//     app: "",
//     school: "",
//     district: "",
//     airport: "",
//     coworking: "",
//     // name: borgo.name,
//     // place: borgo.place,
//     // place_description: borgo.place_description,
//     // description: borgo.description,
//     // imgURL: borgo.imgURL,
//     // internet: borgo.internet,
//     // priceHouses: borgo.priceHouses,
//     // airbnbFilter: borgo.airbnbFilter,
//     // hospital: borgo.hospital,
//     // app: borgo.app,
//     // school: borgo.school,
//     // district: borgo.district,
//     // airport: borgo.airport,
//     // coworking: borgo.coworking,
//   });

//   const handleChange = (e) => {
//     setBorgoData({
//       ...borgoData,
//       [e.target.name]: e.target.value,
//     });
//     setIsFormModified(true);
//   };

//   useEffect(() => {
//     const fetchDetails = async () => {
//       if (!borghi.length) {
//         setIsLoading(true);
//         try {
//           const response = await fetch(`${baseURL}/borghi/${params._id}`);
//           const detailBorgo = await response.json();
//           setBorghi(detailBorgo);
//           localStorage.setItem(
//             `borghi_${params._id}`,
//             JSON.stringify(detailBorgo)
//           ); // Caching dei dati
//         } catch (error) {
//           console.error("Errore durante il fetching dei borghi:", error);
//         } finally {
//           setIsLoading(false);
//         }
//       }
//     };
//     fetchDetails();
//   }, [params._id, borghi.length]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`${baseURL}/borghi/${params._id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(borgoData),
//       });
//       if (response.ok) {
//         alert("Borgo modificato con successo!");
//         setBorgoData({
//           name: "",
//           place: "",
//           imgURL: "",
//           // reset campi...
//         });
//         navigate("/thanks");
//       } else {
//         alert("Errore nella modifica del borgo.");
//       }
//     } catch (error) {
//       console.error("Errore:", error);
//       alert("Errore di connessione al server.");
//     }
//   };

//   if (isLoading) {
//     return (
//       <div>
//         <Loader />
//       </div>
//     );
//   }

//   return (
//     <motion.div
//       className="box"
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{
//         duration: 0.8,
//         delay: 0.5,
//         ease: [0, 0.71, 0.2, 1.01],
//       }}
//     >
//       <div className="flex flex-wrap justify-center text-left transition-opacity ease-in delay-150">
//         <div className="overflow-hidden md:shadow-2xl md:m-16 md:mx-24 md:rounded-lg">
//           <img className="w-full" src={borghi.imgURL} alt={borghi.name} />
//           <div key={borghi._id} className="p-4">
//             <div className="flex flex-col m-5 text-center">
//               <p>{t("add_borgo")}</p>
//               <div>
//                 <form
//                   onSubmit={handleSubmit}
//                   className="flex flex-col items-center justify-center"
//                 >
//                   <label className="md:w-96 m-2 px-8 py-4 rounded-lg text-sm font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white">
//                     Nome del borgo
//                     <input
//                       className="px-12 m-2"
//                       type="text"
//                       name="name"
//                       placeholder="Inserisci il nome intero"
//                       value={borgoData.name}
//                       onChange={handleChange}
//                       required
//                     />
//                   </label>

//                   <label className="m-2 md:w-96 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
//                     Posizione su Google Maps
//                     <input
//                       className="px-12 m-2"
//                       type="text"
//                       name="place"
//                       placeholder="Link di maps"
//                       value={borgoData.location}
//                       onChange={handleChange}
//                       required
//                     />
//                   </label>
//                   <label className="m-2 md:w-96 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
//                     Foto
//                     <input
//                       className="px-12 m-2"
//                       type="text"
//                       name="imgURL"
//                       placeholder="Linka una foto stupenda del borgo"
//                       value={borgoData.photo}
//                       onChange={handleChange}
//                       required
//                     />
//                   </label>
//                   <button
//                     type="submit"
//                     className="disabled:opacity-75 m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
//                   >
//                     Modifica Borgo
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
// // }

// export default UpdateBorgo;

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
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
        navigate("/thanks");
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
