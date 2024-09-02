import React, { useState, useEffect } from 'react';
import './Industrial.css';
import { Navbar, Container, Nav, NavbarToggle, NavbarCollapse, Carousel, Col, Card, CardImg, CardHeader, Row, CardBody, CardText, CarouselItem, CardTitle } from 'react-bootstrap';
import Footer from 'rc-footer';
import { Link } from 'react-router-dom';
import { GiHighGrass, GiSpade, GiPlantRoots  } from "react-icons/gi";
import { BsDropletFill } from "react-icons/bs";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaScrewdriverWrench } from "react-icons/fa6";



function Industrial() {
  
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
                <Nav.Link style={{ marginRight: '2em', color: 'bisque', fontSize: '110%' }}>
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
      
        <Card style={{marginTop: '5vw', border: 'none'}}>
            <Card.Body className='cardSzintAtmenet'>
                <Card.Text className='industrialFontSize' style={{textAlign: 'center', color: 'bisque'}}>
                    Cégünk ipari zöldterületek karbantartására és kiépítésére is specializálódott, kiemelten fókuszálva ipari parkok, cégek és napelemparkok professzionális gondozására és teljes zöld terület kiépítésére.
                </Card.Text>
            </Card.Body>
        </Card>
            
        <Container fluid>
        <Row style={{textAlign: 'center', justifyContent: 'center', marginTop: '3vw'}}>
        <Col  xs={11} md={11} lg={3}>
          <Card className='cardSzintAtmenet2 ' style={{border: 'none', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                  <Carousel fade >
                    <Carousel.Item>
                    <img src='Ipari.jpg' className='card-img' alt='Ipari'/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src='Ipari2.jpg' className='card-img' alt='Ipari'/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src='Ipari3.jpg' className='card-img' alt='Ipari'/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src='Ipari15.jpg' className='card-img' alt='Ipari'/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src='Ipari16.jpg' className='card-img' alt='Ipari'/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src='Ipari17.jpg' className='card-img' alt='Ipari'/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src='Ipari18.jpg' className='card-img' alt='Ipari'/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src='Ipari19.jpg' className='card-img' alt='Ipari'/>
                    </Carousel.Item>
                  </Carousel>
              
              <Card.Title style={{textAlign: 'left', paddingLeft: '1vw'}}>Napelemparkok</Card.Title>
              <hr style={{color: 'green', border: '2px solid'}}/>
              <Card.Text className='card-text' style={{textAlign: 'left', paddingLeft: '1vw'}}>
              Cégünk kertépítési szolgáltatásai közé tartozik a napelemparkok zöldterületének rendszeres és eseti gondozása.          
              </Card.Text>
              <hr style={{color: 'green', border: '2px solid'}}/>
              <Card.Text className='card-text' style={{textAlign: 'left'}}>
              <ul>
              <li>
              Kaszálás a panelek körül és alatt a zavartalan működés biztosítása érdekében.
              </li>  
              <li>
              Az infrasorompók közötti területek megtisztítása a riasztórendszerek zavarmentes üzemeltetéséhez.
              </li> 
              <li>
              Permetezés a hosszú távú, fenntartható működés érdekében.
              </li> 
              </ul>             
              </Card.Text>
          </Card>
        </Col>
        <Col  xs={11} md={11} lg={3}>
          <Card className='cardSzintAtmenet3' style={{border: 'none',boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
          <Carousel fade >
                    <Carousel.Item>
                    <img src='Ipari8.jpg' className='card-img' alt='Ipari'/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src='Ipari6.jpg' className='card-img' alt='Ipari'/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src='Ipari7.jpg' className='card-img' alt='Ipari'/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src='Ipari9.jpg' className='card-img' alt='Ipari'/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src='Ipari10.jpg' className='card-img' alt='Ipari'/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src='Ipari11.jpg' className='card-img' alt='Ipari'/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src='Ipari12.jpg' className='card-img' alt='Ipari'/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src='Ipari13.jpg' className='card-img' alt='Ipari'/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src='Ipari14.jpg' className='card-img' alt='Ipari'/>
                    </Carousel.Item>
                  </Carousel>
              <Card.Title style={{textAlign: 'left', paddingLeft: '1vw'}}>Ipari parkok</Card.Title>
              <hr style={{color: 'green', border: '2px solid'}}/>
              <Card.Text className='card-text' style={{textAlign: 'left', paddingLeft: '1vw'}}>
              Az ipari parkok számára, széles körű zöldterület-kezelési szolgáltatásokat nyújtunk, amelyek közé tartozik:    
              </Card.Text>
              <hr style={{color: 'green', border: '2px solid'}}/>
              <Card.Text className='card-text' style={{textAlign: 'left'}}>
              <ul>
              <li>
              A zöldterületek teljes körű gondozása, beleértve a fűkaszálást, bokrok és fák karbantartását.
              </li>  
              <li>
              Infrastruktúra körüli területek tisztítása és rendezése a zavartalan üzemi környezet fenntartásához.
              </li> 
              <li>
              Gyomirtás és permetezés a hosszú távú fenntarthatóság érdekében.
              </li> 
              <li>
              Szemét és hulladék eltávolítása, hogy a park területe rendezett és esztétikus maradjon.
              </li> 
              </ul>             
              </Card.Text>
          </Card>
        </Col>
        <Col  xs={11} md={11} lg={3}>
          <Card className='cardSzintAtmenet2' style={{border: 'none', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
          <Carousel fade controls={false} indicators={false}>       
                    <Carousel.Item >
                    <img src='Kasza3.jpg' className='card-img '/>                   
                    </Carousel.Item>   
                    
                  </Carousel>
                  <Card.Title style={{textAlign: 'left', paddingLeft: '1vw'}}>Kaszálás</Card.Title>
                  <hr style={{color: 'green', border: '2px solid'}}/>
                  <Card.Title style={{textAlign: 'left', paddingLeft: '1vw'}}>
                  Elkerülheti a büntetéseket és a költséges problémákat – Vágjon bele most a parlagfű eltávolításába!
                  </Card.Title>
                  <hr style={{color: 'green', border: '2px solid'}}/>
                  <Card.Text style={{textAlign: 'left', paddingLeft: '1vw'}}>
                  A parlagfű gyors növekedése nemcsak az ipari területek karbantartását nehezíti meg, hanem <b>jelentős pénzbírságot és jogi következményeket is vonhat maga után.</b> Ne hagyja, hogy a probléma tovább súlyosbodjon – intézkedjen időben!
                  </Card.Text>
                  <Card.Text style={{textAlign: 'left', paddingLeft: '1vw'}}>
                  Ráadásul <b>permetezési szolgáltatásunkkal</b> jelentősen késleltetheti a parlagfű visszanövését, biztosítva a hosszú távú eredményeket és csökkentve a jövőbeni karbantartási igényeket.
                  </Card.Text>
                  
                  
                              
                  
              </Card>
            </Col>
            <Col  xs={11} md={11} lg={3}>
          <Card className='cardSzintAtmenet3' style={{border: 'none', boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
          <Carousel fade >
         
                    <Carousel.Item>
                    <video className='d-block w-100' autoPlay loop muted>
                      <source src='Video1.mp4' type='video/mp4' />
                      Your browser does not support the video tag.
                    </video>                    
                    </Carousel.Item>
                    <Carousel.Item>
                    <video className='d-block w-100' autoPlay loop muted>
                      <source src='Video2.mp4' type='video/mp4' />
                      Your browser does not support the video tag.
                    </video>                    
                    </Carousel.Item>
                    
                  </Carousel>
                  <Card.Title style={{textAlign: 'left', paddingLeft: '1vw'}}>Permetezés</Card.Title>
                  <hr style={{color: 'green', border: '2px solid'}}/>
                  <Card.Text className='card-text' style={{textAlign: 'left', paddingLeft: '1vw'}}>
                  Cégünk szakértője a különböző permetezési szolgáltatásoknak, amelyek célja a növények védelme és a kártevők elleni hatékony védekezés. 
                  </Card.Text>
                  <hr style={{color: 'green', border: '2px solid'}}/>
                  <Card.Text className='card-text' style={{textAlign: 'left'}}>
                  <ul>
                  <li>
                  <b>Kártevőirtás:</b> Modern módszerekkel és eszközökkel végezzük a kártevők eltávolítását, hogy biztosítsuk a növények egészségét és fejlődését.
                  </li>  
                  <li>
                  <b>Növényvédelem:</b> Komplett növényvédelmi megoldásokkal állunk rendelkezésre, amelyek magukban foglalják a fungicidok és herbicidek alkalmazását is a betegségek és gyomnövények ellen.
                  </li> 
                  <li>
                  <b>Prevenzív Permetezés:</b> Rendszeres permetezési szolgáltatásaink biztosítják a növények folyamatos védelmét a szezonális problémák ellen.
                  </li> 
                  
                  </ul>             
                  </Card.Text>
              </Card>
            </Col>
          </Row>
          <Row  style={{textAlign: 'center', justifyContent: 'center'}}>
          <Col className='marginTopCustom' xs={11} md={11} lg={8} >
            
              <Card className='cardSzintAtmenet2' style={{boxShadow: '20px 10px 30px rgba(0, 0, 0, 1)'}}>
                <Row>
                <Col xs={12} md={12} lg={3}>
                <Carousel>
                        <Carousel.Item>
                     
                          <img 
                            src='Legelo.jpg' 
                            className='card-img img-fluid' 
                            style={{ 
                              width: '100%', 
                              height: '100%', 
                              objectFit: 'cover' 
                            }} 
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                     
                          <img 
                            src='Legelo2.jpg' 
                            className='card-img img-fluid' 
                            style={{ 
                              width: '100%', 
                              height: '100%', 
                              objectFit: 'cover' 
                            }} 
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                     
                          <img 
                            src='Hotel.jpg' 
                            className='card-img img-fluid' 
                            style={{ 
                              width: '100%', 
                              height: '100%', 
                              objectFit: 'cover' 
                            }} 
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                     
                          <img 
                            src='Madarodu.jpg' 
                            className='card-img img-fluid' 
                            style={{ 
                              width: '100%', 
                              height: '100%', 
                              objectFit: 'cover' 
                            }} 
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                     
                          <img 
                            src='Madarodu3.jpg' 
                            className='card-img img-fluid' 
                            style={{ 
                              width: '100%', 
                              height: '100%', 
                              objectFit: 'cover' 
                            }} 
                          />
                        </Carousel.Item>
                      </Carousel>
                </Col>
                <Col xs={11} md={11} lg={8}>
                <Card.Body>
                      <Card.Title style={{ paddingLeft: '1vw', textAlign: 'left' }}>
                        Biodiverzitás
                      </Card.Title>
                      <hr style={{ color: 'green', border: '2px solid' }} />
                      <Card.Text style={{ paddingLeft: '1vw', textAlign: 'left' }}>
                        Cégünk nem csupán a gazdasági növekedésre, hanem a környezetvédelmi fenntarthatóságra is nagy hangsúlyt fektet.
                      </Card.Text>
                      <hr style={{ color: 'green', border: '2px solid' }} />

                      <Card.Text className='card-text' style={{ textAlign: 'left' }}>
                        <ul>
                          <li>
                            <b>Saját Készítésű Méhhotelek:</b> Támogatjuk a beporzó rovarok, különösen a méhek fennmaradását saját készítésű méhhoteleinkkel, amelyek biztonságos pihenő- és szaporodóhelyeket biztosítanak számukra.
                          </li>
                          <br />
                          <li>
                            <b>Virágos Méhlegelők Kialakítása:</b> Virágos rétek és méhlegelők telepítésével segítjük a beporzók, például a méhek és lepkék táplálkozását, hozzájárulva a természetes növényvilág sokféleségéhez.
                          </li>
                          <br />
                          <li>
                            <b>Madárvédelmi Programok:</b> A madarak védelme érdekében madárodúkat és itatókat helyezünk ki, amelyek biztonságos fészkelőhelyet és friss vízforrást biztosítanak számukra, ezzel támogatva a madárpopulációk fennmaradását.
                          </li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                </Col>
                </Row>
              </Card>

            

          </Col>
          </Row>
          
          
         

          <Row  className='textCenter' style={{marginTop: '5vw'}}>
            <Col xs={12} md={5} lg={12}>
            <Card style={{backgroundColor: 'inherit', border: 'none'}}>
              <Card.Title style={{padding: '0.5vw', textAlign: 'center', color: 'bisque'}}>
              "Növelje vállalata hatékonyságát és csökkentse a költségeket – válasszon minket, optimalizálja ipari zöld területeit a legmagasabb szintű szakértelemmel!
              </Card.Title>
              <hr style={{color: 'green', border: '2px solid'}}/>
              <Card.Title style={{padding: '0.5vw', textAlign: 'center', color: 'bisque'}}>
              Több éves tapasztalatunk, megbízhatóságunk és szakértelmünk révén nagyvállalatok ránk bízzák a zöldterületeiket. Ne hagyja ki a lehetőséget, hogy a biodiverzitás révén a zöld vállalatok legjobbjai közé tartozzon – lépjen kapcsolatba velünk még ma, és tapasztalja meg a különbséget!"
              </Card.Title>
            </Card>
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

export default Industrial;