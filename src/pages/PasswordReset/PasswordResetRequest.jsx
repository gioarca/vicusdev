import React, { useState } from "react";
import Loader from "../../components/Loader";
import { useManageAuth } from "../../hooks/auth/useManageAuth";

const PasswordResetRequest = ({ model }) => {
  const { passwordResetRequest, isLoading } = useManageAuth();

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await passwordResetRequest({ model, formData });

      setFormData({
        email: "",
      });
    } catch (error) {
      console.error("Error during the password reset request", error);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-rose-50 to-pink-50 px-3 md:px-0 py-10 md:py-20">
      <div className="w-full max-w-[570px] rounded-2xl shadow-2xl p-10 bg-white border border-red-100">
        <h3 className="text-red-600 text-3xl leading-9 font-semibold mb-8 text-center">
          Hai dimenticato la tua password?
        </h3>

        {isLoading && (
          <div className="flex items-center justify-center mx-auto py-10">
            <Loader />
          </div>
        )}
        {!isLoading && (
          <form onSubmit={handleSubmit} className="py-4">
            <div className="mb-8">
              <p className="text-gray-500 text-center mb-6">
                Scrivi qui sotto la tua email e ti invieremo un link per
                resettare la tua password
              </p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Il tuo indirizzo Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-lg font-medium bg-gray-50 border border-red-100 placeholder-gray-400 text-sm focus:outline-none focus:border-red-300 focus:bg-white transition-all duration-300"
                  required
                />
              </div>
            </div>
            <div className="mt-7">
              <button
                disabled={isLoading}
                type="submit"
                className="w-full font-bold py-4 flex items-center justify-center bg-gradient-to-r from-red-500 to-red-700 text-white rounded-full hover:from-red-600 hover:to-red-800 transition-all duration-300 ease-in-out focus:outline-none hover:shadow-lg"
              >
                Invia il link magico
              </button>
              <div className="mt-6 text-center text-gray-400 text-sm">
                Troverai le istruzioni al link nella tua email
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default PasswordResetRequest;
