import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const removeModal = () => {};
  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Close</Button>
        </footer>
      </Card>
    </>
  );
};

export default Modal;
