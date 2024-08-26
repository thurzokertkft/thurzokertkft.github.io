import React, { useState, useEffect } from 'react';
import './Us.css';
import { Navbar, Container, Nav, NavbarToggle, NavbarCollapse, Carousel, Col, Card, CardImg, CardHeader, Row, CardBody, CardText, CarouselItem, CardTitle } from 'react-bootstrap';
import Footer from 'rc-footer';
import { Link } from 'react-router-dom';
import { GiHighGrass, GiSpade, GiPlantRoots  } from "react-icons/gi";
import { BsDropletFill } from "react-icons/bs";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaScrewdriverWrench } from "react-icons/fa6";



function Us() {
  
  return (
    <div className='bodyBackground'>
      <Navbar bg="dark" expand='lg'>
        <Container fluid>
        <img style={{width: '150px'}} className='img-fluid' src='Logo.png'/>
          <Navbar.Toggle className="ms-auto"/>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link style={{ marginRight: '2em', color: 'bisque' }}>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Főoldal</Link>
              </Nav.Link>
              <Nav.Link style={{ marginRight: '2em', color: 'bisque'}}>
                <Link to="/Services"  style={{ color: 'inherit', textDecoration: 'none' }}>Szolgáltatásaink</Link>
              </Nav.Link>
              <Nav.Link style={{ marginRight: '2em', color: 'bisque', fontSize: '110%'  }}>
                <Link to="" style={{ color: 'inherit', textDecoration: 'none' }}>Rólunk</Link>
              </Nav.Link>    
              <Nav.Link style={{ marginRight: '2em', color: 'bisque' }}>
                <Link to="/Works" style={{ color: 'inherit', textDecoration: 'none' }}>Munkáink</Link>
              </Nav.Link>
              <Nav.Link style={{ marginRight: '20em', color: 'bisque'}}>
                <Link to="/Support" style={{ color: 'inherit', textDecoration: 'none' }}>Kapcsolat</Link>
              </Nav.Link>           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row style={{textAlign: 'center', justifyContent: 'center', marginTop: '5vw'}}>
          <Col xs={12} md={8} lg={8} >
            <Card className='blurred2' style={{textAlign: 'center'}}>
              <Card.Text style={{color: 'bisque'}} className='TextSize'>
              Üdvözlünk az oldalon! Örülünk, hogy itt vagy, és reméljük, hogy megtalálod, amit keresel. Ha bármiben segítségre van szükséged, ne habozz kapcsolatba lépni velünk. Kellemes böngészést kívánunk!
              </Card.Text>
              <img className='img-fluid kepekAtmenete' src='ipari.jpg'/>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={4} >
          <Card className='blurred2' style={{textAlign: 'center'}}>
              <Card.Text style={{color: 'bisque'}} className='TextSize'>
              Üdvözlünk az oldalon! Örülünk, hogy itt vagy, és reméljük, hogy megtalálod, amit keresel. Ha bármiben segítségre van szükséged, ne habozz kapcsolatba lépni velünk. Kellemes böngészést kívánunk!
              </Card.Text>
          </Card>
          <Card style={{marginTop: '2vw'}} className='blurred2'>
            <img src='ipari5.jpg'/>
          </Card>
          </Col>
        </Row>
        <Row>
            <Col xs={6} md={4} lg={4} style={{paddingRight: 0}}>
              <Card className='blurred2' style={{textAlign: 'center'}}>
                <Card.Text style={{color: 'bisque'}} className='TextSize'>
                  Üdvözlünk az oldalon! Örülünk, hogy itt vagy, és reméljük, hogy megtalálod, amit keresel. Ha bármiben segítségre van szükséged, ne habozz kapcsolatba lépni velünk. Kellemes böngészést kívánunk!
                </Card.Text>
                <img className='kepekAtmenete2' src='ipari2.jpg'/>
              </Card>
            </Col>     
            <Col xs={6} md={8} lg={8} style={{paddingLeft: 0}}>
              <Card className='blurred2'>
                <img className='img-fluid' src='ipari4.jpg'/>
              </Card>
            </Col>
        </Row>

        <Row style={{marginTop: '10vw', textAlign: 'center', justifyContent: 'center'}}>
          <Col xs={12} md={10} lg={10}>
            <Card style={{textAlign: 'center', backgroundColor: 'inherit', border:'none'}}>
              <Card.Title style={{color: 'bisque'}} className='TextSize'>
                Köszönjük, hogy időt szántál arra, hogy elolvasd a rólunk szóló anyagot. Nagyra értékeljük az érdeklődésedet, és reméljük, hogy sikerült betekintést nyújtanunk tevékenységünkbe. Ha bármilyen kérdésed van, vagy többet szeretnél megtudni, szívesen állunk rendelkezésedre!
              </Card.Title>
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

export default Us;