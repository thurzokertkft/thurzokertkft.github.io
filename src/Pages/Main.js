import React, { useState, useEffect, Component } from 'react';
import './Main.css';
import { Navbar, Container, Nav, NavbarToggle, NavbarCollapse, Button, Carousel, Col, Card, CardImg, CardHeader, Row, CardBody, CardText, CarouselItem, CardTitle } from 'react-bootstrap';
import Footer from 'rc-footer';
import { Link } from 'react-router-dom';
import { GiHighGrass, GiSpade, GiPlantRoots  } from "react-icons/gi";
import { BsDropletFill } from "react-icons/bs";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaTimes } from 'react-icons/fa'; 
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import Modal from 'react-bootstrap/Modal';


function Main() {
  const [showModal, setShowModal] = useState();

  useEffect(() => {
    // Ellenőrizzük, hogy az oldal frissült-e
    const modalShow = localStorage.getItem('showModal');
    // Ha nincs 'isPaneOpen' bejegyzés a localStorage-ban, vagy az érték nem 'false', nyissuk meg a pane-t
    if (modalShow === null || modalShow !== 'false') {
      setShowModal(true);
      localStorage.setItem('showModal', 'false'); // Állítsuk be 'false'-ra, hogy ne nyíljon meg újra
    }

  }, []); // Az üres dependency array miatt ez csak egyszer fut le, amikor a komponens mountol

  useEffect(() => {
    // Töröljük a localStorage bejegyzést az oldal frissítésekor
    const handleBeforeUnload = () => {
      localStorage.removeItem('showModal');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []); // Az üres dependency array miatt ez csak egyszer fut le, amikor a komponens mountol

  const handleRequestClose = () => {
  localStorage.setItem('showModal', 'false');
  setShowModal(false);
};


  
  
  return (
    <div>
      <div >
      <Modal className='modalImg' size='lg' show={showModal} onHide={handleRequestClose} centered>
      <Modal.Dialog >
        <Modal.Header style={{textAlign: 'center', justifyContent: 'center', backgroundColor: 'darkOrange'}}>
          <Modal.Title>Készítsd fel a kerted az őszi szezonra velünk!</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ position: 'relative' }}>
        <Col xs={12} md={12} lg={12}>
          <Card style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src='Autumn5.jpg'
              alt='Autumn'
              style={{ width: '100%', height: 'auto' }} // Biztosítja, hogy a kép kitöltse a Card szélességét
            />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              textAlign: 'center',
              zIndex: '2',
              padding: '10px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              width: '90%', // Gondoskodik arról, hogy a szöveg ne csússzon ki
              boxSizing: 'border-box' // A padding és a border a szélességen belül legyen
            }}>
              <p className='modalFontSize'>
                Az őszi hónapok beköszöntével a természet is átöltözik, és kertünk gondoskodásra vágyik, hogy tavasszal újra élettel teli lehessen. Szolgáltatásainkkal segítünk, hogy kerted a legjobb formáját hozza.
              </p>         
            </div>
          </Card>
        </Col>
        <Col xs={12} md={12} lg={12}>
          <Card style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src='Autumn6.jpg'
              alt='Autumn'
              style={{ width: '100%', height: 'auto' }} // Biztosítja, hogy a kép kitöltse a Card szélességét
            />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              textAlign: 'center',
              zIndex: '2',
              padding: '10px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              width: '90%', // Gondoskodik arról, hogy a szöveg ne csússzon ki
              boxSizing: 'border-box' // A padding és a border a szélességen belül legyen
            }}>
              <ul className='modalFontSize'>
                <li>Gyepszellőztetés és felültrágyázás</li>
                <li>Növények visszavágása és felkészítése a télre</li>
                <li>Évelő növények felkészítése</li>
                <li>Gyümölcsfák és bokrok metszése</li>
                <li>Levélgyűjtés és komposztálás</li>
              </ul>         
            </div>
          </Card>
        </Col>
      </Modal.Body>

        <Modal.Footer style={{backgroundColor: 'darkorange'}}>
        
        <Button variant="dark" onClick={handleRequestClose}>
              Bezár
            </Button>
            
        </Modal.Footer>
      </Modal.Dialog>   
      </Modal>
      </div>      
           
        <Navbar bg="dark" expand='lg'>
        <Container fluid>
          <img style={{width: '150px'}} className='img-fluid' src='Logo.png'/>
            <Navbar.Toggle className="ms-auto"/>
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <Nav.Link style={{ marginRight: '2em', color: 'bisque'}}>
                  <Link to="/" style={{ color: 'inherit', textDecoration: 'none', fontSize: '110%' }}>Főoldal</Link>
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
                  <Link to="/Works" style={{ color: 'inherit', textDecoration: 'none' }}>Munkáink</Link>
                </Nav.Link>  
                <Nav.Link style={{ marginRight: '20em', color: 'bisque'}}>
                  <Link to="/Support" style={{ color: 'inherit', textDecoration: 'none' }}>Kapcsolat</Link>
                </Nav.Link>          
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      

      <Container fluid style={{margin: 0, padding: 0}}>
      
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
      
      </Container>

      <Container>
        <Row style={{ marginTop: '10vw', textAlign: 'center', justifyContent: 'center'}}>
          <Col xs={3} md={3} lg={3}>
            <Link to="/Services#specific-section">
              <Card className='szinReklamAtmenet card-hover' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
                <img className='img-fluid reklam' src='OntozoReklam.jpg' style={{ flex: 1, objectFit: 'cover' }} />
                <img className='img-fluid reklam2' src='ontozoReklam2.jpg' style={{ width: '100%', objectFit: 'cover' }} />
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
                <img className='img-fluid' src='KertReklam.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Card>
            </Link>
          </Col>

          <Col xs={3} md={3} lg={3}>
            <Link to="/Services#specific-section">
              <Card className='szinReklamAtmenet2 card-hover' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column' }}>
                <img className='img-fluid' src='Napelempark.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              
              </Card>
            </Link>
          </Col>
         {/* <Col xs={2} md={2} lg={2}>
            <Link to="/Services#specific-section">
              <Card className='szinReklamAtmenet2 card-hover' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column' }}>
                <img className='img-fluid' src='Legelo3.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Card>
            </Link>
          </Col>*/}
        </Row>
      </Container>

      

      <Container>
        <Row style={{ marginTop: '3vw',textAlign: 'center', justifyContent: 'center'}}>
        <Col xs={3} md={3} lg={3} className='text-center '>
          <p className='fontSizeCard' style={{
             
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

          <Col xs={3} md={3} lg={3} className='text-center '>
            <p className='fontSizeCard' style={{
            
            fontWeight: 'normal', 
            color: 'bisque', 
            textShadow: '1px 1px 2px rgba(0, 0, 0, 1)', 
            letterSpacing: '0.2vw', 
            fontFamily: '"Times New Roman", "Garamond", "Georgia", serif',
            fontStyle: 'italic'
          }}>Gyepszőnyeg</p>
          </Col>

          <Col xs={3} md={3} lg={3} className='text-center'>
            <p  className='fontSizeCard' style={{
            
            fontWeight: 'normal', 
            color: 'bisque', 
            textShadow: '1px 1px 2px rgba(0, 0, 0, 1)', 
            letterSpacing: '0.2vw', 
            fontFamily: '"Times New Roman", "Garamond", "Georgia", serif',
            fontStyle: 'italic'
          }}>Díszkert</p>
          </Col>
          
          <Col  xs={3} md={3} lg={3} className='text-center '>
              <p className='fontSizeCard' style={{
              
              fontWeight: 'normal', 
              color: 'bisque', 
              textShadow: '1px 1px 2px rgba(0, 0, 0, 1)', 
              letterSpacing: '0.2vw', 
              fontFamily: '"Times New Roman", "Garamond", "Georgia", serif',
              fontStyle: 'italic'
            }}>Ipari szolgáltatásaink</p>
            
          </Col>

        
        </Row>
      </Container>

      <Container>
        <Row style={{ marginTop: '2vw', textAlign: 'center', justifyContent: 'center'}}>
        <Col xs={3} md={3} lg={3} >
            <Link to="/Services#specific-section">
              <Card className='szinReklamAtmenet2 card-hover' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column' }}>
                <img className='img-fluid' src='Legelo3.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Card>
            </Link>
          </Col>
          <Col xs={3} md={3} lg={3} >
            <Link to="/Services#specific-section">
              <Card className='szinReklamAtmenet2 card-hover' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column' }}>
                <img className='img-fluid' src='Madarodu4.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Card>
            </Link>
          </Col>
          <Col xs={3} md={3} lg={3} >
            <Link to="/Services#specific-section">
              <Card className='szinReklamAtmenet2 card-hover' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column' }}>
                <img className='img-fluid' src='Legelo5.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Card>
            </Link>
          </Col>
          
        </Row>
      </Container>

      

      <Container>
        <Row style={{ marginTop: '3vw',textAlign: 'center', justifyContent: 'center'}}>
        <Col xs={3} md={3} lg={12} className='text-center '>
          <p className='fontSizeCard' style={{
             
            fontWeight: 'normal', 
            color: 'bisque', 
            textShadow: '1px 1px 2px rgba(0, 0, 0, 1)', 
            letterSpacing: '0.2vw', 
            fontFamily: '"Times New Roman", "Garamond", "Georgia", serif',
            fontStyle: 'italic'
          }}>
            Biodiverzitás
          </p>
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
                    "Mi gondoskodunk róla, hogy a föld előkészítése a legjobb eredményt hozza, és önnek csak a kert élvezetére kell koncentrálnia"
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
                  "Álmai gyepét könnyedén megvalósíthatja velünk! Professzionális füvesítési szolgáltatásaink garantálják a dús, egészséges gyepet, amely gyorsan zöldellni fog. Bízza ránk a munkát, és élvezze a zöldellő, gyönyörű kertet egész évben"                  
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
                                    Ügyvezető: Thurzó Róbert
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

export default Main;