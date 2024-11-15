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
  
  useEffect(() => {
    const sectionId = sessionStorage.getItem('scrollTo');
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        sessionStorage.removeItem('scrollTo'); // Töröljük a görgetési információt
      }
    }
  }, []);

  return (
    <div id="specific-section2" className='bodyBackground'>
      <Navbar bg="dark" expand='lg'>
        <Container fluid>
          <img style={{width: '150px'}} className='img-fluid' src='Logo.png'/>
            <Navbar.Toggle className="ms-auto"/>
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <Nav.Link className='navLinkHover' style={{ marginRight: '2em', color: 'bisque'}}>
                  <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Főoldal</Link>
                </Nav.Link>
                <Nav.Link className='navLinkHover' style={{ marginRight: '2em', color: 'bisque' }}>
                  <Link to="/Services" style={{ color: 'inherit', textDecoration: 'none' }}>Szolgáltatásaink</Link>
                </Nav.Link>
                <Nav.Link className='navLinkHover' style={{ marginRight: '2em', color: 'bisque' }}>
                  <Link to="/Industrial" style={{ color: 'inherit', textDecoration: 'none' }}>Cégeknek</Link>
                </Nav.Link>  
                <Nav.Link  style={{ marginRight: '2em', color: 'bisque' }}>
                  <Link to="/Us" style={{ color: 'inherit', textDecoration: 'none', fontSize: '110%' }}>Rólunk</Link>
                </Nav.Link>   
                <Nav.Link className='navLinkHover' style={{ marginRight: '2em', color: 'bisque' }}>
                  <Link to="/Works" style={{ color: 'inherit', textDecoration: 'none' }}>Munkáink</Link>
                </Nav.Link>  
                <Nav.Link className='navLinkHover' style={{ marginRight: '20em', color: 'bisque'}}>
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
              <Card.Title style={{color: 'bisque'}}>Kedves Látogató!</Card.Title>
              <Card.Text style={{color: 'bisque'}} className='TextSize'>
              Cégünk 2005 augusztusában kezdte meg pályafutását egyéni vállalkozóként, majd 2010-től Kft.-ként folytatta működését. Folyamatos tanulás és fejlődés révén szereztünk magas színvonalú tapasztalatot, amelyet ügyfeleink elégedettsége tükröz.
              </Card.Text>
              <img className='img-fluid kepekAtmenete' src='Rolunk.jpg'/>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={4} >
          <Card className='blurred2' style={{textAlign: 'center'}}>
              <Card.Text style={{color: 'bisque'}} className='TextSize'>
              Öntözőrendszereinket kezdettől fogva egyféle márkával építjük. A legjobb minőségű <b>HUNTER</b> anyagokkal dolgozunk, legyen szó akár kiskertről, akár focipálya méretű területről. Szakembereink folyamatos továbbképzéseken vesznek részt, hogy a legújabb technológiákat is alkalmazni tudják. Az öntözőrendszerek nagy fejlődésen mentek keresztül: víztakarékos szórófejekkel és telefonról vezérelhető, okos elektronikai rendszerekkel bővült a kínálat.
              </Card.Text>
              <Card.Text style={{color: 'bisque'}} className='TextSize'><b>
              Profilunkba tartozik a gyepszőnyeg telepítése, füvesítés, kertépítés, kertgondozás, valamint ipari zöldterületek karbantartása.</b>
              </Card.Text>
          </Card>
          <Card style={{marginTop: '2vw'}} className='blurred2'>
            <img src='Rolunk3.jpg'/>
          </Card>
          </Col>
        </Row>
        <Row>
            <Col xs={6} md={4} lg={4} style={{paddingRight: 0}}>
              <Card className='blurred2' style={{textAlign: 'center'}}>
                <Card.Text style={{color: 'bisque'}} className='TextSize'>
                Profi minőségű gyepszőnyeggel dolgozunk, amellyel azonnal zöld felületet tudunk létrehozni. Nagy tisztaságú fűmagkeveréket vetünk, így bár a vetett fű nem azonnal, de hamar szép, tiszta, egybefüggő gyep lesz.
                </Card.Text>
                <Card.Text style={{color: 'bisque'}} className='TextSize'>
                Fontos tudni, különösen a jelenlegi forró nyarakra tekintettel, hogy a gyep öntözőrendszer nélkül nem működik megfelelően. Öntözőrendszer használatával vizet, időt és pénzt spórolhatunk meg.
                </Card.Text>
                <Card.Text style={{color: 'bisque'}} className='TextSize'>
                A szép gyep három alapfeltétele: a megfelelő mennyiségű víz a megfelelő időben, speciális tápanyagutánpótlás, valamint a rendszeres fűnyírás.
                </Card.Text>
                <img className='kepekAtmenete2' src='Rolunk5.jpg'/>
              </Card>
            </Col>     
            <Col xs={6} md={8} lg={8} style={{paddingLeft: 0}}>
              <Card className='blurred2'>
                <img className='img-fluid' src='Rolunk4.jpg'/>
              </Card>
              <br />
              <Card className='blurred2' style={{textAlign: 'center'}}>
                <Card.Text style={{color: 'bisque'}} className='TextSize'>
                Egy komplex kert kialakításánál fontos, hogy a dísznövények harmonizáljanak a füves területtel, a meglévő környezettel és a megrendelő igényeivel.

                Kertépítéseink során kiemelt figyelmet fordítunk a biodiverzitásra, hiszen ez egy fontos szempont a jövő nemzedékeire való tekintettel.
                </Card.Text>
              </Card>
              <br />
              <Card className='blurred2'>
                <img className='img-fluid' src='Rolunk6.jpg'/>
              </Card>
            </Col>
        </Row>
      </Container>


      <Card style={{marginTop: '10vw', border: 'none'}}>
            <Card.Body className='cardSzintAtmenet'>
                <Card.Text className='industrialFontSize' style={{textAlign: 'center', color: 'bisque'}}>
                Köszönjük, hogy időt szántál arra, hogy elolvasd a rólunk szóló anyagot. Nagyra értékeljük az érdeklődésedet, és reméljük, hogy sikerült betekintést nyújtanunk tevékenységünkbe. Ha bármilyen kérdésed van, vagy többet szeretnél megtudni, szívesen állunk rendelkezésedre!               
                </Card.Text>
            </Card.Body>
        </Card>
    
        <footer fluid className="footer" style={{
    color: 'bisque', 
    backgroundColor: '#333333', 
    padding: '1rem', 
    marginTop: '20vw', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center'
}}>
    <Row style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '2rem' }}>
        
        {/* Logo Section */}
        <Col xs={12} md={4} lg={4} style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginBottom: '2rem'
        }}>
          
            <img src="Logo.png" alt="Logo" style={{
                maxWidth: '450px', 
                width: '100%', 
                height: 'auto',
                objectFit: 'contain'
            }} />
            
        </Col>

        {/* Links and Contact Info Section */}
        <Col xs={12} md={4} lg={4} style={{
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'stretch', 
    padding: 0, // Eltávolítottuk a paddingot, hogy elkerüljük a csúszást
   
}}>
    <Card style={{
        backgroundColor: 'GrayText', 
        border: '3px solid green', 
        width: '100%', 
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
        flex: 1
    }}>
        <Card.Body>
            <div style={{ marginBottom: '1.5rem' }}>
                <Nav.Link style={{ color: 'bisque', textAlign: 'left' }}>
                    <Link to="/Protection" className='fontSize' style={{ color: 'inherit', textDecoration: 'underline', fontWeight: 'bold' }}>
                        Adatvédelem
                    </Link>
                </Nav.Link>
                <Nav.Link style={{ color: 'bisque', textAlign: 'left' }}>
                    <Link to="/Contract" className='fontSize' style={{ color: 'inherit', textDecoration: 'underline', fontWeight: 'bold' }}>
                        ÁSZF
                    </Link>
                </Nav.Link>
            </div>
            <div>
                <Card.Title style={{ marginBottom: '0.5rem' }} className='fontSize'>
                    Elérhetőség:
                </Card.Title>
                <Card.Text className='fontSize'>
                    +36/70 530 3055
                    <br />
                    +36/70 635 7555
                </Card.Text>
                <Card.Title style={{ marginBottom: '0.5rem' }} className='fontSize'>
                    Email:
                </Card.Title>
                <Card.Text className='fontSize'>
                    thurzokertkft@gmail.com
                </Card.Text>
            </div>
        </Card.Body>
    </Card>
</Col>

{/* Impressum Section */}
<Col xs={12} md={4} lg={4} style={{
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'stretch', 
    padding: 0, // Eltávolítottuk a paddingot, hogy elkerüljük a csúszást
}}>
    <Card style={{
        backgroundColor: 'GrayText', 
        border: '3px solid green', 
        width: '100%', 
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
        
        flex: 1
    }}>
        <Card.Body>
            <Card.Title className='fontSize' style={{ marginBottom: '1rem', textDecoration: 'underline' }}>
                <b>Impresszum</b>
            </Card.Title>
            <Card.Text className='fontSize'>
                Cégnév: Thurzó Kert Kft.
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
        </Card.Body>
    </Card>
</Col>
    </Row>
    
    {/* Footer Bottom Section (Optional) */}
    <div style={{
        textAlign: 'center',
        color: 'bisque', 
        marginTop: '2rem', 
        fontSize: '0.9rem', 
        borderTop: '1px solid #444',
        paddingTop: '1rem',
    }}>
        <p>&copy; 2024 Thurzo Kert Kft. Minden jog fenntartva.</p>
    </div>
</footer>



    </div>
  
    
  );
}

export default Us;