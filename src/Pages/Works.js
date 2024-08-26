import React, { useState, useEffect, useRef} from 'react';
import './Works.css';
import { Navbar, Container, Nav, NavbarToggle, NavbarCollapse, Carousel, Col, Card, CardImg, CardHeader, Row, CardBody, CardText, CarouselItem, CardTitle } from 'react-bootstrap';
import Footer from 'rc-footer';
import { Link } from 'react-router-dom';
import { GiHighGrass, GiSpade, GiPlantRoots  } from "react-icons/gi";
import { BsDropletFill } from "react-icons/bs";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaScrewdriverWrench } from "react-icons/fa6";







function Works() {
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
              <Nav.Link style={{ marginRight: '2em', color: 'bisque', fontSize: '110%' }}>
                <Link to="/Works" style={{ color: 'inherit', textDecoration: 'none' }}>Munkáink</Link>
              </Nav.Link>  
              <Nav.Link style={{ marginRight: '20em', color: 'bisque'}}>
                <Link to="/Support" style={{ color: 'inherit', textDecoration: 'none' }}>Kapcsolat</Link>
              </Nav.Link>          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    <Row style={{textAlign: 'center', justifyContent: 'center', marginTop: '5vw'}}>
      <Col xs={10} md={6} lg={8}>
        
          <p className='welcomeFontSize' style={{color: 'bisque'}}>"Számtalan munkánk, megannyi kép formájában tükrözi elkötelezettségünket a minőség és precizitás iránt. Minden projektünk a szakértelmünket és szenvedélyünket hordozza, hogy Ön mindig a legjobbat kapja."
          </p>
        
      </Col>
    </Row>
        <Container>
            <Row style={{textAlign: 'center', justifyContent: 'center', marginTop: '10vw'}}>
                <Col xs={3} md={2} lg={3}>
                    <Card className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold1.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={2} lg={3}>
                    <Card className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold4.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={2} lg={3}>
                    <Card className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold2.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={2} lg={3}>
                    <Card className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold3.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>      
            </Row>
        </Container>
        <Container fluid style={{marginTop: '-3vw',}}>
            <Row>
                <Col xs={2} md={3} lg={2}>
                    <Card className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold6.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold7.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={2} md={2} lg={2}>
                    <Card className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold8.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={2} md={2} lg={2}>
                    <Card className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kert1.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={2} md={2} lg={3}>
                    <Card className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kert2.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
            </Row>
        </Container>
        <Container fluid style={{marginTop: '-3vw',  position: 'relative', zIndex: '-1'}}>
            <Row style={{textAlign: 'center', justifyContent: 'center'}}>
                <Col xs={3} md={3} lg={3}>
                    <Card className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kert4.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kert6.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kert8.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kertx.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
            </Row>
        </Container>
        <Container fluid style={{marginTop: '5vw',  position: 'relative', zIndex: '-1'}}>
            <Row style={{textAlign: 'center', justifyContent: 'center'}}>
                <Col xs={2} md={3} lg={3}>
                    <Card className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kert7.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kert11.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={4} md={3} lg={3}>
                    <Card className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kert15.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kert16.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
            </Row>
        </Container>

        <Container fluid style={{marginTop: '5vw'}}>
            <Row style={{textAlign: 'center', justifyContent: 'center'}}>
                <Col xs={3} md={3} lg={2}>
                    <Card className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ontozo2.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card className='cardokSzinAtmenet' style={{zIndex: '1',boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ontozo3.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card className='cardokSzinAtmenet' style={{zIndex: '1',boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ontozo4.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card className='cardokSzinAtmenet' style={{zIndex: '1',boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ontozo6.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card className='cardokSzinAtmenet' style={{zIndex: '1',boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ontozo8.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ontozo9.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card className='cardokSzinAtmenet' style={{ boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Szakertelem.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Utana.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card className='cardokSzinAtmenet' style={{ boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='utana2.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
            </Row>
        </Container>

        

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

export default Works;

