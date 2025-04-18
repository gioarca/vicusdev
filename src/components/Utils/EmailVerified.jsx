import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Confetti from "react-confetti";

const EmailVerified = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Confetti: stop dopo un po’ + ottimizzazione viewport
  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const timer = setTimeout(() => setShowConfetti(false), 5000); // confetti per 5 sec
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-white px-4 relative overflow-hidden"
    >
      {/* Confetti 🎉 */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={200}
          recycle={false}
        />
      )}

      {/* Icona animata */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-green-600 mb-4"
      >
        <CheckCircle2 size={64} strokeWidth={1.5} />
      </motion.div>

      {/* Titolo principale */}
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800"
      >
        🎉 Email verificata!
      </motion.h1>

      {/* Sottotitolo */}
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-gray-600 mt-2 text-center text-lg"
      >
        Ora puoi accedere al tuo account.
      </motion.p>

      {/* Pulsante */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        className="mt-8"
      >
        <a href="/login">
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition duration-300">
            Vai al login
          </button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default EmailVerified;
