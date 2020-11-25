// import React from 'react';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// const Example = (props) => {
//   return (
//     <Form>
//       <FormGroup>
//         <Label for="exampleEmail">Email</Label>
//         <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
//       </FormGroup>
//       <FormGroup>
//         <Label for="examplePassword">Password</Label>
//         <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleSelect">Select</Label>
//         <Input type="select" name="select" id="exampleSelect">
//           <option>1</option>
//           <option>2</option>
//           <option>3</option>
//           <option>4</option>
//           <option>5</option>
//         </Input>
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleSelectMulti">Select Multiple</Label>
//         <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
//           <option>1</option>
//           <option>2</option>
//           <option>3</option>
//           <option>4</option>
//           <option>5</option>
//         </Input>
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleText">Text Area</Label>
//         <Input type="textarea" name="text" id="exampleText" />
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleFile">File</Label>
//         <Input type="file" name="file" id="exampleFile" />
//         <FormText color="muted">
//           This is some placeholder block-level help text for the above input.
//           It's a bit lighter and easily wraps to a new line.
//         </FormText>
//       </FormGroup>
//       <FormGroup check>
//         <Label check>
//           <Input type="checkbox" />{' '}
//           Check me out
//         </Label>
//       </FormGroup>
//       <Button>Submit</Button>
//     </Form>
//   );
// }

// export default Example;
import React from 'react'

export default function Contact() {
    var contactStyle = {
        margin: "auto",
        width: "50%",
        backgroundColor: "white",
    }
    return (
        <main style={contactStyle}>
        <form class="text-center border border-dark bg p-5" action="#!">
            <p class="h4 mb-4">Contact Me</p>
            <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Name"/>
            <input type="email" id="defaultContactFormEmail" class="form-control mb-4" placeholder="E-mail"/>
            <label class="subject">Subject</label>
            <select class="browser-default custom-select mb-4">
                <option value="1" selected>Choose option</option>
                <option value="2">Your favorite color</option>
                <option value="3">How's your day going?</option>
                <option value="4">Other</option>
            </select>
            <div class="form-group">
                <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3"
                    placeholder="Message"></textarea>
            </div>
            <div class="custom-control custom-checkbox mb-4">
                <input type="checkbox" class="custom-control-input" id="defaultContactFormCopy"/>
                <label class="custom-control-label" for="defaultContactFormCopy">Bet you won't click this lil box</label>
            </div>
            <button class="btn btn-info btn-block" type="submit">Submit</button>
        </form>
    </main>
    )
}
