import React from "react";
import { GET_CHARACTER } from "../queries/Queries";
import { useQuery } from "@apollo/client";
import { Button, Card, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const CharacterPage = () => {
  const { id } = useParams()
  // variables allows us to pass parameters to our query in JSON format
  const { data, loading } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <Spinner />;
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.character.image} />
      <Card.Body>
        <Card.Title>{data.character.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CharacterPage;