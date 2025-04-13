// import React, { useEffect, useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Loader from "../components/Loader";
// import { HeartIcon } from "@heroicons/react/outline";
// import { useTranslation } from "react-i18next"; // Importa useTranslation
// import { motion } from "framer-motion";
// import { useAuthContext } from "../hooks/auth/useAuthContext";

// function Borghi() {
//   const { t } = useTranslation(); // Inizializza useTranslation
//   const { user } = useAuthContext(); // Uso il contesto di autenticazione
//   const navigate = useNavigate();
//   const [borghi, setBorghi] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const fetchDetails = async () => {
//       setIsLoading(true);
//       const baseURL =
//         process.env.NODE_ENV === "development"
//           ? "http://localhost:3000"
//           : "https://borghi-backend.onrender.com";

//       try {
//         const response = await fetch(`${baseURL}/borghi/`);
//         const { borghi: initialBorghi, totalPages } = await response.json();

//         // Unire i dati esistenti con i nuovi dati senza duplicati
//         const allBorghi = [...borghi, ...initialBorghi];

//         // Creare un set per evitare duplicati
//         const uniqueBorghi = Array.from(
//           new Set(allBorghi.map((borgo) => borgo._id))
//         ).map((id) => {
//           return allBorghi.find((borgo) => borgo._id === id);
//         });

//         setBorghi(uniqueBorghi.sort((a, b) => a.name.localeCompare(b.name)));
//         setTotalPages(totalPages);
//       } catch (error) {
//         console.error("Errore durante il fetching dei borghi:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchDetails();
//   }, [currentPage]);

//   useEffect(() => {
//     const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(savedFavorites);
//   }, []);

//   const handleFavoriteToggle = (borgoId) => {
//     let updatedFavorites;
//     if (favorites.includes(borgoId)) {
//       updatedFavorites = favorites.filter((favId) => favId !== borgoId);
//     } else {
//       updatedFavorites = [...favorites, borgoId];
//     }
//     setFavorites(updatedFavorites);
//     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//   };

//   const handleCardClick = () => {
//     if (!user) {
//       navigate("/login");
//     } else {
//       navigate(`/borghi/${borgo._id}`);
//     }
//   };

//   if (isLoading) {
//     return <Loader />;
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
//       <div className="flex-wrap m-4 text-center justify-center">
//         <p>{t("select_borghi")}</p> {/* Traduci il testo */}
//       </div>
//       <div className="flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-3">
//         {borghi.map((borgo) => {
//           if (user.token) {
//             const isFavorite = favorites.includes(borgo._id);

//             return (
//               <div
//                 className="max-w-80 rounded-lg overflow-hidden shadow-xl m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
//                 key={borgo._id ? borgo._id : ""}
//               >
//                 <Link to={"/borghi/" + (borgo._id ? borgo._id : "")}>
//                   <img
//                     className="w-auto overflow-hidden m-auto"
//                     src={borgo.imgURL}
//                     alt={borgo.name}
//                   />
//                   <h1 className="flex flex-col text-center justify-center font-semibold mt-5">
//                     {borgo.name}
//                   </h1>
//                 </Link>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation(); // Impedisce al click del bottone di attivare il click della card
//                     handleFavoriteToggle(borgo._id);
//                   }}
//                 >
//                   <HeartIcon
//                     className={`float-right my-3 mx-5 h-6 ${
//                       isFavorite ? "text-red-500" : "text-gray-500"
//                     }`}
//                   />
//                 </button>
//               </div>
//             );
//           }
//           if (!user.token) {
//             return (
//               <div
//                 className="max-w-80 rounded-lg overflow-hidden shadow-xl m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
//                 key={borgo._id ? borgo._id : ""}
//                 onClick={handleCardClick}
//               >
//                 <Link to={"/borghi/" + (borgo._id ? borgo._id : "")}>
//                   <img
//                     className="w-auto overflow-hidden m-auto"
//                     src={borgo.imgURL}
//                     alt={borgo.name}
//                   />
//                   <h1 className="flex flex-col text-center justify-center font-semibold mt-5">
//                     {borgo.name}
//                   </h1>
//                 </Link>
//               </div>
//             );
//           }
//         })}
//       </div>
//     </motion.div>
//   );
// }

// export default Borghi;

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Loader from "../../components/Loader";
// import { HeartIcon } from "@heroicons/react/20/solid";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import { useAuthContext } from "../../hooks/auth/useAuthContext";

// function Borghi() {
//   const { t } = useTranslation();
//   const { user } = useAuthContext();
//   const navigate = useNavigate();

//   const [borghi, setBorghi] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const fetchDetails = async () => {
//       setIsLoading(true);
//       const baseURL =
//         process.env.NODE_ENV === "development"
//           ? "http://localhost:3000"
//           : "https://borghi-backend.onrender.com";

//       //     try {
//       //       const response = await fetch(`${baseURL}/borghi`);
//       //       console.log(response.json());
//       //       // const response = await fetch(
//       //       //   `https://borghi-backend.onrender.com/borghi/?page=${currentPage}`
//       //       // );
//       //       // const { borghi: fetchedBorghi, totalPages } = await response.json();
//       //       const { borghi: initialBorghi, totalPages } = await response.json();

//       //       // setBorghi((prevBorghi) => [
//       //       //   ...prevBorghi,
//       //       //   ...fetchedBorghi.filter(
//       //       //     (borgo) => !prevBorghi.some((b) => b._id === borgo._id)
//       //       //   ),
//       //       // ]);
//       //       const allBorghi = [...borghi, ...initialBorghi];
//       //       const uniqueBorghi = Array.from(
//       //         new Set(allBorghi.map((borgo) => borgo._id))
//       //       ).map((id) => {
//       //         return allBorghi.find((borgo) => borgo._id === id);
//       //       });
//       //       setBorghi(uniqueBorghi.sort((a, b) => a.name.localeCompare(b.name)));
//       //       setTotalPages(totalPages);
//       //     } catch (error) {
//       //       console.error("Errore durante il fetching dei borghi:", error);
//       //     } finally {
//       //       setIsLoading(false);
//       //     }
//       //   };

//       //   fetchDetails();
//       // }, [currentPage]);

//       try {
//         const response = await fetch(`${baseURL}/borghi`);
//         if (!response.ok) throw new Error(`HTTP error: ${response.statusText}`);

//         const { borghi: initialBorghi, totalPages } = await response.json();
//         // Unisci i borghi già esistenti con quelli appena ottenuti
//         const allBorghi = [...borghi, ...initialBorghi];

//         // Utilizza una Map per eliminare i duplicati in base a _id in modo performante
//         const uniqueBorghi = Array.from(
//           allBorghi
//             .reduce((map, borgo) => map.set(borgo._id, borgo), new Map())
//             .values()
//         ).sort((a, b) => a.name.localeCompare(b.name));

//         setBorghi(uniqueBorghi);
//         setTotalPages(totalPages);
//       } catch (error) {
//         console.error("Errore durante il fetching dei borghi:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchDetails();
//   }, [currentPage]);

//   useEffect(() => {
//     const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(savedFavorites);
//   }, []);

//   const handleFavoriteToggle = (borgoId) => {
//     const updatedFavorites = favorites.includes(borgoId)
//       ? favorites.filter((favId) => favId !== borgoId)
//       : [...favorites, borgoId];

//     setFavorites(updatedFavorites);
//     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//   };

//   const handleCardClick = (borgoId) => {
//     if (!user) {
//       navigate("/login");
//     } else {
//       navigate(`/borghi/${borgoId}`);
//     }
//   };

//   if (isLoading) {
//     return <Loader />;
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
//       <div className="flex-wrap m-4 text-center justify-center">
//         <p>{t("select_borghi")}</p> {/* Traduci il testo */}
//       </div>
//       <div className="flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-3">
//         {borghi.map((borgo) => {
//           const isFavorite = favorites.includes(borgo._id);

//           return (
//             <div
//               className="max-w-80 rounded-lg overflow-hidden shadow-xl m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
//               key={borgo._id}
//               onClick={() => handleCardClick(borgo._id)}
//             >
//               <Link to={`/borghi/${borgo._id}`}>
//                 <img
//                   className="w-auto m-auto"
//                   src={borgo.imgURL}
//                   alt={borgo.name}
//                 />
//                 <h1 className="text-center font-semibold mt-5">{borgo.name}</h1>
//               </Link>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleFavoriteToggle(borgo._id);
//                 }}
//               >
//                 <HeartIcon
//                   className={`float-right my-3 mx-5 h-6 ${
//                     isFavorite ? "text-red-500" : "text-gray-500"
//                   }`}
//                 />
//               </button>
//             </div>
//           );
//         })}
//       </div>
//       {currentPage < totalPages && (
//         <button
//           className="m-4 px-4 py-2 bg-blue-500 text-white rounded"
//           onClick={() => setCurrentPage((prev) => prev + 1)}
//         >
//           {t("load_more")}
//         </button>
//       )}
//     </motion.div>
//   );
// }

// export default Borghi;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { HeartIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useAuthContext } from "../../hooks/auth/useAuthContext";

function Borghi() {
  const { t } = useTranslation();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [borghi, setBorghi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      const baseURL =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : "https://borghi-backend.onrender.com";

      try {
        const response = await fetch(`${baseURL}/borghi`);
        if (!response.ok) throw new Error(`HTTP error: ${response.statusText}`);

        const { borghi: initialBorghi, totalPages } = await response.json();
        // Unisci i borghi già esistenti con quelli appena ottenuti
        const allBorghi = [...borghi, ...initialBorghi];

        // Utilizza una Map per eliminare i duplicati in base a _id in modo performante
        const uniqueBorghi = Array.from(
          allBorghi
            .reduce((map, borgo) => map.set(borgo._id, borgo), new Map())
            .values()
        ).sort((a, b) => a.name.localeCompare(b.name));

        setBorghi(uniqueBorghi);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Errore durante il fetching dei borghi:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, [currentPage]);

  useEffect(() => {
    // Only load favorites if user is logged in
    if (user) {
      const savedFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(savedFavorites);
    } else {
      setFavorites([]);
    }
  }, [user]); // Add user as dependency to reload when login status changes

  const handleFavoriteToggle = (borgoId) => {
    // Only allow favorites if user is logged in
    if (!user) {
      navigate("/login");
      return;
    }

    const updatedFavorites = favorites.includes(borgoId)
      ? favorites.filter((favId) => favId !== borgoId)
      : [...favorites, borgoId];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleCardClick = (borgoId) => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/borghi/${borgoId}`);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="py-6 px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {t("select_borghi")}
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {borghi.map((borgo) => {
          const isFavorite = user && favorites.includes(borgo._id);

          return (
            <motion.div
              whileHover={{
                y: -8,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-80 bg-white rounded-xl overflow-hidden shadow-lg"
              key={borgo._id}
              onClick={() => handleCardClick(borgo._id)}
            >
              <div className="relative overflow-hidden group">
                <img
                  className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  src={borgo.imgURL}
                  alt={borgo.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {borgo.name}
                  </h3>
                  {/* Only show heart icon if user is logged in */}
                  {user && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFavoriteToggle(borgo._id);
                      }}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <HeartIcon
                        className={`h-6 w-6 ${
                          isFavorite ? "text-red-500" : "text-gray-400"
                        } transition-colors duration-300`}
                      />
                    </button>
                  )}
                </div>

                <Link
                  to={`/borghi/${borgo._id}`}
                  className="inline-block mt-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  {t("view_details")} →
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {currentPage < totalPages && (
        <div className="flex justify-center mt-10 mb-8">
          <button
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors duration-300"
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            {t("load_more")}
          </button>
        </div>
      )}
    </motion.div>
  );
}

export default Borghi;
