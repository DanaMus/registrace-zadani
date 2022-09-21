import React, { useEffect, useState } from 'react';
import './style.css';

const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (user.email.length > 0 && user.email.includes('@') && !user.username) {
      setUser((prevState) => ({
        ...prevState,
        username: user.email.slice(0, user.email.indexOf('@')),
      }));
    }
  }, [user.email]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submit', user);
  };

  return (
    <>
      <h1 className="form__heading">Registration</h1>
      <div className="formbox">
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="form__input"
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email Address"
          />
          <input
            className="form__input"
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="User Name"
          />
          <input
            className="form__input"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <input
            className="form__input"
            type="password"
            name="passwordConfirm"
            value={user.passwordConfirm}
            onChange={handleChange}
            placeholder="Confirm password"
          />
          <div className="form__buttondiv">
            <button className="form__button" type="submit">
              REGISTER
            </button>
          </div>
        </form>
        <div className="cirle--outer"></div>
        <div className="cirle--inner"></div>
        <i className="circle--icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            fill="rgb(48, 69, 88)"
            viewBox="0 0 24 24"
          >
            <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
          </svg>
        </i>
      </div>
    </>
  );
};

export default Registration;
