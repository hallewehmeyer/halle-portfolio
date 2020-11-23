import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid className="p-3 text-center">
        <Container fluid>
          <h1 className="display-4">{props.title}</h1>
          <p className="lead">{props.copy}</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;