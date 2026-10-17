import React, { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Connect this form to your application's registration API when available.
    // Do not store passwords in browser storage or log them.
    alert("Registration form submitted. Connect this form to the registration API to create an account.");
  };

  return (
    <main className="register-page">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Sign-up</h1>
        <p>Create an account to review car dealerships.</p>

        <label htmlFor="userName">Username</label>
        <input id="userName" name="userName" value={form.userName} onChange={handleChange} autoComplete="username" required />

        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} autoComplete="given-name" required />

        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} autoComplete="family-name" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" required />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" value={form.password} onChange={handleChange} autoComplete="new-password" required />

        <button type="submit">Register</button>
      </form>
    </main>
  );
}
