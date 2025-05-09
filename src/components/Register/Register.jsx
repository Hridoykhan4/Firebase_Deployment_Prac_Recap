import React, { useContext,  useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [emailErr, setEmailError] = useState("");

  const nav = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    /* const name = e.target.name.value;
    const photo = e.target.photo.value; */
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
      return setEmailError(`Provide a valid email`);
    } else {
      setEmailError("");
    }

    const regex = /\d{2,}$/;
    if (!regex.test(password)) {
      return setError(`Password must ends with least two digits at the end`);
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 character");
    }

    if (password !== confirmPassword) {
      return setError("Password is not matching");
    }

    setEmailError("");
    setError("");
    registerUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset()
        nav('/')
      })
      .catch((error) => {
        setError(error.message.split("/")[1].replace(")", ""));
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4">
      <form
        onSubmit={handleRegister}
        className="card w-full max-w-md shadow-xl bg-base-100 p-8 space-y-4"
      >
        <h2 className="text-3xl font-bold text-center text-primary">
          Register
        </h2>

        {/* Name */}
        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text">Name</span>
          </label>
          <br />
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            className="input input-bordered"
          />
        </div>

        {/* Photo URL */}
        <div className="form-control">
          <label htmlFor="photo" className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            id="photo"
            type="text"
            name="photo"
            placeholder="Enter photo URL"
            className="input input-bordered"
          />
        </div>

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
        {emailErr && <p className="text-red-600">{emailErr}</p>}

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

        {/* Confirm Password */}
        <div className="form-control">
          <label htmlFor="confirm" className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            id="confirm"
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            className="input input-bordered"
          />
        </div>

        {/* Showing Error */}
        {error && <p className="text-red-600">{error}</p>}

        {/* Submit Button */}
        <div className="form-control mt-4">
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
