import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import axios from "axios";

const CreateUser = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [agregar, setAgregar] = useState({
    username: "",
  });
  const getUsers = async () => {
    const users = await axios.get("http://localhost:4000/api/users");
    setUsuarios(users.data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  const onChange = (e) => {
    setAgregar({
      username: e.target.value,
    });
  };
  const handleClick = async () => {
    await axios.post("http://localhost:4000/api/users", {
      profile: agregar.username,
    });
    setAgregar({ username: "" });
    getUsers();
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:4000/api/users/${id}`);
    getUsers();
  };
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Crea un usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="ingresa el nick"
                value={agregar.username}
                onChange={onChange}
              />
              <Button onClick={() => handleClick()}>Crear</Button>
            </Form.Group>
          </div>
        </Col>
        <Col>
          <ListGroup>
            {usuarios.map((usuario) => (
              <ListGroup.Item
                key={usuario._id}
                onDoubleClick={() => deleteUser(usuario._id)}
              >
                {usuario.profile}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateUser;
