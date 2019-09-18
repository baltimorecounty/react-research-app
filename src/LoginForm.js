import React from "react";
import { TextInput, Button } from "@baltimorecounty/dotgov-components";

const handleSubmit = clickEvent => {
  clickEvent.preventDefault();
  alert("Form Submitted");
};

const LoginForm = props => (
  <div className="login-form-container">
    <h2>Login</h2>
    <form id="login-form" onSubmit={handleSubmit}>
      <TextInput id="first-name" label="First Name" />
      <TextInput id="last-name" label="Last Name" />
      <Button type="submit" text="Login Now" />
    </form>
  </div>
);
export default LoginForm;
