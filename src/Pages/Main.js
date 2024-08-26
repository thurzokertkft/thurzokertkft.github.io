import React, { useState, useEffect } from 'react';
import './Main.css';
import { Navbar, Container, Nav, NavbarToggle, NavbarCollapse, Carousel, Col, Card, CardImg, CardHeader, Row, CardBody, CardText, CarouselItem, CardTitle } from 'react-bootstrap';
import Footer from 'rc-footer';
import { Link } from 'react-router-dom';
import { GiHighGrass, GiSpade, GiPlantRoots  } from "react-icons/gi";
import { BsDropletFill } from "react-icons/bs";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaScrewdriverWrench } from "react-icons/fa6";



function Main() {
  
  return (
    <div>
      <Navbar bg="dark" expand='lg'>
        <Container fluid>
        <img style={{width: '150px'}} className='img-fluid' src='Logo.png'/>
          <Navbar.Toggle className="ms-auto"/>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link style={{ marginRight: '2em', color: 'bisque', fontSize: '110%' }}>
                <Link style={{ color: 'inherit', textDecoration: 'none' }}>Főoldal</Link>
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
              <Nav.Link style={{ marginRight: '20em', color: 'bisque'}}>
                <Link to="/Support" style={{ color: 'inherit', textDecoration: 'none' }}>Kapcsolat</Link>
              </Nav.Link>          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <img src='Fokep.jpg' className='img-fluid' style={{position: 'absolute', zIndex: -1}}/>

          <div className='text-center'>
            <img className='img-fluid box' src='Logo.png' style={{width: '50vw'}}/>
          </div>

        <Container fluid>
            <Col xs={12} md={12} lg={12} className='d-flex justify-content-center'>
              <Card className='justify-content-center blurred obscure'>
              <div>
                <i className='shadow logoText'>"Teremtsünk együtt egy kertet, ahol a család örömmel gyűlik össze!"</i>
              </div>
              </Card>
            </Col>   
        </Container>
      </div>

      <Container>
        <Row style={{ marginTop: '10vw'}}>
          <Col xs={3} md={3} lg={3}>
            <Link to="/Services#specific-section">
              <Card className='szinReklamAtmenet card-hover' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                <img className='img-fluid reklam' src='OntozoReklam.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                <img className='img-fluid reklam2' src='OntozoReklam2.jpg' style={{ width: '100%', objectFit: 'cover' }} />
              </Card>
            </Link>
          </Col>

          <Col xs={3} md={3} lg={3}>
          <Link to="/Services#specific-section">
              <Card className='szinReklamAtmenet2 card-hover' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column' }}>
                <img className='img-fluid reklam3' src='FuReklam.png' style={{ width: '100%', height: '50%', objectFit: 'cover' }} />
                <img className='img-fluid reklam4' src='FuReklam2.jpg' style={{ width: '100%', height: '50%', objectFit: 'cover' }} />
              </Card>
            </Link>
          </Col>

          <Col xs={3} md={3} lg={3}>
            <Link to="/Services#specific-section">
              <Card className='szinReklamAtmenet2 card-hover' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column' }}>
                <img className='img-fluid' src='ToReklam.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Card>
            </Link>
          </Col>

          <Col xs={3} md={3} lg={3}>
            <Link to="/Services#specific-section">
              <Card className='szinReklamAtmenet2 card-hover' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column' }}>
                <img className='img-fluid' src='KertReklam.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row style={{ marginTop: '3vw'}}>
        <Col xs={3} md={3} lg={3} className='text-center fontSizeCard'>
          <p style={{
             
            fontWeight: 'normal', 
            color: 'bisque', 
            textShadow: '1px 1px 2px rgba(0, 0, 0, 1)', 
            letterSpacing: '0.2vw', 
            fontFamily: '"Times New Roman", "Garamond", "Georgia", serif',
            fontStyle: 'italic'
          }}>
            Öntözéstechnika
          </p>
        </Col>

          <Col xs={3} md={3} lg={3} className='text-center fontSizeCard'>
            <p style={{
            
            fontWeight: 'normal', 
            color: 'bisque', 
            textShadow: '1px 1px 2px rgba(0, 0, 0, 1)', 
            letterSpacing: '0.2vw', 
            fontFamily: '"Times New Roman", "Garamond", "Georgia", serif',
            fontStyle: 'italic'
          }}>Gyepszőnyeg</p>
          </Col>

          <Col xs={3} md={3} lg={3} className='text-center fontSizeCard'>
            <p style={{
            
            fontWeight: 'normal', 
            color: 'bisque', 
            textShadow: '1px 1px 2px rgba(0, 0, 0, 1)', 
            letterSpacing: '0.2vw', 
            fontFamily: '"Times New Roman", "Garamond", "Georgia", serif',
            fontStyle: 'italic'
          }}>Kerti tó</p>
          </Col>

          <Col xs={3} md={3} lg={3} className='text-center fontSizeCard'>
            <p style={{
            
            fontWeight: 'normal', 
            color: 'bisque', 
            textShadow: '1px 1px 2px rgba(0, 0, 0, 1)', 
            letterSpacing: '0.2vw', 
            fontFamily: '"Times New Roman", "Garamond", "Georgia", serif',
            fontStyle: 'italic'
          }}>Díszkert</p>
          </Col>
        </Row>
      </Container>
      

          <Container fluid style={{ marginTop: '10vw', }}>
            <Row className="justify-content-center">
              <Col xs={12} md={10} lg={10}>
                <Card className="position-relative">
                  <img className="img-fluid" src="Fokep2.png" alt="Kép" />
                    <Card.Title className=' toUs sign littleAnimation'>Had<span className='fast-flicker' style={{marginRight: '1vw'}}>d </span> mutatko <span className='flicker'>zz</span>unk be...</Card.Title>           
                      <Nav.Link style={{left: '50%', transform: 'translateX(-65%)', top: '40%',  marginRight: '2em', color: 'bisque', position: 'absolute'}}>
                        <Link className='toUs glow-on-hover' to="/Us" style={{ textDecoration: 'none', marginLeft: '25px'}}>"Kattintson ide"</Link>
                      </Nav.Link>                           
                </Card>
              </Col>
            </Row>
          </Container>

        <div>
          <Row style={{marginTop: '2vw'}}>
            <Col xs={10} md={6} lg={6} className='mx-auto'>
              <Card style={{margin: '3vw',boxShadow: '-20px 10px 30px rgba(0, 0, 0, 1)',  background: 'linear-gradient(to right, #a67c52, #6d4f28)'}}>
              <Card.Body className="d-flex flex-column flex-md-row align-items-center" style={{ padding: '20px' }}>
                <GiSpade style={{borderRadius: '10%', width: '100px', height: '100px', color: 'burlywood', backgroundColor: 'grey', boxShadow: '4px 4px 8px rgba(0,0,0,1)'}} />       
                  <Card.Text style={{ fontSize: '20px', margin: '20px', flex: 1, textAlign: 'center' }}>
                    "Mi gondoskodunk róla, hogy a föld előkészítése a legjobb eredményt hozza, és Önnek csak a kert élvezetére kell koncentrálnia"
                  </Card.Text>
                </Card.Body>            
              </Card>
            </Col>
            <Col xs={10} md={6} lg={6} className='mx-auto'>
              <Card style={{margin: '3vw',boxShadow: '-20px 10px 30px rgba(0, 0, 0, 1)', background: 'linear-gradient(to right, #a2c2e0, #6e9bc7)'}}>
              <Card.Body className="d-flex flex-column flex-md-row align-items-center" style={{ padding: '20px' }}>
                <BsDropletFill style={{borderRadius: '10%', width: '100px', height: '100px', color: 'lightblue', backgroundColor: 'grey', boxShadow: '4px 4px 8px rgba(0,0,0,1)'}} />       
                  <Card.Text style={{ fontSize: '20px', margin: '20px', flex: 1, textAlign: 'center' }}>
                    "Precíz tervezéssel és kivitelezéssel biztosítjuk, hogy növényei mindig a megfelelő mennyiségű vizet kapják. Automata öntözőrendszereinkkel időt és energiát takaríthat meg, miközben kertje egészségesen virágzik."
                  </Card.Text>
                </Card.Body>            
              </Card>
            </Col>
          </Row>

          <Row style={{marginTop: '2vw'}}>
            <Col xs={10} md={6} lg={6} className='mx-auto'>
              <Card style={{margin: '3vw',boxShadow: '-20px 10px 30px rgba(0, 0, 0, 1)', background: 'linear-gradient(to left, #a8d5ba, #6c9a5b)',}}>
              <Card.Body className="d-flex flex-column flex-md-row align-items-center" style={{ padding: '20px' }}>
                <GiHighGrass style={{borderRadius: '10%', width: '100px', height: '100px', color: 'lightgreen', backgroundColor: 'grey', boxShadow: '4px 4px 8px rgba(0,0,0,1)', padding: 0}} />      
                  <Card.Text style={{ fontSize: '20px', margin: '20px', flex: 1, textAlign: 'center' }}> 
                  "Álmai gyepét könnyedén megvalósíthatja velünk! Professzionális füvesítési szolgáltatásaink garantálják a dús, egészséges fűt, amely gyorsan zöldellni fog. Bízza ránk a munkát, és élvezze a zöldellő, gyönyörű kertet egész évben"                  
                  </Card.Text>  
                </Card.Body>            
              </Card>
            </Col>
            <Col xs={10} md={6} lg={6} className='mx-auto'>
              <Card style={{margin: '3vw',boxShadow: '-20px 10px 30px rgba(0, 0, 0, 1)', background: 'linear-gradient(to bottom, #3b5b40, #8c6d40)'}}>
              <Card.Body className="d-flex flex-column flex-md-row align-items-center" style={{ padding: '20px' }}>
                <GiPlantRoots style={{borderRadius: '10%', width: '100px', height: '100px', background: 'linear-gradient(to top, #8b4513, #228b22)', backgroundColor: 'grey', boxShadow: '4px 4px 8px rgba(0,0,0,1)'}} />      
                  <Card.Text style={{ fontSize: '20px', margin: '20px', flex: 1, textAlign: 'center' }}> 
                  "Emelje kertje szépségét dísznövényekkel! Szakszerű ültetési szolgáltatásainkkal segítünk kiválasztani és elhelyezni a tökéletes dísznövényeket, hogy kertje egyedi és lenyűgöző legyen. Élvezze a színes, virágzó oázist"                  
                  </Card.Text>  
                </Card.Body>            
              </Card>
            </Col>
          </Row>

          <Row style={{marginTop: '2vw'}}>
          <Col xs={10} md={6} lg={6} className='mx-auto'>
              <Card style={{margin: '3vw',boxShadow: '-20px 10px 30px rgba(0, 0, 0, 1)', background: 'linear-gradient(to top, #d3d3d3, #a9a9a9)'}}>
              <Card.Body className="d-flex flex-column flex-md-row align-items-center" style={{ padding: '20px' }}>
                <FaScrewdriverWrench style={{borderRadius: '10%', width: '100px', height: '100px', color: 'whitesmoke', backgroundColor: 'grey', boxShadow: '4px 4px 8px rgba(0,0,0,1)'}} />      
                  <Card.Text style={{ fontSize: '20px', margin: '20px', flex: 1, textAlign: 'center' }}> 
                  "Frissítse fel kertjét teljes körű karbantartási szolgáltatásainkkal! Törődünk a fűnyírással, a növények metszésével és a talaj ápolásával, hogy kertje mindig gyönyörű és egészséges legyen"                  
                  </Card.Text>  
                </Card.Body>            
              </Card>
            </Col>
            <Col xs={10} md={6} lg={6} className='mx-auto'>
              <Card style={{margin: '3vw',boxShadow: '-20px 10px 30px rgba(0, 0, 0, 1)', background: 'linear-gradient(to right, #f7b733, #fc4a1a)'}}>
              <Card.Body className="d-flex flex-column flex-md-row align-items-center" style={{ padding: '20px' }}>
                <LiaIndustrySolid style={{borderRadius: '10%', width: '100px', height: '100px', color: '#c72c48', backgroundColor: 'grey', boxShadow: '4px 4px 8px rgba(0,0,0,1)'}} />      
                  <Card.Text style={{ fontSize: '20px', margin: '20px', flex: 1, textAlign: 'center' }}> 
                    Szolgáltatásaink magukban foglalják az ipari parkok zöldfelület nyírását, kaszálását, karbantartását és permetezését is. Teljes körű zöldfelület-kezelést nyújtunk"                  
                  </Card.Text>  
                </Card.Body>            
              </Card>
            </Col>
          </Row>
          </div>


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

export default Main;