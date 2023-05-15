import { useAuth } from "context/AuthContext";
import React, { useState } from "react";

const SignUp = () => {
  const { user, signup } = useAuth();
  console.log(user);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    try {
      await signup(data.email, data.password);
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };

  return (
    <div className="w-[40%]">
      <h1 className="text-center my-3">SignUp</h1>
      <form onSubmit={handleSignUp}>
        <label htmlFor="inputEmail" className="form-label">
          Email Address
        </label>
        <input
          id="inputEmail"
          type="email"
          onChange={(e: any) => setData({ ...data, email: e.target.value })}
          value={data.email}
          required
          placeholder="Enter email"
        />
        <label htmlFor="inputPassword" className="form-label">
          Password
        </label>
        <input
          onChange={(e: any) => {
            setData({ ...data, password: e.target.value });
          }}
          value={data.password}
          required
          type="password"
          placeholder="Password"
        />
        <button type="submit" className="btn btn-primary">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
