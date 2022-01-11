import Card from "../UI/Card";
import Button from "../UI/Button";
import "./UserAdd.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

const UserAdd = (props) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (user.trim().length === 0 || email.trim().length === 0) {
      setError({
        title: "Doslo je do greske",
        message: "Molimo ukucajte vase podatke",
      });
      return;
    }

    if (!email.includes("@")) {
      setError({
        title: "Doslo je do greske",
        message: "Email mora da sadrzi @",
      });
      return;
    }

    props.onFormSubmit(user, email);

    setUser("");
    setEmail("");
  };

  const errorHandler = () => {
    setError();
  };
  const handleName = (event) => {
    setUser(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></Modal>
      )}
      <Card className="card-wrap">
        <form className="form-control" onSubmit={handleSubmit}>
          <label>Ime korisnika</label>
          <input
            type="text"
            placeholder="Unesite ime"
            value={user}
            onChange={handleName}
          />
          <label>Email korisnika</label>
          <input
            type="text"
            placeholder="Unesite email"
            value={email}
            onChange={handleEmail}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
};

export default UserAdd;
