import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate("/");
  }

  return (
    <div>
      <div className="mt-12 pt-16">
        <h2 className="text-3xl text-secondary pb-2 text-center font-bold">Login Form</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
          <input
            className="py-1 border m-1 rounded px-2 w-96 "
            type="email"
            placeholder="Email Address"
            {...register("email", { required: true })}
          />
          <input
            className="py-1 border m-1 rounded px-2 w-96 "
            type="password"
            {...register("password", { required: true })}
          />

          {error && (
            <p className="text-center text-red-900">
              <small>{error.message}</small>
            </p>
          )}
          <input
            className="py-1 border font-bold text-primary bg-slate-700 m-1 rounded px-2 w-96 "
            type="submit"
            value="Login"
          />
        </form>
        <p className="py-3 text-center">
          <small>
            Not registered ?{" "}
            <Link to="/signup" className="text-red-700">
              Please Sign up
            </Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Login;
