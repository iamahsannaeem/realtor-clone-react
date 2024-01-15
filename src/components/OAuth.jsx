import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, serverTimestamp, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router";

const OAuth = () => {
  const navigate = useNavigate();
  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Checks for the user
      const docRef = doc(db, "users", user.uid);

      const docSnap = await getDoc(docRef); // Use getDoc to check if the document exists

      if (!docSnap.exists()) {
        // Pass data object to setDoc
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Account Couldn't Signup With Google Account");
    }
  };

  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="w-full bg-red-500 py-3 rounded-md text-white hover:bg-red-600 shadow-md hover:shadow-lg active:bg-gray-700 flex justify-center items-center uppercase font-semibold"
    >
      <FcGoogle className="mr-2" />
      Continue With Google Account
    </button>
  );
};

export default OAuth;
