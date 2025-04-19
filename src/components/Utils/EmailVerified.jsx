import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { useManageAuth } from "../../hooks/auth/useManageAuth";
import Loader from "../Loader";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { toast } from "react-toastify";
import confetti from "canvas-confetti";

const EmailVerified = ({ model }) => {
  const { token } = useParams();
  const { verifyMail, requestNewVerificationEmail, isLoading } =
    useManageAuth();

  const [verificationStatus, setVerificationStatus] = useState(null);
  const [showNewVerificationMailButton, setshowNewVerificationMailButton] =
    useState(false);
  const [email, setEmail] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const confettiCanvasRef = useRef(null);

  const triggerConfetti = () => {
    const canvas = confettiCanvasRef.current;
    if (canvas) {
      const myConfetti = confetti.create(canvas, {
        resize: true,
        useWorker: true,
      });

      // Fire first confetti burst
      myConfetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      // Fire more confetti bursts for 2 seconds
      const interval = setInterval(() => {
        myConfetti({
          particleCount: 50,
          angle: Math.random() * 60 + 60,
          spread: 60,
          origin: { x: Math.random(), y: Math.random() * 0.3 + 0.5 },
        });

        myConfetti({
          particleCount: 50,
          angle: Math.random() * 60 + 240,
          spread: 60,
          origin: { x: Math.random(), y: Math.random() * 0.3 + 0.5 },
        });
      }, 400);

      // Clear interval after 2 seconds
      setTimeout(() => clearInterval(interval), 2000);
    }
  };

  const verifyEmail = async () => {
    try {
      const isMailVerified = await verifyMail(model, token);

      if (isMailVerified) {
        setVerificationStatus("success");
        toast.success("Email verified! You can now Log In.");

        // Trigger confetti after a small delay to ensure component is rendered
        setTimeout(() => triggerConfetti(), 300);
      }
    } catch (error) {
      console.error("Error during email verification:", error);
      setVerificationStatus("error");

      // Show error modal with appropriate message
      if (error.name === "TokenExpiredError") {
        setErrorMessage(
          "Il link di verifica è scaduto. Richiedi una nuova email di verifica."
        );
        setshowNewVerificationMailButton(true);
      } else {
        setErrorMessage(
          "Si è verificato un errore durante la verifica dell'email. Riprova o contatta l'assistenza."
        );
      }
      setShowErrorModal(true);
    }
  };

  const handleRequestNewVerificationEmail = async () => {
    try {
      const isNewVerificationMailSent = await requestNewVerificationEmail(
        email
      );
      if (isNewVerificationMailSent) {
        toast.success(
          "New verification email requested successfully. Check your inbox."
        );
        setShowErrorModal(false);
      }
    } catch (error) {
      console.error("Error requesting new verification email:", error);
      toast.error(
        "Failed to request a new verification email. Please try again or contact support."
      );
    }
  };

  useEffect(() => {
    verifyEmail();
  }, [token]);

  const closeModal = () => {
    setShowErrorModal(false);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-12 relative overflow-hidden">
      {/* Canvas for confetti animation */}
      <canvas
        ref={confettiCanvasRef}
        className="fixed inset-0 pointer-events-none z-10"
        style={{ width: "100%", height: "100%" }}
      />

      <div className="w-full max-w-md mx-auto backdrop-blur-sm bg-white/90 rounded-2xl shadow-xl p-8 border border-indigo-100 z-20">
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <Loader />
          </div>
        )}

        {!isLoading && verificationStatus === "success" && (
          <div className="text-center py-6 space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4 animate-bounce">
              <IoIosCheckmarkCircle className="w-16 h-16 text-green-500" />
            </div>

            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Email Verificata!
            </h3>

            <p className="text-gray-600 text-lg">
              Il tuo account è stato attivato correttamente.
            </p>

            <Link
              to="/login"
              className="inline-block w-full px-6 py-3 mt-6 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Accedi ora
            </Link>
          </div>
        )}

        {!isLoading && verificationStatus === "error" && (
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Verifica fallita
            </h3>

            <p className="text-gray-600 mb-6">
              Non è stato possibile verificare il tuo indirizzo email.
            </p>

            {showNewVerificationMailButton && (
              <div className="space-y-4 mt-6">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    placeholder="Inserisci la tua email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-gray-700 transition-all outline-none"
                    required
                  />
                </div>

                <button
                  onClick={handleRequestNewVerificationEmail}
                  className="w-full px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Richiedi nuova email di verifica
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full mx-4 overflow-hidden animate-slide-in">
            <div className="bg-red-600 py-4 px-6">
              <h3 className="text-xl font-bold text-white">
                Errore di Verifica
              </h3>
            </div>

            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-2 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">{errorMessage}</p>
              </div>

              {showNewVerificationMailButton && (
                <div className="space-y-4 mt-6">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Inserisci la tua email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-gray-700 transition-all outline-none"
                      required
                    />
                  </div>

                  <button
                    onClick={handleRequestNewVerificationEmail}
                    className="w-full px-6 py-3 text-white bg-gradient-to-r from-red-500 to-red-600 rounded-xl hover:from-red-600 hover:to-red-700 transition-all shadow-md hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Richiedi nuova email di verifica
                  </button>
                </div>
              )}

              <div className="flex justify-end mt-6">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                >
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EmailVerified;
