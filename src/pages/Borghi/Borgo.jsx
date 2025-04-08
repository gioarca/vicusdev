// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Loader from "../../components/Loader";
// import { useTranslation } from "react-i18next";
// import { useAuthContext } from "../../hooks/auth/useAuthContext";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import Prenota from "../../components/Prenota";
// import {
//   PaperAirplaneIcon,
//   AcademicCapIcon,
//   DeviceTabletIcon,
//   BuildingOffice2Icon,
//   DevicePhoneMobileIcon,
//   HeartIcon,
//   WifiIcon,
//   CurrencyDollarIcon,
//   HomeIcon,
//   GlobeAmericasIcon,
// } from "@heroicons/react/20/solid";

// function Borgo() {
//   const { user } = useAuthContext(); // Uso il contesto di autenticazione
//   const navigate = useNavigate();
//   let params = useParams();
//   const [borghi, setBorghi] = useState(
//     JSON.parse(localStorage.getItem(`borghi_${params._id}`)) || []
//   );
//   const [isLoading, setIsLoading] = useState(!borghi.length);
//   const { t } = useTranslation();

//   // Indirizza alla pagina di login se l'utente non è autenticato
//   useEffect(() => {
//     if (!user) {
//       navigate("/login");
//     }
//   }, [user]);

//   useEffect(() => {
//     const fetchDetails = async () => {
//       if (!borghi.length) {
//         const baseURL =
//           process.env.NODE_ENV === "development"
//             ? "http://localhost:3000"
//             : "https://borghi-backend.onrender.com";
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

//   if (isLoading) {
//     return (
//       <div>
//         <Loader />
//       </div>
//     );
//   }

//   if (!user) {
//     return null; // Nel caso il redirect non abbia effetto immediato
//   }

//   if (user) {
//     return (
//       <motion.div
//         className="box"
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{
//           duration: 0.8,
//           delay: 0.5,
//           ease: [0, 0.71, 0.2, 1.01],
//         }}
//       >
//         <div className="flex flex-wrap justify-center text-left transition-opacity ease-in delay-150">
//           <div className="overflow-hidden md:shadow-2xl md:m-16 md:mx-24 md:rounded-lg">
//             <img className="w-full" src={borghi.imgURL} alt={borghi.name} />
//             <div key={borghi._id} className="p-4">
//               <div>
//                 <div className="p-5 font-bold text-xl">
//                   <h1>{borghi.name}</h1>{" "}
//                 </div>
//                 <div className="p-5">
//                   <a
//                     href={borghi.place ? borghi.place : "/workinprogress"}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <button className="m-1 px-6 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                       <h3>{t("place")}</h3>
//                     </button>
//                   </a>
//                   <p>{borghi.place_description}</p>
//                 </div>
//                 <div className="p-5">
//                   {/* <button className="m-1 px-6 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"> */}
//                   <h3 className="font-bold text-black ">{t("description")}</h3>
//                   {/* </button> */}
//                   <p>{borghi.description}</p>
//                 </div>

//                 <div className="p-5">
//                   <a
//                     href={borghi.internet ? borghi.internet : "/workinprogress"}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <button className="m-1 px-6 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                       <h3>
//                         <WifiIcon className="h-5 inline-block mx-1" />
//                         {t("internet_speed_2")}
//                       </h3>
//                     </button>
//                   </a>
//                   <p>{t("internet_speed_info")}</p>
//                 </div>
//                 <div className="p-5">
//                   <a
//                     href={
//                       borghi.priceHouses
//                         ? borghi.priceHouses
//                         : "/workinprogress"
//                     }
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="underline hover:text-red-500 hover:transition-all"
//                   >
//                     <button className="m-1 px-6 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                       <h3>
//                         <CurrencyDollarIcon className="h-5 inline-block mx-1" />
//                         {t("house_price")}
//                       </h3>
//                     </button>
//                   </a>
//                   <p>{t("house_price_info")}</p>
//                 </div>
//                 <div className="p-5">
//                   <a
//                     href={
//                       borghi.airbnbFilter
//                         ? borghi.airbnbFilter
//                         : "/workinprogress"
//                     }
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="underline hover:text-red-500 hover:transition-all"
//                   >
//                     <button className="m-1 px-6 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                       <h3>
//                         <HomeIcon className="h-5 inline-block mx-1" />
//                         {t("airbnb_price")}
//                       </h3>
//                     </button>
//                   </a>
//                   <p>{t("airbnb_price_info")}</p>
//                 </div>
//                 <div className="p-5">
//                   <a
//                     href={
//                       borghi.experience ? borghi.experience : "/workinprogress"
//                     }
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="underline hover:text-red-500 hover:transition-all"
//                   >
//                     <button className="m-1 px-6 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                       <h3>
//                         <GlobeAmericasIcon className="h-5 inline-block mx-1" />
//                         {t("experience")}
//                       </h3>
//                     </button>
//                   </a>
//                   <p>{t("experience_info")}</p>
//                 </div>
//                 <div className="px-5 py-10">
//                   <p className="mb-2">{t("need_more")}</p>
//                   <ul>
//                     <a
//                       href={borghi.airport ? borghi.airport : "/workinprogress"}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                         <li>
//                           <PaperAirplaneIcon className="h-5 inline-block m-2" />
//                           {t("nearest_airport")}
//                         </li>
//                       </button>
//                     </a>
//                     <a
//                       href={
//                         borghi.hospital ? borghi.hospital : "/workinprogress"
//                       }
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="hover:text-red-500 hover:transition-all"
//                     >
//                       <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                         <li>
//                           <HeartIcon className="h-5 inline-block m-2" />
//                           {t("nearest_hospital")}
//                         </li>
//                       </button>
//                     </a>
//                     <a
//                       href={borghi.app ? borghi.app : "/workinprogress"}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="hover:text-red-500 hover:transition-all"
//                     >
//                       <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                         <li>
//                           <DevicePhoneMobileIcon className="h-5 inline-block m-2" />
//                           {t("app_services")}
//                         </li>
//                       </button>
//                     </a>
//                     <a
//                       href={borghi.school ? borghi.school : "/workinprogress"}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="hover:text-red-500 hover:transition-all"
//                     >
//                       <button className="m-5 px-5 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                         <li>
//                           <AcademicCapIcon className="h-5 inline-block m-2" />
//                           {t("schools")}
//                         </li>
//                       </button>
//                     </a>
//                     <a
//                       href={
//                         borghi.district ? borghi.district : "/workinprogress"
//                       }
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="hover:text-red-500 hover:transition-all"
//                     >
//                       <button className="m-5 px-5 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                         <li>
//                           <BuildingOffice2Icon className="h-5 inline-block m-2" />
//                           {t("municipality_site")}
//                         </li>
//                       </button>
//                     </a>
//                     <a
//                       href={
//                         borghi.coworking ? borghi.coworking : "/workinprogress"
//                       }
//                       rel="noopener noreferrer"
//                       className="hover:text-red-500 hover:transition-all"
//                     >
//                       <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                         <li>
//                           <DeviceTabletIcon className="h-5 inline-block m-2" />
//                           {t("coworking")}
//                         </li>
//                       </button>
//                     </a>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="p-2">
//               <Prenota />
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     );
//   }
// }

// export default Borgo;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { useTranslation } from "react-i18next";
import { useAuthContext } from "../../hooks/auth/useAuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Prenota from "../../components/Prenota";
import {
  PaperAirplaneIcon,
  AcademicCapIcon,
  DeviceTabletIcon,
  BuildingOffice2Icon,
  DevicePhoneMobileIcon,
  HeartIcon,
  WifiIcon,
  CurrencyDollarIcon,
  HomeIcon,
  GlobeAmericasIcon,
  MapPinIcon,
  InformationCircleIcon,
  CreditCardIcon,
} from "@heroicons/react/20/solid";

function Borgo() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  let params = useParams();
  const [borghi, setBorghi] = useState(
    JSON.parse(localStorage.getItem(`borghi_${params._id}`)) || []
  );
  const [isLoading, setIsLoading] = useState(!borghi.length);
  const [activeSection, setActiveSection] = useState("description");
  const { t } = useTranslation();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!borghi.length) {
        const baseURL =
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : "https://borghi-backend.onrender.com";
        setIsLoading(true);
        try {
          const response = await fetch(`${baseURL}/borghi/${params._id}`);
          const detailBorgo = await response.json();
          setBorghi(detailBorgo);
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
  }, [params._id, borghi.length]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const featureCard = (title, icon, link, description) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-md mb-4 hover:shadow-lg transition-all duration-300"
    >
      <a
        href={link || "/workinprogress"}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4"
      >
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            {icon}
            <h3 className="font-semibold text-lg ml-2">{title}</h3>
          </div>
          <span className="text-red-800 rounded-full bg-red-100 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </a>
    </motion.div>
  );

  if (user) {
    return (
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-6 md:py-8">
          {/* Hero section */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8">
            <img
              className="w-full h-64 md:h-96 object-cover"
              src={borghi.imgURL}
              alt={borghi.name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center text-white/80">
                <MapPinIcon className="h-5 w-5 mr-1" /> {borghi.name}
              </h1>
            </div>
          </div>

          {/* Navigation tabs */}
          <div className="flex overflow-x-auto scrollbar-hide mb-6 pb-2 border-b border-gray-200">
            <button
              className={`px-4 py-2 mr-4 whitespace-nowrap ${
                activeSection === "description"
                  ? "text-red-800 border-b-2 border-red-800 font-medium"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveSection("description")}
            >
              <InformationCircleIcon className="h-5 w-5 inline-block mr-2" />
              {t("description")}
            </button>
            <button
              className={`px-4 py-2 mr-4 whitespace-nowrap ${
                activeSection === "amenities"
                  ? "text-red-800 border-b-2 border-red-800 font-medium"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveSection("amenities")}
            >
              <HomeIcon className="h-5 w-5 inline-block mr-2" />
              {t("amenities")}
            </button>
            <button
              className={`px-4 py-2 mr-4 whitespace-nowrap ${
                activeSection === "services"
                  ? "text-red-800 border-b-2 border-red-800 font-medium"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveSection("services")}
            >
              <WifiIcon className="h-5 w-5 inline-block mr-2" />
              {t("services")}
            </button>
            <button
              className={`px-4 py-2 whitespace-nowrap ${
                activeSection === "book"
                  ? "text-red-800 border-b-2 border-red-800 font-medium"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveSection("book")}
            >
              <CreditCardIcon className="h-5 w-5 inline-block mr-2" />
              {t("book")}
            </button>
          </div>

          {/* Content container */}
          <div className="bg-white rounded-xl p-6 shadow-md mb-8">
            {activeSection === "description" && (
              <div>
                <h2 className="text-xl font-bold mb-4">{t("description")}</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {borghi.description}
                </p>

                <h3 className="text-lg font-semibold mb-3">{t("place")}</h3>
                <p className="text-gray-700 mb-6">{borghi.place_description}</p>

                <div className="mt-6">
                  <a
                    href={borghi.place ? borghi.place : "/workinprogress"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-red-800 text-white rounded-lg hover:bg-red-900 transition-colors"
                  >
                    <MapPinIcon className="h-5 w-5 mr-2" />
                    {t("view_on_map")}
                  </a>
                </div>
              </div>
            )}

            {activeSection === "amenities" && (
              <div>
                <h2 className="text-xl font-bold mb-4">{t("amenities")}</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {featureCard(
                    t("internet_speed_2"),
                    <WifiIcon className="h-5 w-5 text-red-800" />,
                    borghi.internet,
                    t("internet_speed_info")
                  )}

                  {featureCard(
                    t("house_price"),
                    <CurrencyDollarIcon className="h-5 w-5 text-red-800" />,
                    borghi.priceHouses,
                    t("house_price_info")
                  )}

                  {featureCard(
                    t("airbnb_price"),
                    <HomeIcon className="h-5 w-5 text-red-800" />,
                    borghi.airbnbFilter,
                    t("airbnb_price_info")
                  )}

                  {featureCard(
                    t("experience"),
                    <CreditCardIcon className="h-5 w-5 text-red-800" />,
                    borghi.experience,
                    t("experience_info")
                  )}
                </div>
              </div>
            )}

            {activeSection === "services" && (
              <div>
                <h2 className="text-xl font-bold mb-4">{t("need_more")}</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {featureCard(
                    t("nearest_airport"),
                    <PaperAirplaneIcon className="h-5 w-5 text-red-800" />,
                    borghi.airport,
                    t("airport_info") ||
                      "Informazioni sull'aeroporto più vicino"
                  )}

                  {featureCard(
                    t("nearest_hospital"),
                    <HeartIcon className="h-5 w-5 text-red-800" />,
                    borghi.hospital,
                    t("hospital_info") ||
                      "Informazioni sul servizio sanitario locale"
                  )}

                  {featureCard(
                    t("app_services"),
                    <DevicePhoneMobileIcon className="h-5 w-5 text-red-800" />,
                    borghi.app,
                    t("app_info") || "App e servizi digitali disponibili"
                  )}

                  {featureCard(
                    t("schools"),
                    <AcademicCapIcon className="h-5 w-5 text-red-800" />,
                    borghi.school,
                    t("school_info") || "Scuole e servizi educativi"
                  )}

                  {featureCard(
                    t("municipality_site"),
                    <BuildingOffice2Icon className="h-5 w-5 text-red-800" />,
                    borghi.district,
                    t("municipality_info") ||
                      "Sito del comune e informazioni amministrative"
                  )}

                  {featureCard(
                    t("coworking"),
                    <DeviceTabletIcon className="h-5 w-5 text-red-800" />,
                    borghi.coworking,
                    t("coworking_info") ||
                      "Spazi di coworking e servizi per nomadi digitali"
                  )}
                </div>
              </div>
            )}

            {activeSection === "book" && (
              <div>
                <h2 className="text-xl font-bold mb-4">
                  {t("book_your_visit")}
                </h2>
                <Prenota />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  }
}

export default Borgo;
