import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.subtitle}</CardSubtitle>
        </CardBody>
        <img width="100%" src={props.img} alt={props.title} />
        <CardBody>
          <CardText>{props.copy}</CardText>
          <CardLink href={props.link1}>{props.link1title}</CardLink>
          <CardLink href={props.link2}>{props.link2title}</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;