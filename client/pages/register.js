import react from "react";
import Layout from "../components/Layout";
import { useState } from "react";

const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: "",
    buttonText: "Register",
  });

  const { name, email, password, error, success, buttonText } = state;

  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
      error: "",
      success: "",
      buttonText: "Register",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ name, email, password });
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group p">
        <input
          value={name}
          onChange={handleChange("name")}
          type="text"
          className="form-control"
          placeholder="Type your name"
        />
      </div>
      <div className="form-group p">
        <input
          value={email}
          onChange={handleChange("email")}
          type="email"
          className="form-control p"
          placeholder="Type your email"
        />
      </div>
      <div className="form-group p">
        <input
          value={password}
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          placeholder="Type your password"
        />
      </div>
      <div className="form-group p">
        <button className="btn btn-outline-warning">{buttonText}</button>
      </div>
    </form>
  );
  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <h1>Register</h1>
        <br />
        {registerForm()}
        <hr />
        {JSON.stringify(state)}
      </div>
    </Layout>
  );
};

export default Register;
