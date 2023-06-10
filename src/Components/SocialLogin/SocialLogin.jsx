import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="mt-2 flex justify-center">
        <button
          onClick={handleGoogleSignIn}
          className="flex btn btn-outline btn-info"
        >
          <FaGoogle></FaGoogle> Google Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
