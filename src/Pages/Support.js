import React, { useState, useEffect } from 'react';
import './Support.css';
import { Navbar, Container, Nav, NavbarToggle, NavbarCollapse, Carousel, Modal, Button, Col, Card, CardImg, CardHeader, Row, CardBody, CardText, CarouselItem, CardTitle, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import Footer from 'rc-footer';
import { Link } from 'react-router-dom';
import { GiHighGrass, GiSpade, GiPlantRoots  } from "react-icons/gi";
import { BsDropletFill } from "react-icons/bs";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { useForm, ValidationError } from '@formspree/react';


function Support() {
  const [state, handleSubmit] = useForm("mzzpypad");
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // Show modal when form submission is successful
  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
    }
  }, [state.succeeded]);

  const handleClose = () => setShowModal(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <Navbar bg="dark" expand='lg'>
        <Container fluid>
        <img style={{width: '150px'}} className='img-fluid' src='Logo.png'/>
          <Navbar.Toggle className="ms-auto"/>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link style={{ marginRight: '2em', color: 'bisque' }}>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Főoldal</Link>
              </Nav.Link>
              <Nav.Link style={{ marginRight: '2em', color: 'bisque' }}>
                <Link to="/Services" style={{ color: 'inherit', textDecoration: 'none' }}>Szolgáltatásaink</Link>
              </Nav.Link>
              <Nav.Link style={{ marginRight: '2em', color: 'bisque' }}>
                <Link to="/Us" style={{ color: 'inherit', textDecoration: 'none' }}>Rólunk</Link>
              </Nav.Link>   
              <Nav.Link style={{ marginRight: '2em', color: 'bisque' }}>
                <Link to="/Works" style={{ color: 'inherit', textDecoration: 'none' }}>Munkáink</Link>
              </Nav.Link>   
              <Nav.Link style={{ marginRight: '20em', color: 'bisque', fontSize: '110%' }}>
                <Link  style={{ color: 'inherit', textDecoration: 'none' }}>Kapcsolat</Link>
              </Nav.Link>         
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container style={{ marginTop: '8vw',boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', padding: 0 }}>
        <Col xs={12} md={12} lg={12}>
          <Card style={{ backgroundColor: 'black', padding: '0vw', margin: 0 }}>
            <Row style={{textAlign: 'center', justifyContent: 'center'}}>
              <Col xs={10} md={6} lg={6}>
                <Form style={{marginLeft: '1vw'}} onSubmit={handleSubmit}>
                  <h3 style={{marginTop: '5vw', textAlign: 'center', color: 'bisque' }}>Lépjen kapcsolatba velünk</h3>
                  
                  <FormGroup controlId="formName" style={{marginTop: '3vw', marginBottom: '1.5vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <FormLabel style={{ color: 'bisque', textAlign: 'center' }}>Név:</FormLabel>
                    <FormControl style={{ width: '100%', maxWidth: '400px' }} name="name" placeholder='pl.: Vezetéknév Keresztnév' required />
                  </FormGroup>

                  <hr style={{border: '1px solid green'}}/>

                  <FormGroup controlId="formCity" style={{ marginBottom: '1.5vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <FormLabel style={{ color: 'bisque', textAlign: 'center' }}>Város:</FormLabel>
                    <FormControl style={{ width: '100%', maxWidth: '400px' }} name="city" placeholder='pl.: Miskolc' required />
                  </FormGroup>

                  <hr style={{border: '1px solid green'}}/>

                  <FormGroup controlId="formPhone" style={{ marginBottom: '1.5vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <FormLabel style={{ color: 'bisque', textAlign: 'center' }}>Telefon:</FormLabel>
                    <div style={{display: 'flex', flexDirection: 'row', padding: 0}}>
                      <Form.Control className="custom-placeholder"  style={{ width: '20%', paddingRight: 0}} type="text" placeholder="+36" readOnly />
                      <FormControl style={{ width: '80%'}} name="Phone" placeholder='pl.: 701234567' required />
                    </div>
                  </FormGroup>

                  <hr style={{border: '1px solid green'}}/>

                  <FormGroup controlId="formMessage" style={{ textAlign: 'center' }}>
                    <FormLabel style={{ color: 'bisque', display: 'block' }}>Írjon nekünk:</FormLabel>
                    <FormControl 
                      className='textAreaSize'
                      as="textarea" 
                      style={{ margin: '0 auto', marginBottom: '2vw'}} 
                      name="message"
                      placeholder='Írja le, hogy mik az igényei és nemsokára fogjuk keresni...'
                      required
                    />
                    <Form.Check 
                    style={{ marginBottom: '2vw', color: 'bisque'}}
                    type="checkbox" 
                    className='marginCheck'
                    label="Elfogadom az Adatvédelmi tájékoztatót" 
                    onChange={handleCheckboxChange}
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />
                    <Button  
                      type="submit" 
                      style={{width: '75%', backgroundColor: 'darkgreen', border: '1px solid black', color: 'bisque'}}
                      disabled={!isChecked || state.submitting}
                    >
                      Küldés
                    </Button>
                  </FormGroup>
                </Form>
              </Col>
              <Col xs={12} md={6} lg={6} style={{ display: 'flex', justifyContent: 'center' }}>
                <img 
                  src='SupportLetter.jpg' 
                  style={{ maxWidth: '100%', height: 'auto' }} 
                  alt='Support Letter' 
                  className='img-fluid kepSzinAtmenet szinAtmenet'
                />
              </Col>
              <p style={{color: 'grey'}}>Telefon: +36/70 421 2294</p>
              <p className='left' style={{marginTop: '-0.5vw', color: 'grey'}}>+36/70 530 3055</p>           
              <p style={{color: 'grey'}}>@Email: thurzobence98@gmail.com</p>
              <img className='logo' src='Logo.png'/>
            </Row>
          </Card>
        </Col>

      </Container>

      
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Köszönjük!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Köszönjük, az üzenetét megkaptuk!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Bezárás
          </Button>
        </Modal.Footer>
      </Modal>


          <footer className="footer" style={{color: 'bisque', backgroundColor: '#333333', marginTop: '20%'}}>
            <Row>
              <Col xs={3} md={3} lg={4}>
                <img src='Logo.png' style={{width: '15vw', marginTop: '1vw'}}/>
              </Col>
              <Col xs={8} md={8} lg={8}>
                <Card  style={{backgroundColor: 'GrayText', border: '3px solid green'}}>
                  <Card.Body>
                    <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: '5vw'}}>          
                    <Card.Title className='fontSize'>
                      Elérhetőség:
                    </Card.Title>
                    <Card.Text className='fontSize' style={{marginLeft: '5vw'}}>
                      +36/70 421 2294
                      <br/>
                      +36/70 530 3055
                    </Card.Text>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Card.Title className='fontSize'>
                      Email:
                    </Card.Title>
                    <Card.Text className='fontSize' style={{marginLeft: '5vw'}}>
                      thurzobence98@gmail.com
                    </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </footer>
  </div>
  
    
  );
}

export default Support;