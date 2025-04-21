import React from "react";
import {
  FaGoogle,
  FaYahoo,
  FaMicrosoft,
  FaEnvelope,
  FaApple,
} from "react-icons/fa";

const EmailClientButtons = ({ email }) => {
  const openEmailClient = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${email}?subject=&body=`;
  };

  return (
    <div className="mt-6 space-y-4">
      <button
        onClick={openEmailClient}
        className="flex items-center justify-center w-full py-3 px-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium transition-all duration-300 ease-in-out hover:shadow-lg transform hover:scale-105 focus:outline-none"
      >
        <FaEnvelope className="mr-2" />
        Apri app mail
      </button>

      <p className="text-sm text-gray-600 mb-2 text-center">
        Oppure accedi direttamente:
      </p>

      <div className="grid grid-cols-3 gap-3">
        <a
          href="https://mail.google.com/mail/mu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <FaGoogle className="text-2xl text-red-500 mb-1" />
          <span className="text-xs text-gray-700">Gmail</span>
        </a>

        <a
          href="https://outlook.live.com/mail/0/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <FaMicrosoft className="text-2xl text-blue-500 mb-1" />
          <span className="text-xs text-gray-700">Outlook</span>
        </a>

        <a
          href="https://mail.yahoo.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <FaYahoo className="text-2xl text-purple-600 mb-1" />
          <span className="text-xs text-gray-700">Yahoo</span>
        </a>
      </div>

      <a
        href={`mailto:${email}`}
        className="flex items-center justify-center py-2 px-4 text-sm rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
      >
        <FaApple className="mr-2" />
        Mail (iOS)
      </a>
    </div>
  );
};

export default EmailClientButtons;
