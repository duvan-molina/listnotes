import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "timeago.js";

const NotesList = () => {
  const [notas, setNotas] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:4000/api/notes");
    console.log(res.data);
    setNotas(res.data);
  };

  const onClickDelete = async (id) => {
    await axios.delete(`http://localhost:4000/api/notes/${id}`);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <div>
        {notas.map((nota) => (
          <Card className="text-center mt-4" key={nota._id}>
            <Card.Header>{nota.author}</Card.Header>
            <Card.Body>
              <Card.Title>{nota.title}</Card.Title>
              <Card.Text>{nota.content}</Card.Text>
              <Button variant="primary">ver</Button>
              <Link to={`/edit/${nota._id}`}>
                <Button variant="primary">editar</Button>
              </Link>
              <Button variant="danger" onClick={() => onClickDelete(nota._id)}>
                eliminar
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted">
              {format(nota.date)}
            </Card.Footer>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default NotesList;
