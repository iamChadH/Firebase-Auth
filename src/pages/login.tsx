import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="w-[40%]">
      <h1 className="text-center my-3">Login</h1>
      <form onSubmit={handleLogin}>
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
      </form>
      <form className="mb-3" id="formBasicPassword">
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
      </form>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default Login;
