// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import Loader from "../../components/Loader";
// import { useManageAuth } from "../../hooks/auth/useManageAuth";

// const PasswordReset = ({ model }) => {
//   const { token } = useParams();
//   const { passwordReset, isLoading } = useManageAuth();

//   const [formData, setFormData] = useState({
//     newPassword: "",
//     confirmNewPassword: "",
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await passwordReset({ model, token, formData });
//       setFormData({
//         newPassword: "",
//         confirmNewPassword: "",
//       });
//     } catch (error) {
//       console.error("Error during password reset", error);
//     }
//   };

//   return (
//     <section className="flex flex-col items-center justify-center md:h-screen px-3 md:px-0 py-10 md:py-20">
//       <div className="w-full max-w-[570px] rounded-lg shadow-2xl p-10 bg-white">
//         <h3 className="text-[#168aad] text-2xl leading-9 font-semibold mb-6 text-center">
//           Change Password
//         </h3>
//         {isLoading && (
//           <div className="flex items-center justify-center mx-auto py-10">
//             <Loader />
//           </div>
//         )}
//         {!isLoading && (
//           <form onSubmit={handleSubmit} className="py-4">
//             <div className="sm:w-96 flex flex-col items-center">
//               <input
//                 type="password"
//                 placeholder="New Password"
//                 name="newPassword"
//                 value={formData.newPassword}
//                 onChange={handleInputChange}
//                 className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="Confirm New Password"
//                 name="confirmNewPassword"
//                 value={formData.confirmNewPassword}
//                 onChange={handleInputChange}
//                 className="w-full py-3 pl-2 border-b border-solid border-gray-300 focus:outline-none focus:border-gray-800 text-xl leading-7 text-gray-500 cursor-pointer"
//                 required
//               />

//               <button
//                 disabled={isLoading}
//                 type="submit"
//                 className="sm:w-96 w-80 font-bold shadow-sm py-3 flex items-center justify-center bg-red-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5"
//               >
//                 Reset Password
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// };

// export default PasswordReset;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { useManageAuth } from "../../hooks/auth/useManageAuth";

const PasswordReset = ({ model }) => {
  const { token } = useParams();
  const { passwordReset, isLoading } = useManageAuth();

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await passwordReset({ model, token, formData });
      setFormData({
        newPassword: "",
        confirmNewPassword: "",
      });
    } catch (error) {
      console.error("Error during password reset", error);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-rose-50 to-pink-50 px-3 md:px-0 py-10 md:py-20">
      <div className="w-full max-w-[570px] rounded-2xl shadow-2xl p-10 bg-white border border-red-100">
        <h3 className="text-red-600 text-3xl leading-9 font-semibold mb-8 text-center">
          Set Your New Password
        </h3>
        {isLoading && (
          <div className="flex items-center justify-center mx-auto py-10">
            <Loader />
          </div>
        )}
        {!isLoading && (
          <form onSubmit={handleSubmit} className="py-4">
            <div className="flex flex-col items-center w-full">
              <div className="relative w-full mb-6 group">
                <input
                  type="password"
                  placeholder="New Password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-lg font-medium bg-gray-50 border border-red-100 placeholder-gray-400 text-sm focus:outline-none focus:border-red-300 focus:bg-white transition-all duration-300"
                  required
                />
              </div>

              <div className="relative w-full mb-8 group">
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  name="confirmNewPassword"
                  value={formData.confirmNewPassword}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-lg font-medium bg-gray-50 border border-red-100 placeholder-gray-400 text-sm focus:outline-none focus:border-red-300 focus:bg-white transition-all duration-300"
                  required
                />
              </div>

              <button
                disabled={isLoading}
                type="submit"
                className="w-full font-bold py-4 flex items-center justify-center bg-gradient-to-r from-red-500 to-red-700 text-white rounded-full hover:from-red-600 hover:to-red-800 transition-all duration-300 ease-in-out focus:outline-none hover:shadow-lg"
              >
                Reset Password
              </button>

              <div className="mt-6 text-center text-gray-400 text-sm">
                Your security is our priority
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default PasswordReset;
