import React from "react";
import { useState } from "react";
import {
  validateEmail,
  validatePhone,
  validateName,
} from "../../helpers/formValidation";

const OrderForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeEmailCheck = (e) => {
    setEmailCheck(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="userName">Nombre</label>
      <input
        type="text"
        onChange={handleChangeName}
        id="userName"
        value={name}
      />
      <p style={{ display: "inline" }}>
        {!validateName(name) ? "Minimo 4 caracteres" : "OK!"}
      </p>
      <br />
      <label type="text" htmlFor="userPhone">
        Telefono
      </label>
      <input
        type="text"
        onChange={handleChangePhone}
        id="userPhone"
        value={phone}
      />
      <p style={{ display: "inline" }}>
        {!validatePhone(phone) ? "Minimo 4 caracteres numericos" : "OK!"}
      </p>
      <br />
      <label type="text" htmlFor="userEmail">
        Email
      </label>
      <input
        type="text"
        onChange={handleChangeEmail}
        id="userEmail"
        value={email}
      />
      <p style={{ display: "inline" }}>
        {!validateEmail(email) ? "Complete email valido" : "OK!"}
      </p>
      <br />
      <label type="text" htmlFor="userEmailCheck">
        Reingresar Email
      </label>
      <input
        type="text"
        onChange={handleChangeEmailCheck}
        id="userEmailCheck"
        value={emailCheck}
      />
      <p style={{ display: "inline" }}>
        {emailCheck != email || emailCheck == ""
          ? "Los mails no son iguales"
          : "OK!"}
      </p>
      <div>
        <button
          disabled={
            !validateEmail(email) ||
            !validateName(name) ||
            !validatePhone(phone) ||
            emailCheck != email
          }
          type="submit"
        >
          Generar Orden
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
