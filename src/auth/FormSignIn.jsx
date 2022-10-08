import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const GoogleAccount = () => {
  
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
}

function FormSingIn({handleClick}) {

function MyVerticallyCenteredModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Sign in</Modal.Title>
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
          <Form.Group>
            <Link to="/dragons/5e9d058759b1ff74a7ad5f8f">
              <Button className="w-100" onClick={() => handleClick(email, password)}>
                Sign in
              </Button>
            </Link>
          </Form.Group>
          <Form.Group className="w-100 align-items-center">
          <div className="text-muted text-center w-100">or</div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Link to="/dragons/5e9d058759b1ff74a7ad5f8f">
              <GoogleButton className="w-100 rounded" type="dark" onClick={GoogleAccount}>Sign in with Google
              </GoogleButton>
            </Link>
          </Form.Group>
          <Form.Group>
            <Form.Text>Don't have an account?</Form.Text>
            <Link to="/register">
              <Button variant="link">Sign up</Button>
            </Link>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
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

export default FormSingIn;
