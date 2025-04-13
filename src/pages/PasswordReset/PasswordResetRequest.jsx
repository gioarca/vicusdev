// import React, { useState } from "react";
// import Loader from "../../components/Loader";
// import { useManageAuth } from "../../hooks/auth/useManageAuth";

// const PasswordResetRequest = ({ model }) => {
//   const { passwordResetRequest, isLoading } = useManageAuth();

//   const [formData, setFormData] = useState({
//     email: "",
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await passwordResetRequest({ model, formData });

//       setFormData({
//         email: "",
//       });
//     } catch (error) {
//       console.error("Error during the password reset request", error);
//     }
//   };

//   return (
//     <section className="flex flex-col items-center justify-center md:h-screen px-3 md:px-0 py-10 md:py-20">
//       <div className="w-full max-w-[570px] rounded-lg shadow-2xl p-10 bg-white">
//         <h3 className="text-[#168aad] text-2xl leading-9 font-semibold mb-6 text-center">
//           Password Reset Request
//         </h3>

//         {isLoading && (
//           <div className="flex items-center justify-center mx-auto py-10">
//             <Loader />
//           </div>
//         )}
//         {!isLoading && (
//           <form onSubmit={handleSubmit} className="py-4">
//             <div className="mb-5">
//               <input
//                 type="email"
//                 placeholder="Enter your Email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full py-3 pl-2 border-b border-solid border-gray-300 focus:outline-none focus:border-gray-800 text-xl leading-7 text-gray-500 cursor-pointer"
//                 required
//               />
//             </div>
//             <div className="mt-7">
//               <button
//                 disabled={isLoading}
//                 type="submit"
//                 className="w-full text-white bg-[#168aad] hover:bg-[#12657f] text-xl leading-[30px] rounded-lg px-4 py-3"
//               >
//                 Send me an Email
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// };

// export default PasswordResetRequest;

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
          Forgot Your Password?
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
                Enter your email and we'll send you a link to reset your
                password
              </p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Your Email Address"
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
                Send Recovery Link
              </button>
              <div className="mt-6 text-center text-gray-400 text-sm">
                We'll send instructions to your inbox
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default PasswordResetRequest;
