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
  const [readyToSend, setReadyToSend] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const isReadyToSend = () => {
    return Object.values(readyToSend).every((value) => value);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
    validateName(e.target.value)
      ? setReadyToSend({ ...readyToSend, name: true })
      : setReadyToSend({ ...readyToSend, name: false });
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
    validatePhone(e.target.value)
      ? setReadyToSend({ ...readyToSend, phone: true })
      : setReadyToSend({ ...readyToSend, phone: false });
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value)
      ? setReadyToSend({ ...readyToSend, email: true })
      : setReadyToSend({ ...readyToSend, email: false });
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
        {readyToSend.name === false ? "Minimo 4 caracteres" : "OK!"}
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
        {readyToSend.phone === false ? "Minimo 4 caracteres numericos" : "OK!"}
      </p>
      <br />
      <label type="text" htmlFor="userTelefono">
        Email
      </label>
      <input
        type="text"
        onChange={handleChangeEmail}
        id="userEmail"
        value={email}
      />
      <p style={{ display: "inline" }}>
        {readyToSend.email === false ? "Complete email valido" : "OK!"}
      </p>
      <div>
        <button disabled={isReadyToSend() ? false : true} type="submit">
          Generar Orden
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
