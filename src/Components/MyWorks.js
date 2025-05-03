import React, { Component } from 'react';
import {  Container,Accordion } from 'react-bootstrap';

class MyWorks extends Component {
  render() {
    return (
      <Container>
      <h2>MyWorks</h2>
      <Accordion flush>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>TODO List</Accordion.Header>
          <Accordion.Body>
           <b>Features:</b> 
           <br/>Totally Responsive Web Page
           <br/>CRUD Operation Using Only React<hr/>
           <div id='work_text'>
           <p>-Used <mark>Multiple component,Bootstrap Navbar,Event Handling,gives Proper successfull Information</mark></p>
           <p>-<mark>Constructor,setState Method with Class Component</mark></p>
           </div>
           <hr/>
           <div>
            <b>Used:</b><mark>HTML,CSS,ReactBootsrap</mark><br/>
            <a href='https://github.com/P-Akilan' target='blank'>SEE MY CODE</a>
           </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion flush className='mt-2'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Log In Form</Accordion.Header>
          <Accordion.Body>
            dbfviuef
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </Container>
    )
  }
}

export default MyWorks