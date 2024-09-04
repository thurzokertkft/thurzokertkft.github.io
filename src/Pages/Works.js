import React, { useState, useEffect, useRef} from 'react';
import './Works.css';
import { Navbar, Container, Nav, NavbarToggle,Button, NavbarCollapse,Modal, Carousel, Col, Card, CardImg, CardHeader, Row, CardBody, CardText, CarouselItem, CardTitle } from 'react-bootstrap';
import Footer from 'rc-footer';
import { Link } from 'react-router-dom';
import { GiHighGrass, GiSpade, GiPlantRoots  } from "react-icons/gi";
import { BsDropletFill } from "react-icons/bs";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaScrewdriverWrench } from "react-icons/fa6";







function Works() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);

  // Kattintás eseménykezelő
  const handleClick = (src) => {
    setSelectedImage(src); // A kép forrásának eltárolása
    setShowModal(true); // Modál megnyitása
  };

  const handleClose = () => setShowModal(false);

  return (
    


    <div>
      <Navbar bg="dark" expand='lg'>
        <Container fluid>
          <img style={{width: '150px'}} className='img-fluid' src='Logo.png'/>
            <Navbar.Toggle className="ms-auto"/>
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <Nav.Link style={{ marginRight: '2em', color: 'bisque'}}>
                  <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Főoldal</Link>
                </Nav.Link>
                <Nav.Link style={{ marginRight: '2em', color: 'bisque' }}>
                  <Link to="/Services" style={{ color: 'inherit', textDecoration: 'none' }}>Szolgáltatásaink</Link>
                </Nav.Link>
                <Nav.Link style={{ marginRight: '2em', color: 'bisque' }}>
                  <Link to="/Industrial" style={{ color: 'inherit', textDecoration: 'none' }}>Cégeknek</Link>
                </Nav.Link>  
                <Nav.Link style={{ marginRight: '2em', color: 'bisque' }}>
                  <Link to="/Us" style={{ color: 'inherit', textDecoration: 'none' }}>Rólunk</Link>
                </Nav.Link>   
                <Nav.Link style={{ marginRight: '2em', color: 'bisque' }}>
                  <Link to="/Works" style={{ color: 'inherit', textDecoration: 'none', fontSize: '110%' }}>Munkáink</Link>
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


    <Container fluid style={{marginTop: '5vw'}}>
            <Row style={{textAlign: 'center', justifyContent: 'center'}}>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Bio1.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Bio1.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Bio2.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Bio2.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Bio3.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Bio3.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Bio4.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Bio4.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Kep19.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Kep19.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Kep20.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Kep20.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Kep21.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Kep21.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Kep3.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)' }}>
                    <img className='img-fluid' src='Kep3.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Kep4.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Kep4.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Bio5.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Bio5.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Bio6.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Bio6.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Bio7.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Bio7.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Kep6.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Kep6.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Kep7.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Kep7.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={4} md={4} lg={4}>
                    <Card onClick={() => handleClick('Kep8.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Kep8.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={5} md={5} lg={4}>
                    <Card onClick={() => handleClick('Kep11.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Kep11.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                
                <Col xs={5} md={5} lg={4}>
                    <Card onClick={() => handleClick('Kep10.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Kep10.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Kep13.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Kep13.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Kep2.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Kep2.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={5} md={5} lg={5}>
                    <Card onClick={() => handleClick('Kep14.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Kep14.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Kep15.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Kep15.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Kep16.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Kep16.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Kep17.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Kep17.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={5} md={5} lg={4}>
                    <Card onClick={() => handleClick('Kep18.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                    <img className='img-fluid' src='Kep18.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row style={{textAlign: 'center', justifyContent: 'center', marginTop: '10vw'}}>
                <Col xs={3} md={2} lg={3}>
                    <Card onClick={() => handleClick('Fold1.jpg')} className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold1.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={2} lg={3}>
                    <Card onClick={() => handleClick('Fold4.jpg')} className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold4.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={2} lg={3}>
                    <Card onClick={() => handleClick('Fold2.jpg')} className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold2.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={2} lg={3}>
                    <Card onClick={() => handleClick('Fold3.jpg')} className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold3.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>      
            </Row>
        </Container>
        
        <Container fluid style={{marginTop: '-3vw', position: 'relative', zIndex: '1'}}>
            <Row>
                <Col xs={2} md={3} lg={2}>
                    <Card onClick={() => handleClick('Fold6.jpg')} className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold6.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Fold7.jpg')} className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold7.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={2} md={2} lg={2}>
                    <Card onClick={() => handleClick('Fold8.jpg')} className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold8.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={2} md={2} lg={2}>
                    <Card onClick={() => handleClick('Kert1.jpg')} className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kert1.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={2} md={2} lg={3}>
                    <Card onClick={() => handleClick('Kert2.jpg')} className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kert2.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
            </Row>
        </Container>
        <Container fluid style={{marginTop: '-3vw'}}>
            <Row style={{textAlign: 'center', justifyContent: 'center'}}>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Kert4.jpg')} className='cardokSzinAtmenet' style={{ boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kert4.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Kert6.jpg')} className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kert6.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Kert8.jpg')} className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kert8.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Kertx.jpg')} className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kertx.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
            </Row>
        </Container>
        <Container fluid style={{marginTop: '5vw'}}>
            <Row style={{textAlign: 'center', justifyContent: 'center'}}>
                <Col xs={2} md={3} lg={3}>
                    <Card onClick={() => handleClick('Kert7.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kert7.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Kert11.jpg')} className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kert11.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={4} md={3} lg={3}>
                    <Card onClick={() => handleClick('Kert15.jpg')} className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kert15.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Kert16.jpg')} className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kert16.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
            </Row>
        </Container>

        <Container fluid style={{marginTop: '5vw'}}>
            <Row style={{textAlign: 'center', justifyContent: 'center'}}>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Ontozo2.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ontozo2.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Ontozo3.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1',boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ontozo3.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Ontozo4.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1',boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ontozo4.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Ontozo6.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1',boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ontozo6.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={4} md={3} lg={2}>
                    <Card onClick={() => handleClick('Ontozo8.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1',boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ontozo8.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Regen2.jpg')} className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Regen2.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={4} md={3} lg={2}>
                    <Card onClick={() => handleClick('Regen3.jpg')} className='cardokSzinAtmenet' style={{ boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Regen3.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={4} md={3} lg={4}>
                    <Card onClick={() => handleClick('Regen4.jpg')} className='cardokSzinAtmenet' style={{ boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Regen4.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={4} md={3} lg={3}>
                    <Card onClick={() => handleClick('Regen5.jpg')} className='cardokSzinAtmenet' style={{ boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Regen5.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Ontozo9.jpg')} className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ontozo10.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={4} md={3} lg={2}>
                    <Card onClick={() => handleClick('Szakertelem.jpg')} className='cardokSzinAtmenet' style={{ boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Szakertelem.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={4} md={3} lg={3}>
                    <Card onClick={() => handleClick('Regen.jpg')} className='cardokSzinAtmenet' style={{ boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Regen.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Utana.jpg')} className='cardokSzinAtmenet' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Utana.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Utana2.jpg')} className='cardokSzinAtmenet' style={{ boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Utana2.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={4} md={3} lg={3}>
                    <Card onClick={() => handleClick('Kert19.jpg')} className='cardokSzinAtmenet' style={{ boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kert19.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
            </Row>
        </Container>

        <Container fluid style={{marginTop: '5vw'}}>
            <Row style={{textAlign: 'center', justifyContent: 'center'}}>
                <Col xs={4} md={4} lg={4}>
                    <Card onClick={() => handleClick('Agyas1.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Agyas1.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Bemutatkozó.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Bemutatkozó.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Dekor.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Dekor.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Fold5.jpg')} className='cardokSzinAtmenet' style={{position: 'relative', zIndex: '2', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold5.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={4} md={3} lg={4}>
                    <Card onClick={() => handleClick('Fold9.jpg')} className='cardokSzinAtmenet' style={{position: 'relative', zIndex: '2', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold9.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={4} md={3} lg={4}>
                    <Card onClick={() => handleClick('Fold10.jpg')} className='cardokSzinAtmenet' style={{position: 'relative', zIndex: '2', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold10.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Fold12.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold12.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Fold13.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold13.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Fold14.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold14.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
            </Row>
        </Container>

        <Container fluid style={{marginTop: '10vw'}}>
            <Row style={{textAlign: 'center', justifyContent: 'center'}}>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Fold15.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold15.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Fold16.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Fold16.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Ipari5.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ipari5.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Ipari7.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ipari7.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={4} md={4} lg={3}>
                    <Card onClick={() => handleClick('Ipari8.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ipari8.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={4} md={4} lg={3}>
                    <Card onClick={() => handleClick('Ipari9.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ipari9.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={4} md={4} lg={3}>
                    <Card onClick={() => handleClick('Ipari10.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ipari10.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={4} md={4} lg={3}>
                    <Card onClick={() => handleClick('Ipari11.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ipari11.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={4}>
                    <Card onClick={() => handleClick('Ipari12.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ipari12.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={4}>
                    <Card onClick={() => handleClick('Ipari13.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ipari13.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Ipari14.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ipari14.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={4} md={4} lg={3}>
                    <Card onClick={() => handleClick('Ipari15.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ipari15.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={4} md={4} lg={3}>
                    <Card onClick={() => handleClick('Ipari16.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ipari16.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <Card onClick={() => handleClick('Ipari17.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ipari17.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={4} md={4} lg={4}>
                    <Card onClick={() => handleClick('Ipari18.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ipari18.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Ipari19.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Ipari19.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={3} md={3} lg={2}>
                    <Card onClick={() => handleClick('Ipari19.jpg')} className='cardokSzinAtmenet' style={{zIndex: '1', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                    <img className='img-fluid' src='Kep3.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                    </Card>
                </Col>
            </Row>
        </Container>

        <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Kép Megjelenítése</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedImage} alt="Kiválasztott" style={{ width: '100%', height: 'auto' }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Bezárás
          </Button>
        </Modal.Footer>
      </Modal>

      <footer fluid className="footer" style={{ color: 'bisque', padding: 0, backgroundColor: '#333333', marginTop: '20vw' }}>
    <Row style={{ display: 'flex', alignItems: 'stretch' }}>
        <Col xs={12} md={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src='Logo.png' style={{ width: '100%', maxWidth: '200px', marginTop: '1rem' }} alt="Logo"/>
        </Col>
        <Col xs={12} md={4} style={{ paddingRight: 0, display: 'flex' }}>
            <Card style={{ backgroundColor: 'GrayText', border: '3px solid green', flex: 1 }}>
                <Card.Body>
                    <div style={{ marginBottom: '1rem' }}>
                        <Nav.Link style={{ color: 'bisque', textAlign: 'left' }}>
                            <Link to="/Protection" className='fontSize' style={{ color: 'inherit', textDecoration: 'underline'}}><b>Adatvédelem</b></Link>
                        </Nav.Link>
                        <Nav.Link style={{ color: 'bisque', textAlign: 'left' }}>
                            <Link to="/Contract" className='fontSize' style={{ color: 'inherit', textDecoration: 'underline'}}><b>ÁSZF</b></Link>
                        </Nav.Link>
                    </div>
                    <div style={{ marginRight: '5vw' }}>
                        <Card.Title style={{ marginBottom: 0 }} className='fontSize'>
                            Elérhetőség:
                        </Card.Title>
                        <Card.Text className='fontSize'>
                            +36/70 530 3055
                            <br />
                            +36/70 635 7555
                        </Card.Text>
                        <Card.Title style={{ marginBottom: 0 }} className='fontSize'>
                            Email:
                        </Card.Title>
                        <Card.Text className='fontSize'>
                            thurzokertkft@gmail.com
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Col>
        <Col xs={12} md={4} style={{ paddingLeft: 0, display: 'flex' }}>
            <Card style={{ backgroundColor: 'GrayText', border: '3px solid green', flex: 1 }}>
                <Card.Body>
                    <div style={{ marginRight: '5vw' }}>
                        <Card.Title className='fontSize'>
                            <b style={{ textDecoration: 'underline' }}>Impresszum</b>
                        </Card.Title>
                        <Card.Text className='fontSize' style={{ paddingBottom: '0.75vw' }}>
                            Cégnév: Thurzo Kert Kft.
                            <br />
                            Székhely: 3531 Miskolc Füzes utca 36.
                            <br />
                            Cégjegyzékszám: 05 09 018959
                            <br />
                            Adószám: 11722591-2-05
                            <br />
                            Ügyvezető igazgató: Thurzó Róbert
                            <br />
                            Telefonszám: +36/70 530 3055
                            <br />
                            E-mail cím: thurzokertkft@gmail.com                                    
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

