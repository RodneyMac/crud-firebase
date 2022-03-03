import React from 'react';
import {Container, Form, Button} from "react-bootstrap";
import loginEmailPassword from "../functions/loginEmailPassword";

const Login = () => {

async function submitHandler(e) {
    e.preventDefault();
    const correo = document.getElementById("formCorreo").value;
    const contra = e.target.formContra.value;
    await loginEmailPassword(correo, contra);
}

  return (
    <Container className="mt-5 content">
        <h1 className="text-center" style={{color: "cyan"}}>Login</h1>
        <Form onSubmit={submitHandler} className="form">
            <Form.Group controlId="formCorreo">
                <Form.Label style={{color: "orange"}}>Correo</Form.Label>
                <Form.Control type="email" placeholder="Enter email"></Form.Control>
            </Form.Group>

            <Form.Group controlId="formContra" className="mt-3">
                <Form.Label style={{color: "orange"}}>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password"></Form.Control>
            </Form.Group>

            <div className='text-center mt-4'>
                <Button variant="primary" type="submit" className='mt-3'>Iniciar Sesión</Button>
            </div>
        </Form>
        <div className="text-center mt-5">
            <h6 style={{color: "white"}}><b style={{color: "orange"}}>Correo:</b> hola@correo.com</h6>
            <h6 style={{color: "white"}}><b style={{color: "orange"}}>Contraseña:</b> 123456</h6>
        </div>
    </Container>
  )
}

export default Login;