import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { signInUser, googleLogin, facebookLogin } = useContext(AuthContext);

  const nav = useNavigate();

  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        nav("/about");
      })
      .catch((err) => {
        console.log(err.message);
        setError(
          err.message.split("/")[1].replace(")", "") ===
            "invalid-credential." && "Wrong Password"
        );
      });
  };

  const handleFacebookLogin = () => {
    facebookLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => console.log(err.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="min-h-screen flex-col flex items-center justify-center bg-base-200 px-4">
      <form
        onSubmit={handleLogin}
        className="card w-full max-w-md shadow-xl bg-base-100 p-8 space-y-4"
      >
        <h2 className="text-3xl font-bold text-center text-primary">Login</h2>

        {/* Email */}
        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text">Email</span>
          </label>
          <br />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered"
          />
        </div>

        {/* Password */}
        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            className="input input-bordered"
          />
        </div>

        {/* Submit Button */}
        <div className="form-control mt-4">
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </div>
      </form>
      <button onClick={handleGoogleLogin} className="btn mt-4 btn-soft">
        Google LogIn
      </button>
      <button onClick={handleFacebookLogin} className="btn mt-4 btn-soft">
        Facebook LogIn
      </button>
    </div>
  );
};

export default Login;
