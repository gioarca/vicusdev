import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Delete = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [borghi, setBorghi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://borghi-backend.onrender.com";

  // FETCH BORGHI
  const fetchBorghi = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${baseURL}/borghi?page=${currentPage}`);
      if (!res.ok) throw new Error(`HTTP error: ${res.statusText}`);

      const { borghi: newBorghi = [], totalPages: newTotalPages } =
        await res.json();

      // Merge existing and new borghi
      const allBorghi = [...borghi, ...newBorghi];

      // Use Map for efficient deduplication based on _id
      const uniqueBorghi = Array.from(
        allBorghi
          .reduce((map, borgo) => map.set(borgo._id, borgo), new Map())
          .values()
      ).sort((a, b) => a.name.localeCompare(b.name));

      setBorghi(uniqueBorghi);
      setTotalPages(newTotalPages);
    } catch (error) {
      console.error("Errore durante il fetching dei borghi:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // DELETE HANDLER
  const handleDeleteBorgo = async (id) => {
    if (
      !window.confirm(
        t("confirmDelete", "Sei sicuro di voler eliminare questo borgo?")
      )
    )
      return;

    try {
      const res = await fetch(`${baseURL}/borghi/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setBorghi((prev) => prev.filter((b) => b._id !== id));
        navigate("/borghi");
      } else {
        console.error("Errore nella cancellazione:", await res.text());
      }
    } catch (err) {
      console.error("Errore nella richiesta DELETE:", err);
    }
  };

  useEffect(() => {
    fetchBorghi();
  }, [currentPage]);

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
          {t("deleteBorgo", "Cancella Borgo")}
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {borghi.map((borgo) => (
          <motion.div
            whileHover={{
              y: -8,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-80 bg-white rounded-xl overflow-hidden shadow-lg"
            key={borgo._id}
          >
            <div className="relative overflow-hidden group">
              <img
                className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
                src={borgo.imgURL || "https://via.placeholder.com/300x200"}
                alt={borgo.name || "Borgo"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-gray-800">
                  {borgo.name || "Senza Nome"}
                </h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteBorgo(borgo._id);
                  }}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <XMarkIcon className="h-6 w-6 text-red-500 transition-colors duration-300" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {currentPage < totalPages && (
        <div className="flex justify-center mt-10 mb-8">
          <button
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors duration-300"
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            {t("load_more", "Carica altri")}
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Delete;
