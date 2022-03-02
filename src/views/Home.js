import React, { useEffect, useState } from 'react';
import signOut from "../functions/cerrarSesion";
import {Container, Stack, Button, Form, Table} from "react-bootstrap";
import getAllProducts from "../functions/getAllProducts";
import ModalAniadir from '../components/ModalAniadir';
import eliminarProductoHome from "../functions/eliminarProductoHome";
import ModalEditar from '../components/ModalEditar';
import filtrarDatos from '../functions/filtrarDatos';

const Home = ({usuario}) => {

  const [productos, setProductos] = React.useState([]);
  const [isModalAniadir, setIsModalAniadir] = useState(false);
  const [isModalEditar, setIsModalEditar] = useState(false);
  const [productoEditar, setProductoEditar] = useState(null);

  async function busquedaFormHandler(e) {
    e.preventDefault();
    const busqueda = e.target.busqueda.value;
    const nvosDocus = await filtrarDatos(busqueda);
    setProductos(nvosDocus);
  }

  function actualizarEstadoProductos() {
    getAllProducts().then((productos) => {
      setProductos(productos);
    });
  }

  function aniadirProductoHome() {
    setIsModalAniadir(true);
  }

  useEffect(() => {
    actualizarEstadoProductos();
  }, []);

  return (
    <Container fluid>
      <ModalAniadir isModalAniadir={isModalAniadir} setIsModalAniadir={setIsModalAniadir} actualizarEstadoProductos={actualizarEstadoProductos}/>
      {productoEditar && (<ModalEditar isModalEditar={isModalEditar} setIsModalEditar={setIsModalEditar} actualizarEstadoProductos={actualizarEstadoProductos} productoEditar={productoEditar} setProductoEditar={setProductoEditar}/>)}
      <Stack direction="horizontal" className="justify-content-between">
        <p style={{fontSize: 24}}>Home - Welcome, {usuario.email}</p>
        <Button onClick={signOut}>Cerrar Sesión</Button>
      </Stack>
      <hr/>
      <Form onSubmit={busquedaFormHandler}>
        <Stack direction="horizontal">
          <Form.Group controlId="busqueda" className="w-75 m-3">
            <Form.Control type="text" placeholder="Buscar"/>
          </Form.Group>
          <Button variant="dark" type="submit" className="mx-2">Buscar</Button>
          <Button variant="info" onClick={() => {
            const input = document.getElementById("busqueda");
            input.value = "";
            actualizarEstadoProductos();
          }}>Resetear</Button>
        </Stack>
      </Form>
      <hr/>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>SKU</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos && productos.map((producto, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{producto.titulo}</td>
              <td>{producto.precio}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.sku}</td>
              <td>
                <Button variant="secondary" className="mx-2" onClick={() => {
                  setIsModalEditar(true);
                  setProductoEditar({...producto});
                }}>Editar</Button>
                <Button variant="danger" onClick={() => {
                  eliminarProductoHome(producto).then(confirmacion => {
                    actualizarEstadoProductos();
                  });
                }}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={aniadirProductoHome}>Añadir Producto</Button>
    </Container>
  )
}

export default Home;