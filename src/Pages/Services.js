import React, { useState, useEffect, Component } from 'react';
import './Services.css';
import { Navbar, Container, Form, FormGroup, FormLabel, FormControl, Button, Modal, Nav, NavbarToggle, NavbarCollapse, Carousel, Col, Card, CardImg, CardHeader, Row, CardBody, CardText, CarouselItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RiTeamFill } from "react-icons/ri";
import { FaGears } from "react-icons/fa6";
import { MdMoreTime } from "react-icons/md";
import { GiPlantWatering } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { TfiRulerPencil } from "react-icons/tfi";
import { GiGroupedDrops } from "react-icons/gi";
import { TbGardenCart } from "react-icons/tb";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useForm, ValidationError } from '@formspree/react';

function Services() {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // 500ms késleltetés, de ez szükség szerint állítható
    }
  }, []);

  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  const [isChecked, setIsChecked] = useState(false);
  const [state2, handleSubmit] = useForm("mzzpypad");
  const [showModal, setShowModal] = useState(false);

  // Show modal when form submission is successful
  useEffect(() => {
    if (state2.succeeded) {
      setShowModal(true);
    }
  }, [state2.succeeded]);
  
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
                <Nav.Link style={{ marginRight: '2em', color: 'bisque'}}>
                  <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Főoldal</Link>
                </Nav.Link>
                <Nav.Link style={{ marginRight: '2em', color: 'bisque' }}>
                  <Link to="/Services" style={{ color: 'inherit', textDecoration: 'none', fontSize: '110%' }}>Szolgáltatásaink</Link>
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

    <Container  className='d-flex justify-content-center servicesBorder backgroundPaper' style={{marginTop:'5vw', width: '92%', boxShadow: '15px 10px 30px rgba(0, 0, 0, 1)', paddingBottom: 30}}>   
  
        <Col xs={11} md={8} lg={8}>
              <Col xs={12} md={12} lg={12}>
                  <Card className='szinAtmenet' style={{border: 'none'}}>
                    <Row>
                      <Col xs={6} md={6} lg={6} className='d-flex align-items-center justify-content-center'>
                        <Card.Text style={{ color: 'white'}} className='text-center minFontSize'>
                          Kertépítészeti cégünk több éves tapasztalattal rendelkezik a zöldterületek tervezése és kivitelezése terén.
                        </Card.Text>
                      </Col> 
                      <Col xs={6} md={6} lg={6}>
                        <img className='img-fluid szolgRight' src='Szolg.png'/>
                      </Col> 
                    </Row> 
                  </Card>         
              </Col>  

          <Row   style={{marginTop: '0vw', textAlign: 'center', justifyContent: 'center'}}>
            <Col  style={{marginTop: '2vw', textAlign: 'center'}} xs={2} md={3} lg={3}>
              <RiTeamFill className='iconsSize' style={{ color: 'lightcyan'}}/>
            </Col>
            <Col  style={{marginTop: '2vw', textAlign: 'center'}} xs={2} md={2} lg={2}>
              <FaGears className='iconsSize' style={{ color: 'lightcyan'}}/>
            </Col>
            <Col style={{marginTop: '2vw', textAlign: 'center'}} xs={2} md={2} lg={2}>
              <MdMoreTime className='iconsSize' style={{color: 'lightcyan'}}/>
            </Col>
            <Col style={{marginTop: '2vw', textAlign: 'center'}} xs={2} md={2} lg={2}>
              <GiPlantWatering className='iconsSize' style={{ color: 'lightcyan'}}/>
            </Col>
            <Col style={{marginTop: '2vw', textAlign: 'center'}} xs={3} md={3} lg={3}>
              <FaHandsHelping className='iconsSize' style={{ color: 'lightcyan'}}/>
            </Col>
          </Row> 
          <Row  style={{marginTop: '-1vw', textAlign: 'center', justifyContent: 'center'}}>
            <Col  style={{marginTop: '2vw', textAlign: 'center'}} xs={2} md={3} lg={3}>
              <p className='iconsFontSize shadow' style={{ color: 'lightcyan'}}> 60+ ügyfél</p>
            </Col>
            <Col style={{marginTop: '2vw', textAlign: 'center'}} xs={2} md={2} lg={2}>
              <p className='iconsFontSize shadow' style={{ color: 'lightcyan'}}>Precizitás</p>
            </Col>
            <Col style={{marginTop: '2vw', textAlign: 'center'}} xs={2} md={2} lg={2}>
              <p className='iconsFontSize shadow' style={{ color: 'lightcyan'}}>Minőség</p>
            </Col>
            <Col style={{marginTop: '2vw', textAlign: 'center'}} xs={2} md={2} lg={2}>
              <p className='iconsFontSize shadow' style={{ color: 'lightcyan'}}>Fentartható környezet</p>
            </Col>
            <Col xs={3} md={3} lg={3} style={{marginTop: '2vw', textAlign: 'center'}} >
              <p className='iconsFontSize shadow' style={{ color: 'lightcyan'}}>Megbízhatóság</p>
            </Col>
          </Row> 

         
              <Col xs={12} md={12} lg={12}>
                  <Card className='szinAtmenet2' style={{border: 'none'}}>
                    <Row>
                      <Col xs={6} md={6} lg={6}>
                        <img className='img-fluid szolgLeft' src='Szakertelem.jpg'/>
                      </Col> 
                      <Col xs={6} md={6} lg={6} className='d-flex align-items-center justify-content-center'>
                        <Card.Text style={{color: 'white'}} className='text-center minFontSize'>
                         <i><b> Szakértelem:</b></i> Csapatunk magasan képzett és tapasztalt szakemberekből áll, akik naprakészek a legújabb kertépítési technikák és trendek terén.
                        </Card.Text>
                      </Col> 
                    </Row> 
                  </Card>
              </Col>

          
              <Col xs={12} md={12} lg={12}>
                  <Card className='szinAtmenet2' style={{border: 'none'}}>
                    <Row>
                      <Col xs={6} md={6} lg={6} className='d-flex align-items-center justify-content-center'>
                        <Card.Text style={{ color: 'white'}} className='text-center minFontSize'>
                        <i><b>Tervezés:</b></i>  Részletes és kreatív tervezési folyamatunk biztosítja, hogy minden projektünk egyedi és az ügyfelek igényeihez teljes mértékben igazodó legyen.                        
                        </Card.Text>
                      </Col> 
                      <Col xs={6} md={6} lg={6}>
                        <img className='img-fluid szolgRight' src='Terv.png'/>
                      </Col> 
                    </Row> 
                  </Card>
              </Col>
           
              <Col xs={12} md={12} lg={12}>
                  <Card className='szinAtmenet2' style={{border: 'none'}}>
                    <Row>
                      <Col xs={6} md={6} lg={6}>
                        <img className='img-fluid szolgLeft' src='Kivitelezes.png'/>
                      </Col> 
                      <Col xs={6} md={6} lg={6} className='d-flex align-items-center justify-content-center'>
                        <Card.Text style={{ color: 'white'}} className='text-center minFontSize'>
                        <i><b>Kivitelezés:</b></i> Elejétől a végéig átfogó szolgáltatást nyújtunk, amely magában foglalja a tereprendezést, növényültetést, öntözőrendszerek telepítését és kerti utak építését is.                         
                        </Card.Text>
                      </Col> 
                    </Row> 
                  </Card>
              </Col>

              <Col xs={12} md={12} lg={12}>
                  <Card className='szinAtmenet2' style={{border: 'none'}}>
                    <Row>
                      <Col xs={6} md={6} lg={6} className='d-flex align-items-center justify-content-center'>
                        <Card.Text style={{ color: 'white'}} className='text-center minFontSize'>
                        <i><b>Karbantartás:</b></i> Karbantartási szolgáltatásainkat is igénybe vehetik ügyfeleink. Rendszeres gondozás, metszés, trágyázás és öntözőrendszer karbantartás tartozik szolgáltatásaink közé.                        
                        </Card.Text>
                        </Col> 
                      <Col xs={6} md={6} lg={6}>
                        <img className='img-fluid szolgRight' src='Karbantartas.png'/>                 
                      </Col> 
                    </Row> 
                  </Card>
              </Col>
 
              <Col xs={12} md={12} lg={12}>
                  <Card className='szinAtmenet2' style={{border: 'none'}}>
                    <Row>
                      <Col xs={6} md={6} lg={6}>
                        <img className='img-fluid szolgLeft2' src='Ugyfel.png'/>                 
                      </Col> 
                      <Col xs={6} md={6} lg={6} className='d-flex align-items-center justify-content-center'>
                        <Card.Text style={{ color: 'white'}} className='text-center minFontSize'>
                        <i><b>Ügyfélközpontúság:</b></i> Munkánk során kiemelt figyelmet fordítunk az ügyfeleink elégedettségére. Minden projektet az ügyféllel szoros együttműködésben végzünk.                          
                        </Card.Text>
                      </Col> 
                    </Row> 
                  </Card>
              </Col>
        </Col>

        <Col xs={3} md={2} lg={2} className='sajatMargin'> 
            <Col>
              <Card className='text-center align-items-center szinAtmenet3' style={{border: 'none'}}>
                <TbRulerMeasure style={{width: '3vw', height: '3vw', marginTop: '5vw'}}/>
                <Card.Title style={{ marginTop: '1vw'}} className='minFontSize2'>
                  Ingyenes felmérés
                </Card.Title>    
                <img src='Felmeres.png' className='img-fluid szolgTop '/>                      
              </Card>
            </Col>
        
            <Col>
              <Card className='text-center align-items-center szinAtmenet4' style={{border: 'none'}}>          
                <img src='Tervezés.png' className='img-fluid szolgTop2'/>              
                <TfiRulerPencil style={{width: '3vw', height: '3vw', marginTop: '2vw'}}/>
                <Card.Title style={{ marginTop: '1vw', marginBottom: '1vw'}} className='minFontSize2'>
                  Pontos tervezés és látványterv
                </Card.Title>            
              </Card>
            </Col>
        
            <Col>
              <Card className='text-center align-items-center szinAtmenet5' style={{border: 'none'}}>  
              <GiGroupedDrops style={{width: '3vw', height: '3vw', marginTop: '2vw'}}/>
                <Card.Title style={{ marginTop: '1vw', marginBottom: '1vw'}} className='minFontSize2'>
                  Minőségi öntözéstechnikai anyagok
                </Card.Title>                 
                <img src='HUNTER.jpg' className='img-fluid'/>         
              </Card>
            </Col>

            <Col>
              <Card className='text-center align-items-center szinAtmenet6' style={{border: 'none'}}>  
              <TbGardenCart style={{width: '3vw', height: '3vw', marginTop: '2vw'}}/>             
                  <Card.Title style={{ marginTop: '1vw', marginBottom: '1vw'}} className='minFontSize2'>
                    Minket keres, ha szüksége van: 
                  </Card.Title>    
                  <Card.Text className='text-center minFontSize3'>                 
                    <ul style={{paddingLeft: '10px', margin: 0, listStylePosition: 'outside', marginBottom: '2vw' }}>
                      <li>
                        Öntözőrendszer
                      </li>
                      <li>
                        Terep, kertrendezés
                      </li>
                      <li>
                        Gyepszőnyeg, vetett fű
                      </li>
                      <li>
                        Növény ültetés
                      </li>
                      <li>
                        Kerti tavak, csobogók
                      </li>
                      <li>
                        Tervezés, látványterv
                      </li>
                      <li>
                        Karbantartás
                      </li>
                      <li>
                        Szaktanácsadás
                      </li>
                    </ul>  
                  </Card.Text>        
              </Card>
            </Col>
        </Col>
    </Container>

    <Container id="specific-section" style={{textAlign: 'center', justifyContent: 'center', marginTop: '5vw'}}>
      <div className='szolgValasztas'>
        Válasszon szolgáltatásainkból
      </div>
    </Container>

    <Container fluid >
        <Row style={{marginTop: '5vw', textAlign: 'ceneter', justifyContent: 'center'}}>
        <Col xs={3} md={2} lg={2} className='text-center fontSizeCard'>
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

          <Col xs={3} md={2} lg={2} className='text-center fontSizeCard'>
            <p style={{
            
            fontWeight: 'normal', 
            color: 'bisque', 
            textShadow: '1px 1px 2px rgba(0, 0, 0, 1)', 
            letterSpacing: '0.2vw', 
            fontFamily: '"Times New Roman", "Garamond", "Georgia", serif',
            fontStyle: 'italic'
          }}>Gyepszőnyeg</p>
          </Col>

          <Col xs={3} md={2} lg={2} className='text-center fontSizeCard'>
            <p style={{
            
            fontWeight: 'normal', 
            color: 'bisque', 
            textShadow: '1px 1px 2px rgba(0, 0, 0, 1)', 
            letterSpacing: '0.2vw', 
            fontFamily: '"Times New Roman", "Garamond", "Georgia", serif',
            fontStyle: 'italic'
          }}>Díszkert</p>
          </Col>

          <Col xs={3} md={2} lg={2} className='text-center fontSizeCard'>
            <p style={{
            
            fontWeight: 'normal', 
            color: 'bisque', 
            textShadow: '1px 1px 2px rgba(0, 0, 0, 1)', 
            letterSpacing: '0.2vw', 
            fontFamily: '"Times New Roman", "Garamond", "Georgia", serif',
            fontStyle: 'italic'
          }}>Növények űltetése</p>
          </Col>
        </Row>
      </Container>

    <Container fluid  >
        <Row style={{textAlign: 'center', justifyContent: 'center'}}>
          <Col xs={3} md={2} lg={2}>
            <Card onClick={() => setState({ isPaneOpen: true })} className='szinReklamAtmenet card-hover' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column'}}>
              <img className='img-fluid reklam' src='OntozoReklam.jpg' style={{ flex: 1, objectFit: 'cover' }} />
              <img className='img-fluid reklam2' src='ontozoReklam2.jpg' style={{ width: '100%', objectFit: 'cover' }} />
            </Card>
          </Col>

          <Col xs={3} md={2} lg={2}>
            <Card onClick={() => setState({ isPaneOpen: true })} className='szinReklamAtmenet2 card-hover' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column' }}>
              <img className='img-fluid reklam3' src='FuReklam.png' style={{ width: '100%', height: '50%', objectFit: 'cover' }} />
              <img className='img-fluid reklam4' src='FuReklam2.jpg' style={{ width: '100%', height: '50%', objectFit: 'cover' }} />
            </Card>
          </Col>

          <Col xs={3} md={2} lg={2}>
            <Card onClick={() => setState({ isPaneOpen: true })} className='szinReklamAtmenet2 card-hover' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column' }}>
              <img className='img-fluid' src='KertReklam.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Card>
          </Col>

          <Col xs={3} md={2} lg={2}>
            <Card onClick={() => setState({ isPaneOpen: true })} className='szinReklamAtmenet2 card-hover' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column' }}>
              <img className='img-fluid' src='NovenyUltetes.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid style={{marginTop: '-3vw'}}>
        <Row style={{textAlign: 'center', justifyContent: 'center'}}>
          <Col xs={3} md={3} lg={2}>
            <Card onClick={() => setState({ isPaneOpen: true })} className='szinReklamAtmenet2 card-hover' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column' }}>
              <img className='img-fluid' src='TervReklam.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Card>
          </Col>

          <Col xs={3} md={3} lg={2}>
            <Card onClick={() => setState({ isPaneOpen: true })} className='szinReklamAtmenet2 card-hover' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column' }}>
              <img className='img-fluid' src='Karbantartas.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Card>
          </Col>

          <Col xs={3} md={3} lg={2}>
            <Card onClick={() => setState({ isPaneOpen: true })} className='szinReklamAtmenet2 card-hover' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column' }}>
              <img className='img-fluid' src='Foldmunka.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Card>
          </Col>
          

          
        </Row>
      </Container>
      
      <SlidingPane
        className="backgroundColor slidePanelHiddenFlow"
        
        isOpen={state.isPaneOpen}
        onRequestClose={() => {
          setState({ isPaneOpen: false });
          
        }}
        
        >
          <Container className='containerWidth' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', padding: 0}} >
            <Col xs={12} md={12} lg={12}>
              <Card style={{ backgroundColor: 'inherit', padding: '0vw', margin: 0 }}>
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
                      placeholder='Kérjük, ossza meg velünk igényeit, és rövidesen keresni fogjuk.'
                      required
                    />
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Form.Check 
                    style={{ marginBottom: '2vw', color: 'bisque'}}
                    type="checkbox" 
                    className='marginCheck'
                    
                    onChange={handleCheckboxChange}
                    />
                    <FormLabel className='customFontSize' style={{marginLeft: '10px', color: 'bisque'}}> Kijelentem hogy elolvastam és elfogadom az</FormLabel>
                    <Link to="/Protection" className='customFontSize' style={{ color: 'Blue', textDecoration: 'underline', marginLeft: '0.5vw', marginRight: '0.5vw'}}><b>Adatvédelemi</b></Link>
                    <FormLabel className='customFontSize' style={{color: 'bisque'}}>tájékoztatót</FormLabel>
                    </div>
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
                  <Col xs={10} md={6} lg={6} style={{ display: 'flex', justifyContent: 'center' }}>
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

      </SlidingPane>
      

      <Container fluid>
        <Row style={{marginTop: '2vw', textAlign: 'ceneter', justifyContent: 'center'}}>
        <Col xs={3} md={3} lg={2} className='text-center fontSizeCard'>
          <p style={{
            
            fontWeight: 'normal', 
            color: 'bisque', 
            textShadow: '1px 1px 2px rgba(0, 0, 0, 1)', 
            letterSpacing: '0.2vw', 
            fontFamily: '"Times New Roman", "Garamond", "Georgia", serif',
            fontStyle: 'italic'
          }}>
            Tervezés és látványterv
          </p>
        </Col>

          <Col xs={3} md={3} lg={2} className='text-center fontSizeCard'>
            <p style={{
             
            fontWeight: 'normal', 
            color: 'bisque', 
            textShadow: '1px 1px 2px rgba(0, 0, 0, 1)', 
            letterSpacing: '0.2vw', 
            fontFamily: '"Times New Roman", "Garamond", "Georgia", serif',
            fontStyle: 'italic'
          }}>
            Karbantartás
            </p>
          </Col>
 
          <Col xs={3} md={3} lg={2} className='text-center fontSizeCard'>
            <p style={{
            
            fontWeight: 'normal', 
            color: 'bisque', 
            textShadow: '1px 1px 2px rgba(0, 0, 0, 1)', 
            letterSpacing: '0.2vw', 
            fontFamily: '"Times New Roman", "Garamond", "Georgia", serif',
            fontStyle: 'italic'
          }}>Tereprendezés és földmunka</p>
          </Col>       
        </Row>
      </Container>
      
      
      <Container fluid>
        <Row style={{textAlign: 'center', justifyContent: 'center'}}>
          <Col xs={3} md={4} lg={2}>
              <Card onClick={() => setState({ isPaneOpen: true })} className='szinReklamAtmenet2 card-hover' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column' }}>
                <img className='img-fluid' src='ToReklam.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Card>
          </Col>

          <Col xs={3} md={4} lg={2}>
            <Card onClick={() => setState({ isPaneOpen: true })} className='szinReklamAtmenet2 card-hover' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column' }}>
              <img className='img-fluid' src='Szaktanacsadas.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Card>
          </Col>
          
          <Col xs={3} md={4} lg={2}>
            <Card onClick={() => setState({ isPaneOpen: true })} className='szinReklamAtmenet2 card-hover' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column' }}>
              <img className='img-fluid' src='Napelempark.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Card>
          </Col>
          <Col xs={3} md={4} lg={2}>
            <Card onClick={() => setState({ isPaneOpen: true })} className='szinReklamAtmenet2 card-hover' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)', height: '23vw', display: 'flex', flexDirection: 'column' }}>
              <img className='img-fluid' src='Legelo3.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row style={{marginTop: '2vw', textAlign: 'ceneter', justifyContent: 'center'}}>
        <Col xs={3} md={4} lg={2} className='text-center fontSizeCard'>
          <p style={{
            
            fontWeight: 'normal', 
            color: 'bisque', 
            textShadow: '1px 1px 2px rgba(0, 0, 0, 1)', 
            letterSpacing: '0.2vw', 
            fontFamily: '"Times New Roman", "Garamond", "Georgia", serif',
            fontStyle: 'italic'
          }}>
            Kerti tó
          </p>
        </Col>

          <Col xs={3} md={4} lg={2} className='text-center fontSizeCard'>
            <p style={{
             
            fontWeight: 'normal', 
            color: 'bisque', 
            textShadow: '1px 1px 2px rgba(0, 0, 0, 1)', 
            letterSpacing: '0.2vw', 
            fontFamily: '"Times New Roman", "Garamond", "Georgia", serif',
            fontStyle: 'italic'
          }}>
            Szaktanácsadás
            </p>
          </Col>
 
          <Col xs={3} md={4} lg={2} className='text-center fontSizeCard'>
            <p style={{
            
            fontWeight: 'normal', 
            color: 'bisque', 
            textShadow: '1px 1px 2px rgba(0, 0, 0, 1)', 
            letterSpacing: '0.2vw', 
            fontFamily: '"Times New Roman", "Garamond", "Georgia", serif',
            fontStyle: 'italic'
          }}>Ipari szolgáltatásaink</p>
          </Col>

          <Col xs={3} md={4} lg={2} className='text-center fontSizeCard'>
            <p style={{
            
            fontWeight: 'normal', 
            color: 'bisque', 
            textShadow: '1px 1px 2px rgba(0, 0, 0, 1)', 
            letterSpacing: '0.2vw', 
            fontFamily: '"Times New Roman", "Garamond", "Georgia", serif',
            fontStyle: 'italic'
          }}>Biodiverzitás</p>
          </Col>

          
        </Row>
      </Container>
      
    
      <footer fluid className="footer" style={{ color: 'bisque', padding: 0, backgroundColor: '#333333', marginTop: '20vw' }}>
            <Row>
                <Col xs={12} md={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src='Logo.png' style={{ width: '100%', maxWidth: '200px', marginTop: '1rem' }} alt="Logo"/>
                </Col>
                <Col xs={12} md={4} style={{paddingRight: 0}}>
                    <Card style={{ backgroundColor: 'GrayText', border: '3px solid green' }}>
                        <Card.Body>
                            <div style={{ marginBottom: '1rem' }}>
                                <Nav.Link style={{ color: 'bisque', textAlign: 'left' }}>
                                    <Link to="/Protection" className='fontSize' style={{ color: 'inherit', textDecoration: 'underline'}}><b>Adatvédelem</b></Link>
                                </Nav.Link>
                                <Nav.Link style={{ color: 'bisque', textAlign: 'left' }}>
                                    <Link to="/Contract" className='fontSize' style={{ color: 'inherit', textDecoration: 'underline'}}><b>ÁSZF</b></Link>
                                </Nav.Link>
                            </div>
                            <div  style={{ marginRight: '5vw'}}>
                            <Card.Title className='fontSize'>
                                Elérhetőség:
                            </Card.Title>
                            <Card.Text className='fontSize'>
                              +36/70 530 3055
                                <br />
                              +36/70 635 7555
                            </Card.Text>
                            <Card.Title className='fontSize'>
                                Email:
                            </Card.Title>
                            <Card.Text className='fontSize'>
                                thurzokertkft@gmail.com
                            </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4} style={{paddingLeft: 0}}>
                <Card style={{ backgroundColor: 'GrayText', border: '3px solid green' }}>
                      <Card.Body>
                          <div style={{ marginRight: '5vw' }}>
                              <Card.Title className='fontSize'>
                                  <b style={{textDecoration: 'underline'}}>Impresszum</b>
                              </Card.Title>
                              <Card.Text className='fontSize' style={{paddingBottom: '0.75vw'}}>
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



       

          
            
          

          
            
          

          
            
          


export default Services;