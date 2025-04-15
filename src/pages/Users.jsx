import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/auth/useAuthContext";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
import { useManageAdmin } from "../hooks/admins/useManageAdmins";

const Users = () => {
  const { user } = useAuthContext();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getAllUsers } = useManageAdmin();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const baseURL =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : "https://borghi-backend.onrender.com";

      try {
        const res = await fetch(`${baseURL}/admin/users`, {
          method: "GET",
          credentials: "include", // fondamentale per i cookie JWT
        });

        if (!res.ok) throw new Error(`Errore durante il fetch: ${res.status}`);
        const data = await res.json();
        setUsers(data.users || []); // assicurati che il backend usi 'users'
      } catch (err) {
        console.log("Errore:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Lista Utenti <span className="ml-2 animate-pulse">👥</span>
        </h1>

        {users.length === 0 ? (
          <p className="text-center text-gray-600">Nessun utente trovato.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {users.map((u) => (
              <motion.div
                key={u._id}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center transition-all"
              >
                <img
                  src={u.profilePicture || "/default-avatar.png"}
                  alt={`${u.firstName} ${u.lastName}`}
                  className="w-20 h-20 mx-auto rounded-full object-cover border border-gray-300"
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {u.firstName} {u.lastName}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{u.email}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
