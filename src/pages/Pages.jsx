import React, { useRef } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthContextProvider } from "../context/AuthContext";
import { useAuthContext } from "../hooks/auth/useAuthContext.js";
import Home from "./Home.jsx";
import About from "./About";
import Borgo from "./Borghi/Borgo";
import Login from "./Users/Login.jsx";
import Borghi from "./Borghi/Borghi";
import Registration from "./Users/Registration";
import Contacts from "./Contacts";
import Work from "./Work";
import Thanks from "./Thanks";
import News from "./News";
import NavBar from "../components/NavBar";
import DashboardUser from "./Users/DashboardUser";
import SignOut from "./SignOut";
import Goals from "./Goals";
import Support from "./Support";
import AddBorgo from "./Borghi/AddBorgo";
import Favourites from "./Borghi/Favourites";
import RegistrationAdmin from "./Admins/RegistrationAdmin";
import DashboardAdmin from "./Admins/DashboardAdmin";
import Delete from "./Borghi/DeleteBorgo";
import Update from "./Borghi/UpdateBorgo";
import BorghiToUpdate from "./Borghi/BorghiToUpdate";
import EmailVerified from "../components/Utils/EmailVerified";
import PasswordResetRequest from "../pages/PasswordReset/PasswordResetRequest";
import PasswordReset from "../pages/PasswordReset/PasswordReset";
import PrivateRoute from "../components/PrivateRoute";
import UpdateProfile from "./Users/UpdateProfile.jsx";
import UpdateAdmin from "./Admins/UpdateAdmin.jsx";
import LoginAdmin from "./Admins/LoginAdmin.jsx";
import ThanksBorgo from "./Borghi/ThanksBorgo.jsx";
import Users from "./Admins/Users.jsx";
import Admins from "./Admins/Admins.jsx";

function Pages() {
  const { user } = useAuthContext();
  const contactRef = useRef(null);
  const location = useLocation();

  return (
    <AuthContextProvider>
      <>
        <NavBar contactRef={contactRef} />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            {/** Rotte normali comuni a tutti gli utenti senza registrazione **/}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/borghi/:_id" element={<Borgo />} />
            <Route path="/login" element={<Login user={user} />} />
            <Route path="/loginadmin" element={<LoginAdmin user={user} />} />
            <Route path="/borghi" element={<Borghi />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="/borghi/thanks" element={<ThanksBorgo />} />
            <Route path="/thankyouforyoursupport" element={<Support />} />
            <Route path="/workinprogress" element={<Work />} />
            <Route path="/signout" element={<SignOut />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/registrationadmin" element={<RegistrationAdmin />} />

            {/** Rotte per model = User **/}
            <Route
              path="/news"
              element={
                user ? (
                  <PrivateRoute>
                    <News model="user" />
                  </PrivateRoute>
                ) : (
                  <Login />
                )
              }
            />

            <Route
              path="/favourites"
              element={
                user ? (
                  <PrivateRoute>
                    <Favourites model="user" />
                  </PrivateRoute>
                ) : (
                  <Login />
                )
              }
            />

            <Route
              path="/user/dashboard"
              element={
                user ? (
                  <PrivateRoute>
                    <DashboardUser model="user" />
                  </PrivateRoute>
                ) : (
                  <Login />
                )
              }
            />
            <Route
              path="/user/verify-email/:token"
              element={<EmailVerified model="user" />}
            />
            <Route
              path="/user/password-reset"
              element={<PasswordResetRequest model="user" />}
            />
            <Route
              path="/user/update/"
              element={<UpdateProfile model="user" />}
            />
            <Route
              path="/user/password-reset/:token"
              element={<PasswordReset model="user" />}
            />

            {/** Rotte per Admin **/}
            <Route
              path="/addBorgo"
              element={
                user && user.role === "admin" ? (
                  <PrivateRoute>
                    <AddBorgo />
                  </PrivateRoute>
                ) : (
                  <LoginAdmin />
                )
              }
            />
            <Route
              path="/deleteborgo"
              element={
                user && user.role === "admin" ? (
                  <PrivateRoute>
                    <Delete />
                  </PrivateRoute>
                ) : (
                  <LoginAdmin />
                )
              }
            />
            <Route
              path="/updateborgo/:_id"
              element={
                user && user.role === "admin" ? (
                  <PrivateRoute>
                    <Update />
                  </PrivateRoute>
                ) : (
                  <LoginAdmin />
                )
              }
            />
            <Route
              path="/updateborgo"
              element={
                user && user.role === "admin" ? (
                  <PrivateRoute>
                    <BorghiToUpdate model="admin" />
                  </PrivateRoute>
                ) : (
                  <LoginAdmin />
                )
              }
            />

            <Route
              path="/admin/users"
              element={
                user && user.role === "admin" ? (
                  <PrivateRoute>
                    <Users model="admin" />
                  </PrivateRoute>
                ) : (
                  <LoginAdmin />
                )
              }
            />

            <Route
              path="/admin/admins"
              element={
                user && user.role === "admin" ? (
                  <PrivateRoute>
                    <Admins model="admin" />
                  </PrivateRoute>
                ) : (
                  <LoginAdmin />
                )
              }
            />

            <Route
              path="/admin/dashboard"
              element={
                user && user.role === "admin" ? (
                  <PrivateRoute>
                    <DashboardAdmin model="admin" />
                  </PrivateRoute>
                ) : (
                  <LoginAdmin />
                )
              }
            />

            <Route
              path="/admin/verify-email/:token"
              element={<EmailVerified model="admin" />}
            />

            <Route
              path="/admin/update/"
              element={<UpdateAdmin model="admin" />}
            />
            <Route
              path="/admin/password-reset"
              element={<PasswordResetRequest model="admin" />}
            />
            <Route
              path="/admin/password-reset/:token"
              element={<PasswordReset model="admin" />}
            />
          </Routes>
        </AnimatePresence>
      </>
    </AuthContextProvider>
  );
}

export default Pages;
