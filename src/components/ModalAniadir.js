import React from 'react';
import {Modal, Stack, Form, Button} from "react-bootstrap";
import aniadirProducto from '../functions/aniadirProducto';

function ModalAniadir({isModalAniadir, setIsModalAniadir, actualizarEstadoProductos}) {

    function aniadirProductoModal() {
        const titulo = document.getElementById("titulo").value;
        const precio = document.getElementById("precio").value;
        const cantidad = document.getElementById("cantidad").value;
        const sku = document.getElementById("sku").value;
        
        const infoProducto = {titulo, precio, cantidad, sku};
        aniadirProducto(infoProducto);
        actualizarEstadoProductos();
        setIsModalAniadir(false); 
    }

  return (
    <Modal show={isModalAniadir} onHide={() => setIsModalAniadir(false)}>
        <Modal.Header>
            <Modal.Title>Añadir Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Stack>
                    <Form.Control type="text" id="titulo" placeholder="titulo" className="mb-3"/>
                    <Form.Control type="number" id="precio" placeholder="precio" className="mb-3"/>
                    <Form.Control type="number" id="cantidad" placeholder="cantidad" className="mb-3"/>
                    <Form.Control type="text" id="sku" placeholder="sku"/>
                </Stack>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => setIsModalAniadir(false)}>Cancelar</Button>
            <Button variant="primary" onClick={aniadirProductoModal}>Añadir</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default ModalAniadir