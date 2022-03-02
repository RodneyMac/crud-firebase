import React from 'react';
import {Modal, Stack, Form, Button} from "react-bootstrap";

const ModalAniadir = ({isModalAniadir, setIsModalAniadir}) => {
  return (
    <Modal show={isModalAniadir} onHide={() => setIsModalAniadir(false)}>
        <Modal.Header>
            <Modal.Title>Añadir Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Stack>
                    <Form.Control type="text" controlId="titulo" placeholder="titulo"/>
                    <Form.Control type="number" controlId="precio" placeholder="precio"/>
                    <Form.Control type="number" controlId="cantidad" placeholder="cantidad"/>
                    <Form.Control type="text" controlId="sku" placeholder="sku"/>
                </Stack>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => setIsModalAniadir(false)}>Cancelar</Button>
            <Button variant="primary">Añadir</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default ModalAniadir