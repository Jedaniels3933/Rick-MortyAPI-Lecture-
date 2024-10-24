import { useQuery } from "@apollo/client";
import React from "react";
import { GET_CHARACTERS } from "../queries/Queries";
import { Spinner, Container, Row, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// interface for our Character
interface CharacterProps {
    id: string;
    name: string;
    image: string;
  }
  
  const CharactersPage = () => {
    // query our data from graphql
    const { data, loading } = useQuery(GET_CHARACTERS);
  
    if (loading) {
      return <Spinner />;
    }
  
    return (
      <Container>
        <Row>
          {data.characters.results.map(({ id, name, image }: CharacterProps) => (
            <Card className="m-4" key={id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Link to = {`/${id}`}>
                <Button variant="primary">Go somewhere</Button></Link>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    );
  };
  
  export default CharactersPage;