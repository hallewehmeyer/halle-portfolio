import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
// import { AiFillLinkedin } from 'react-icons'
export default function Footer() {
    return (
        <div className="fixed-bottom  p-6 bg-light text-dark text-center">
             <ListGroup horizontal>
        <ListGroupItem tag="a" href="https://github.com/hallewehmeyer">Github</ListGroupItem>
        <ListGroupItem tag="a" href="https://www.linkedin.com/in/halle-wehmeyer-705b881b5/">LinkdIn</ListGroupItem>
        <ListGroupItem tag="a" href="https://drive.google.com/file/d/1pAKW0UsmIoanxMlz3DzhyCWLi_z4czzm/view?usp=sharing">Resume</ListGroupItem>
        <ListGroupItem tag="a" href="mailto:halle.atx@gmail.com">Email</ListGroupItem>
        <ListGroupItem tag="a" href="tel:5122147131">Phone</ListGroupItem>
      </ListGroup>
            <h6>Halle Wehmeyer &copy; 2020. All Rights Reserved.</h6>
        </div>
    )
}
{/* <h5 class="white-text">Personal Links and Contact:</h5>
<ul class="linkpg"> 
  <li><a class="grey-text text-lighten-3" href="https://github.com/hallewehmeyer">Github</a></li>
  <li><a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/halle-wehmeyer-705b881b5/">LinkdIn</a></li>
  <li><a class="grey-text text-lighten-3" href="https://drive.google.com/file/d/1pAKW0UsmIoanxMlz3DzhyCWLi_z4czzm/view?usp=sharing">Resume</a></li>
  <li><a class="grey-text text-lighten-3" href="mailto:halle.atx@gmail.com">Email</a></li>
  <li><a class="grey-text text-lighten-3" href="tel:5122147131">Phone</a></li>
</ul> */}