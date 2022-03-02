import React from 'react';
import {Modal, Stack, Form, Button} from "react-bootstrap";
import aniadirProducto from '../functions/aniadirProducto';
import { useState } from "react";

function ModalEditar({isModalEditar, setIsModalEditar, actualizarEstadoProductos, productoEditar, setProductoEditar}) {

    function editarProductoModal() {
        const titulo = document.getElementById("titulo").value;
        const precio = document.getElementById("precio").value;
        const cantidad = document.getElementById("cantidad").value;
        const sku = document.getElementById("sku").value;
        
        const infoProducto = {titulo, precio, cantidad, sku};
        aniadirProducto(infoProducto);
        setProductoEditar(null);
        actualizarEstadoProductos();
        setIsModalEditar(false); 
    }

    const [productoEstado, setProductoEstado] = useState({...productoEditar});

  return (
    <Modal show={isModalEditar} onHide={() => {
        setIsModalEditar(false);
        setProductoEditar(null);
    }}>
        <Modal.Header>
            <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Stack>
                    <Form.Control type="text" id="titulo" placeholder="titulo" className="mb-3" value={productoEstado.titulo} onChange={(e) => {setProductoEstado({...productoEstado, titulo: e.target.value})}}/>
                    <Form.Control type="number" id="precio" placeholder="precio" className="mb-3" value={productoEstado.precio} onChange={(e) => {setProductoEstado({...productoEstado, precio: e.target.value})}}/>
                    <Form.Control type="number" id="cantidad" placeholder="cantidad" className="mb-3" value={productoEstado.cantidad} onChange={(e) => {setProductoEstado({...productoEstado, cantidad: e.target.value})}}/>
                    <Form.Control type="text" id="sku" placeholder="sku" value={productoEstado.sku} onChange={(e) => {setProductoEstado({...productoEstado, sku: e.target.value})}}/>
                </Stack>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => {
                setIsModalEditar(false);
                setProductoEditar(null);
            }}>Cancelar</Button>
            <Button variant="primary" onClick={editarProductoModal}>Editar</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default ModalEditar;