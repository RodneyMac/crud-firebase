import React, { useEffect } from 'react';
import signOut from "../functions/cerrarSesion";
import {Container, Stack, Button, Form, Table} from "react-bootstrap";
import getAllProducts from "../functions/getAllProducts";

const Home = ({usuario}) => {

  const [productos, setProductos] = React.useState([]);

  function actualizarEstadoProductos() {
    getAllProducts().then((productos) => {
      setProductos(productos);
    });
  }

  useEffect(() => {
    actualizarEstadoProductos();
  }, []);

  return (
    <Container fluid>
      <Stack direction="horizontal" className="justify-content-between">
        <p style={{fontSize: 24}}>Home - Welcome, {usuario.email}</p>
        <Button onClick={signOut}>Cerrar Sesión</Button>
      </Stack>
      <hr/>
      <Form>
        <Stack direction="horizontal">
          <Form.Group controlId="busqueda" className="w-75 m-3">
            <Form.Control type="text" placeholder="Buscar"/>
          </Form.Group>
          <Button variant="dark" type="submit" className="mx-2">Buscar</Button>
          <Button variant="info">Resetear</Button>
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
                <Button variant="secondary" className="mx-2">Editar</Button>
                <Button variant="danger">Eliminar</Button>
              </td>
            </tr>
          ))}
          <tr>
            <td>1</td>
            <td>Titulo</td>
            <td>$ 100</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default Home;