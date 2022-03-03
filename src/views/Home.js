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
      <Container className="mt-4 container">
      <ModalAniadir isModalAniadir={isModalAniadir} setIsModalAniadir={setIsModalAniadir} actualizarEstadoProductos={actualizarEstadoProductos}/>
      {productoEditar && (<ModalEditar isModalEditar={isModalEditar} setIsModalEditar={setIsModalEditar} actualizarEstadoProductos={actualizarEstadoProductos} productoEditar={productoEditar} setProductoEditar={setProductoEditar}/>)}
      <Stack direction="horizontal" className="justify-content-between">
        <p style={{fontSize: 24, color: "lime"}}>Welcome <b style={{color: "cyan"}}>{usuario.email}</b></p>
        <Button onClick={signOut} className="">Cerrar Sesión</Button>
      </Stack>
      <hr style={{color: "cyan"}}/>
      <Form onSubmit={busquedaFormHandler}>
        <Stack direction="horizontal" className="justify-content-center">
          <Form.Group controlId="busqueda" className="w-75">
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
      <hr style={{color: "cyan"}}/>
      <Table style={{color: "white"}} className="text-center">
        <thead>
          <tr style={{color: "orange"}}>
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
              <td style={{color: "cyan"}}>{index + 1}</td>
              <td>{producto.titulo}</td>
              <td>{producto.precio}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.sku}</td>
              <td>
                <Button variant="secondary" className="mx-2 m-1" onClick={() => {
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
      <div className="text-center">
        <Button onClick={aniadirProductoHome} variant="success" className="mt-2">Añadir Producto</Button>
      </div>
      </Container>
  )
}

export default Home;