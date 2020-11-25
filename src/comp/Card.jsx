import React from 'react';
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />

// ReactDOM.render(element, document.body)
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

const Example = (props) => {
    var style = {

        height: "200px",
        border: "gray 3px solid",
        width: "100%",
        fontFamily: "font-family: 'Krona One', sans-serif;"
    }
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">{props.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.subtitle}</CardSubtitle>
                </CardBody>
                <img style = {style} src={props.img} alt={props.title} />
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