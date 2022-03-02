import React from 'react';
import {Container, Form, Button} from "react-bootstrap";
import loginEmailPassword from "../functions/loginEmailPassword";

const Login = () => {

async function submitHandler(e) {
    e.preventDefault();
    const correo = document.getElementById("formCorreo").value;
    const contra = e.target.formContra.value;
    await loginEmailPassword(correo, contra);
    // console.log(correo, contra);
}

  return (
    <Container>
        <h1>Login</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId="formCorreo">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="Enter email"></Form.Control>
            </Form.Group>

            <Form.Group controlId="formContra" className="mt-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password"></Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit" className='mt-3'>Iniciar Sesión</Button>
        </Form>
    </Container>
  )
}

export default Login;