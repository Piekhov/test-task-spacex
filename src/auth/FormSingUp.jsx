import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../firebase";


function FormSingUp({handleClick}) {
function MyVerticallyCenteredModal(props ) {

const EmailSignUp = (email, password) => {
  
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      
    const user = userCredential.user;
    console.log(user);
    const email = userCredential.email;
    const password = userCredential.password;
      
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

  const [email, setEmail] = useState("");
  console.log(email);
  const [password, setPassword] = useState("");
  console.log(password);
 
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Registration</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/dragons/5e9d058759b1ff74a7ad5f8f">
          <Button
            variant="success"
            type="submit"
            onClick={() => handleClick(email, password)}>
            Save
          </Button>
        </Link>
        <Link to="/dragons/5e9d058759b1ff74a7ad5f8f">
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

  const [modalShow, setModalShow] = React.useState(true);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
    
      />
    </>
  );
}

export default FormSingUp;
