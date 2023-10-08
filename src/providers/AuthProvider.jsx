import { createContext } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import auth from '../firebase/firebase.config'


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    };
    

    const authInfo = {
        googleLogin,

    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;