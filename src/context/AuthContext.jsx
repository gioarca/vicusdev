import { createContext, useReducer, useEffect, useState } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload.user,
        token: action.payload.token,
        // Set admin status based on isAdmin flag in user object
        role: action.payload.user?.admin ? action.payload.user : null,
      };
    case "LOGOUT":
      return {
        user: null,
        token: null,
        role: null,
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload,
        // Update admin status if user role changes
        admin: action.payload?.isAdmin ? action.payload : null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  // Initialize state with null values
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    token: null,
    role: null,
  });
  const [loading, setLoading] = useState(true);

  // Load data from localStorage on component mount
  useEffect(() => {
    try {
      const tokenFromStorage = localStorage.getItem("token");
      const userFromStorage = localStorage.getItem("user");

      const storedToken = tokenFromStorage
        ? JSON.parse(tokenFromStorage)
        : null;
      const storedUser = userFromStorage ? JSON.parse(userFromStorage) : null;

      if (storedToken && storedUser) {
        // Check token expiration
        const currentTime = Date.now();
        const isTokenExpired =
          storedToken.expiration && storedToken.expiration < currentTime;

        if (isTokenExpired) {
          // Clear storage and logout if token expired
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          dispatch({ type: "LOGOUT" });
        } else {
          // Login with stored data - admin status is determined in reducer
          dispatch({
            type: "LOGIN",
            payload: { user: storedUser, token: storedToken },
          });
        }
      }
      setLoading(false);
    } catch (error) {
      console.error("Error loading auth state:", error);
      setLoading(false);
    }
  }, []);

  // Save to localStorage when state changes, but skip the first render
  useEffect(() => {
    if (!loading) {
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("token", JSON.stringify(state.token));
      // No need to separately store admin in localStorage since it's derived from user
    }
  }, [state, loading]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        admin: state.admin,
        dispatch,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
