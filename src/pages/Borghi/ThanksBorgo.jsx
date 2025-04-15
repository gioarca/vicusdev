import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";

function ThanksBorgo() {
  useEffect(() => {
    // Mini esplosione di confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      variants={fadeInUp}
      className="min-h-screen flex items-center justify-center bg-white px-6"
    >
      <div className="text-center max-w-lg mx-auto space-y-6">
        {/* Icona SVG animata */}
        <div className="w-20 h-20 mx-auto mb-2">
          <svg
            viewBox="0 0 24 24"
            className="stroke-green-500"
            fill="none"
            strokeWidth={2.5}
          >
            <path
              d="M5 13l4 4L19 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="path"
            />
          </svg>
        </div>

        {/* Titolo */}
        <h1 className="text-3xl font-extrabold text-gray-800">
          Grazie assai per il tuo contributo!
        </h1>

        {/* Messaggio */}
        <div className="text-gray-600">
          <p>Il tuo borgo è stato già aggiunto/modificato correttamente.</p>
          <p>Dacci un'occhiata nella lista completa dei borghi!</p>
        </div>

        {/* Link di ritorno */}
        <p className="text-sm text-gray-500">
          Torna alla home cliccando{" "}
          <Link to="/" className="text-red-500 font-medium hover:underline">
            qui{" "}
          </Link>{" "}
          o sul{" "}
          <Link to="/" className="text-red-500 font-medium hover:underline">
            logo Vicus
          </Link>
          .
        </p>
      </div>

      {/* SVG draw animation */}
      <style>
        {`
          .path {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: draw 0.7s ease-out forwards;
          }

          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default ThanksBorgo;
