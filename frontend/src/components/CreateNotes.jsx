import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ReactDatepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../style/createNotes.css";
import axios from "axios";

const CreateNotes = () => {
  const id = useRouteMatch().params.id;
  const getData = async () => {
    const res = await axios.get("http://localhost:4000/api/users");
    setUsuario(res.data);
    setdata({ userSelect: res.data[0].profile });

    if (id) {
      const dataEditar = await axios.get(
        `http://localhost:4000/api/notes/${id}`
      );
      setdata({
        title: dataEditar.data.title,
        content: dataEditar.data.content,
        userSelect: dataEditar.data.author,
        date: dataEditar.data.date,
        editar: true,
        _id: id,
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const [usuario, setUsuario] = useState([]);
  const [data, setdata] = useState({
    title: "",
    content: "",
    userSelect: "",
    editar: false,
    _id: "",
  });
  const [date, setDate] = useState({
    date: new Date(),
  });
  const onChange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    if (data.editar) {
      await axios.put(`http://localhost:4000/api/notes/${data._id}`, {
        title: data.title,
        content: data.content,
        author: data.userSelect,
        date: date.date,
      });
    } else {
      await axios.post("http://localhost:4000/api/notes", {
        title: data.title,
        content: data.content,
        author: data.userSelect,
        date: date.date,
      });
    }
    window.location.href = "/";
  };
  const onChangeDate = (date) => {
    setDate({ date });
  };
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <Container>
            <Form>
              <Form.Group>
                <Form.Label>Elige un usuario</Form.Label>
                <Form.Control
                  as="select"
                  custom
                  name="userSelect"
                  value={data.userSelect}
                  onChange={onChange}
                >
                  {usuario.map((usuario) => (
                    <option key={usuario._id} value={usuario.profile}>
                      {usuario.profile}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="title"
                  value={data.title}
                  placeholder="titulo de la nota"
                  onChange={onChange}
                />
                <Form.Label>Descripción de la tarea</Form.Label>
                <Form.Control
                  placeholder="descripción"
                  as="textarea"
                  rows="3"
                  name="content"
                  value={data.content}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="centrado">
                <ReactDatepicker selected={date.date} onChange={onChangeDate} />
              </Form.Group>
              <div className="centrado">
                <Button onClick={() => onSubmit()}>
                  {data.editar ? "Guardar cambios" : "Guardar nota"}
                </Button>
              </div>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateNotes;
