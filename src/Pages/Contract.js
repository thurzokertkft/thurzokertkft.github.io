import React, { useState, useEffect } from 'react';
import './Contract.css';
import { Navbar, Container, Nav, NavbarToggle, NavbarCollapse, Carousel, Col, Card, CardImg, CardHeader, Row, CardBody, CardText, CarouselItem, CardTitle, Table } from 'react-bootstrap';
import Footer from 'rc-footer';
import { Link } from 'react-router-dom';
import { GiHighGrass, GiSpade, GiPlantRoots  } from "react-icons/gi";
import { BsDropletFill } from "react-icons/bs";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaScrewdriverWrench } from "react-icons/fa6";



function Contract() {

    const isScrollablePage = true; 

  const containerStyle = {
    overflowX: isScrollablePage ? 'auto' : 'hidden',
  };
  
  return (
    <div style={containerStyle}>
      
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
                <Nav.Link style={{ marginRight: '20em', color: 'bisque'}}>
                  <Link to="/Support" style={{ color: 'inherit', textDecoration: 'none' }}>Kapcsolat</Link>
                </Nav.Link>          
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      
        
        <Container>
            <Row style={{textAlign: 'center', justifyContent: 'center', marginTop: '5vw'}}>
              <Col xs={12} md={12} lg={12}>
              <Card style={{textAlign: 'left'}}>
                <CardBody>
              <CardTitle >Általános Szerződési Feltételek</CardTitle>

                <CardTitle>Jogok és Kötelezettségek</CardTitle>
                <CardText>
                A jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) a Thurzó-Kert Kft. (továbbiakban: Szolgáltató), és a
                Szolgáltató által a <a href="https://www.thurzokertkft.hu">www.thurzokertkft.hu</a> weboldalon keresztül nyújtott
                elektronikus kereskedelmi szolgáltatásokat igénybe vevő Ügyfél (a továbbiakban: Ügyfél) jogait és kötelezettségeit
                tartalmazza. (Szolgáltató és Ügyfél a továbbiakban együttesen: Felek). Az ÁSZF minden jogügyletre és szolgáltatásra
                vonatkozik, amely a <a href="https://www.thurzokertkft.hu">www.thurzokertkft.hu</a> weboldalon keresztül történik,
                függetlenül attól, hogy annak teljesítése Magyarországról vagy külföldről, a Szolgáltató vagy közreműködője által
                történik.
                </CardText>

                <CardText>Szolgáltató Adatai:</CardText>
                <ul>
                <li>Cégnév: Thurzó-Kert Kft.</li>
                <li>Székhely: 3531 Miskolc Füzes utca 36.</li>
                <li>Adószám: 11722591-2-05</li>
                <li>Cégjegyzékszám: Cg. 05-06-015476</li>
                <li>Elektronikus elérhetőség: thurzobence98@gmail.com</li>
                <li>Telefonos elérhetőség: +36/ 70 421 2294</li>
                <li>Kapcsolattartó neve: Thurzó Róbert</li>
                <li>Bejegyzés éve: 2005</li>
                <li>Kamarai Tagság: Borsod-Abaúj-Zemplén Megyei Kereskedelmi és Iparkamara</li>
                <li>Bankszámlaszám: 11734004-25993231-00000000 (OTP Bank)</li>
                <li>Tárhelyszolgáltató: Github pages</li>
                </ul>

                <CardTitle>1. ÁLTALÁNOS TUDNIVALÓK. A FELEK KÖZÖTTI KAPCSOLAT LÉTREJÖTTE</CardTitle>
                <CardText>
                1.1. A jelen ÁSZF hatálya kiterjed minden olyan elektronikus szolgáltatásra és információra, amely a Thurzó-Kert Kft.
                hivatalos weboldalán, a <a href="https://www.thurzokertkft.hu">www.thurzokertkft.hu</a> (a továbbiakban: Weboldal)
                keresztül érhető el. A Weboldal célja a cég bemutatása és a látogatók tájékoztatása. A Weboldalon keresztül nem
                történik értékesítés, kereskedelmi tevékenység, és nem jön létre vásárlási szerződés.
                </CardText>
                <CardText>
                1.2. A Weboldal minden látogató számára szabadon és regisztráció nélkül elérhető. Az oldalon keresztül történő
                kapcsolatfelvétel e-mailben vagy telefonon történhet. Az oldalon nincs lehetőség elektronikus kereskedelmi
                szolgáltatások igénybevételére, így vásárlásra sem. Az oldal kizárólag információs céllal működik. A weboldalon
                keresztül küldött e-mailek a Gmail rendszerén keresztül kerülnek tárolásra, és csak a kapcsolattartás célját
                szolgálják.
                </CardText>
                <CardText>
                1.3. Kapcsolatfelvétel: Telefon: +36 70 421 2294 Internet cím:{' '}
                <a href="https://www.thurzokertkft.hu">www.thurzokertkft.hu</a> E-mail: info@thurzokertkft.hu Személyes
                ügyfélszolgálat vagy ügyfélfogadás nincs, az egyetlen elérhetőség telefonon vagy e-mailben lehetséges.
                </CardText>

                <CardTitle>2. REGISZTRÁCIÓ</CardTitle>
                <CardText>
                2.1. A Thurzó-Kert Kft. weboldalán (<a href="https://www.thurzokertkft.hu">www.thurzokertkft.hu</a>) nem szükséges
                regisztráció. Az oldal natúr hirdetési célokat szolgál, és nem kínál regisztrációs lehetőséget. Nincs lehetőség
                vásárlásra vagy ajánlatkötésre az oldalon keresztül.
                </CardText>
                <CardText>
                2.2. Mivel regisztrációs lehetőség nem elérhető, a felhasználók nem hozhatnak létre felhasználói fiókot, és nem
                nyújtunk olyan szolgáltatásokat, mint rendeléskövetés vagy kívánságlisták. Az oldal kizárólag hirdetési célú
                információkat tartalmaz.
                </CardText>
                <CardText>
                2.3. Az oldal üzemeltetője nem vállal felelősséget az oldalon keresztül tett hibás adatokért, mivel regisztrációra és
                adatbevitelre nincs lehetőség. Az oldal tartalmával kapcsolatos bármilyen kérdést vagy problémát közvetlenül a
                hirdető céggel kell rendezni.
                </CardText>

                <CardTitle>3. AJÁNLATI KÖTÖTTSÉG, VISSZAIGAZOLÁS</CardTitle>
                <CardText>
                3.1. Mivel a weboldalon nem történik online vásárlás, ajánlatkötés vagy regisztráció, az oldalon keresztül küldött
                információk nem minősülnek ajánlatnak, és nem áll rendelkezésre visszaigazoló e-mail.
                </CardText>
                <CardText>
                3.2. Az oldal célja kizárólag hirdetések közzététele, és nem érhető el elektronikus úton történő szerződéskötés vagy
                megrendelés.
                </CardText>
                <CardText>
                3.3. Az oldal üzemeltetője nem vállal felelősséget az oldalon található információk pontosságáért és az azokkal
                kapcsolatos esetleges félreértésekért.
                </CardText>

                <CardTitle>4. FIZETÉSI MÓDOK</CardTitle>
                <CardText>
                Mivel az Ön weboldala hirdetési szolgáltatást nyújt, ahol nincs termékértékesítés és fizetési lehetőség, az alábbi
                fizetési módok nem alkalmazandók.
                </CardText>

                <CardTitle>5. SZÁLLÍTÁSI FELTÉTELEK</CardTitle>
                <CardText>
                Mivel az Ön weboldala hirdetési szolgáltatást nyújt, ahol nincs termékértékesítés, a szállítással kapcsolatos
                feltételek nem vonatkoznak az oldalra.
                </CardText>

                <CardTitle>6. ELÁLLÁS JOG</CardTitle>
                <CardText>
                Mivel az Ön weboldala hirdetési szolgáltatást nyújt, ahol nincs termékértékesítés és közvetlen szerződéskötés az
                oldal részéről, az elállási jog nem alkalmazható. A weboldal nem értékesít termékeket, és nem biztosít lehetőséget a
                szerződéses jogok érvényesítésére.
                </CardText>

                <CardTitle>7. ELÁLLÁSI JOG GYAKORLÁSÁNAK A MENETE</CardTitle>
                <CardText>
                Mivel az Ön weboldala hirdetési szolgáltatást nyújt, ahol nincs termékértékesítés és közvetlen szerződéskötés, az
                elállási jog gyakorlásának menete nem alkalmazandó.
                </CardText>

                <CardTitle>8. JÓTÁLLÁS</CardTitle>
                <CardTitle>8.1. Jótállás</CardTitle>
                <CardText>
                A weboldalunk nem értékesít termékeket, így jótállási kötelezettség nem vonatkozik ránk. Jótállási szabályok
                kizárólag termékek vásárlására vonatkoznak, ezért az oldalunkon elérhető információk és hirdetések esetében a
                jótállás nem alkalmazható.
                </CardText>

                <CardTitle>8.2. Szavatosság és Garancia</CardTitle>
                <CardText>
                Mivel weboldalunk kizárólag hirdetési szolgáltatásokat nyújt, a termékekre vonatkozó szavatossági és garanciális
                szabályok nem érvényesek. Az oldalunkon megjelenő hirdetések pontosságáért és valóságtartalmáért felelősséget
                vállalunk. Az ügyfelek által észlelt esetleges problémákat az ügyfélszolgálatunkon keresztül kezeljük, de a
                szavatossági és garanciális kötelezettségek nem vonatkoznak a weboldalon hirdetett termékekre.
                </CardText>

                <CardTitle>8.3. Szolgáltatás Minősége</CardTitle>
                <CardText>
                Weboldalunk kizárólag hirdetési célokra szolgál, és nem nyújt egyéb szolgáltatásokat. A hirdetett adatok
                pontosságáért és megfelelőségéért vállalunk felelősséget. Ha bármilyen kérdése vagy problémája van a hirdetéseinkkel
                kapcsolatban, kérjük, lépjen kapcsolatba ügyfélszolgálatunkkal, ahol a felmerült problémákat igyekszünk orvosolni.
                </CardText>

                <CardTitle>8.4. További Információ</CardTitle>
                <CardText>
                További információkért és kérdések esetén kérjük, lépjen kapcsolatba ügyfélszolgálatunkkal. A weboldalon található
                hirdetésekkel kapcsolatos jogok és kötelezettségek az Általános Szerződési Feltételek szerint érvényesek.
                </CardText>
                <Card.Title>9. SZAVATOSSÁG</Card.Title>

                <Card.Text>
                <strong>9.1. Szavatosság és Kérdések</strong>
                </Card.Text>
                <Card.Text>
                Mivel weboldalunk nem árusít termékeket, a termékek szavatosságára vonatkozó szabályok nem alkalmazhatók. Az
                oldalunkon található hirdetések esetében azonban felelősséget vállalunk azok valóságtartalmáért. Bármilyen
                észrevételt vagy problémát a hirdetett adatokkal kapcsolatban az ügyfélszolgálatunkon keresztül tudunk kezelni.
                </Card.Text>

                <Card.Text>
                <strong>9.2. Szolgáltatási Szabályok</strong>
                </Card.Text>
                <Card.Text>
                Weboldalunk kizárólag hirdetési célokra szolgál. Az oldalon közzétett hirdetések tartalmáért és pontoságáért
                vállalunk felelősséget. Ha az ügyfél a hirdetésekben szereplő adatokkal kapcsolatban problémát tapasztal, kérjük,
                lépjen kapcsolatba ügyfélszolgálatunkkal. A hirdetett adatok helyességét és megfelelőségét igyekszünk
                biztosítani, és minden észrevételt vagy reklamációt a lehető legjobban kezelünk.
                </Card.Text>

                <Card.Title>10. FELELŐSSÉG</Card.Title>

                <Card.Text>
                <strong>10.1. Weboldal Információk</strong>
                </Card.Text>
                <Card.Text>
                A Weboldalon található információk kizárólag hirdetési célt szolgálnak, és a weboldal üzemeltetője nem vállal
                felelősséget az információk pontosságáért, teljességéért. Az Ügyfél a Weboldalt kizárólag saját kockázatára
                használhatja. A weboldal üzemeltetője nem vállal felelősséget a Weboldal használatából eredő vagyoni és nem
                vagyoni károkért, kivéve, ha azokat szándékos cselekedet, súlyos gondatlanság, vagy bűncselekmény okozta, valamint
                az életet, testi épséget vagy egészséget érintő károk esetén.
                </Card.Text>

                <Card.Text>
                <strong>10.2. Használói Magatartás</strong>
                </Card.Text>
                <Card.Text>
                A Weboldal használói által tanúsított magatartásért a weboldal üzemeltetője nem vállal felelősséget. Az Ügyfél
                teljes mértékben és kizárólagosan felelős saját magatartásáért. A weboldal üzemeltetője együttműködik az eljáró
                hatóságokkal a jogsértések felderítése érdekében.
                </Card.Text>

                <Card.Text>
                <strong>10.3. Harmadik Fél Weboldalai</strong>
                </Card.Text>
                <Card.Text>
                A Weboldal tartalmazhat linkeket harmadik fél weboldalaira. E harmadik felek adatvédelmi gyakorlatáért és egyéb
                tevékenységeikért a weboldal üzemeltetője nem vállal felelősséget.
                </Card.Text>

                <Card.Text>
                <strong>10.4. Felhasználói Tartalom</strong>
                </Card.Text>
                <Card.Text>
                Az Ügyfelek által a Weboldalon közzétett tartalmakért a weboldal üzemeltetője nem vállal felelősséget. Az
                üzemeltető jogosult, de nem köteles ellenőrizni a közzétett tartalmakat, és jogellenes tevékenységre utaló jelek
                keresésére sem köteles. Az Internet globális jellege miatt az Ügyfél köteles figyelembe venni a vonatkozó nemzeti
                jogszabályokat. Amennyiben a Weboldal használata az Ügyfél államának jogszabályai szerint nem megengedett, a
                használatért kizárólag az Ügyfél felelős.
                </Card.Text>

                <Card.Text>
                <strong>10.5. Jelzési Kötelezettség</strong>
                </Card.Text>
                <Card.Text>
                Amennyiben az Ügyfél kifogásolható tartalmat észlel a Weboldalon, köteles azt haladéktalanul jelezni a weboldal
                üzemeltetőjének. Ha a jelzés megalapozottnak bizonyul, az üzemeltető jogosult az információt haladéktalanul törölni
                vagy módosítani.
                </Card.Text>
                <Card.Title>11. SZERZŐI JOGOK</Card.Title>

                <Card.Text>
                    <strong>11.1. Szerzői Jogok</strong>
                </Card.Text>
                <Card.Text>
                    A Weboldal szerzői jogvédelem alatt áll. A weboldal üzemeltetője a szerzői jogi jogosultja vagy a feljogosított
                    felhasználója minden tartalomnak, amely a Weboldalon található, beleértve a grafikákat, a felület elrendezését, a
                    szoftveres és egyéb megoldásokat.
                </Card.Text>

                <Card.Text>
                    <strong>11.2. Felhasználási Jogok</strong>
                </Card.Text>
                <Card.Text>
                    A Weboldal tartalmának magáncélú mentése vagy kinyomtatása engedélyezett, amennyiben az előzetes írásbeli
                    hozzájárulás megvan a weboldal üzemeltetőjétől. Az üzleti célú felhasználás – például adatbázisban történő tárolás,
                    továbbadás, közzététel, kereskedelmi forgalomba hozatal – kizárólag a weboldal üzemeltetőjének előzetes írásbeli
                    engedélyével lehetséges.
                </Card.Text>

                <Card.Text>
                    <strong>11.3. Felhasználási Korlátozások</strong>
                </Card.Text>
                <Card.Text>
                    Az ÁSZF-ben meghatározott jogokon túl a Weboldal használata nem biztosít jogot a kereskedelmi nevek vagy védjegyek
                    bármilyen felhasználására vagy hasznosítására. A weboldal tartalmát az üzemeltető előzetes írásbeli engedélye
                    nélkül semmilyen formában nem lehet felhasználni vagy hasznosítani.
                </Card.Text>

                <Card.Title>12. JOGÉRVÉNYESÍTÉSI LEHETŐSÉGEK</Card.Title>

                <Card.Text>
                    <strong>12.1. Panaszügyintézés</strong>
                </Card.Text>
                <Card.Text>
                    Az Ügyfél a Weboldalon található hirdetésekkel vagy a Weboldal használatával kapcsolatos kifogásait az alábbi
                    elérhetőségeken terjesztheti elő:
                    <ul>
                    <li>Ügyfélszolgálat: Thurzó-Kert Kft.</li>
                    <li>Telefon: +36 70 421 2294</li>
                    <li>E-mail: thurzobence98@gmail.com</li>
                    </ul>
                    Az Ügyfél a kifogásokat kizárólag e-mailben vagy telefonon terjesztheti elő. Az ügyfélszolgálat személyes
                    ügyfélfogadást nem biztosít. Az írásbeli panaszokat az üzemeltető harminc napon belül megvizsgálja és válaszol rá.
                </Card.Text>

                <Card.Text>
                    <strong>12.2. Egyéb Jogérvényesítési Lehetőségek</strong>
                </Card.Text>
                <Card.Text>
                    Ha a panasz nem rendeződik, az Ügyfél a következő jogérvényesítési lehetőségekkel élhet:
                    <ul>
                    <li>Fogyasztóvédelmi Hatóság: Panasz a lakóhely szerint illetékes hatóságnál.</li>
                    <li>
                        Békéltető Testület: Eljárás kezdeményezése a lakóhely vagy a weboldal üzemeltetője szerinti illetékes
                        békéltető testületnél.
                    </li>
                    <li>Online Vitarendezés: Eljárás az Európai Unió online vitarendezési platformján keresztül.</li>
                    </ul>
                </Card.Text>

                <Card.Text>
                    <strong>12.3. Békéltető Testületek Elérhetőségei</strong>
                </Card.Text>
                <Card.Text>
                    <ul>
                    <li>Békéltető Testületek Elérhetősége: bekeltetes.hu</li>
                    <li>
                        Székhely Szerinti Testület: Borsod-Abaúj-Zemplén Megyei Békéltető Testület
                        <ul>
                        <li>Cím: 3525 Miskolc, Szentpáli u. 1.</li>
                        <li>E-mail: kalna.zsuzsa@bokik.hu</li>
                        <li>Telefonszám: 06 (46) 501-091, 06 (46) 501-870</li>
                        </ul>
                    </li>
                    </ul>
                </Card.Text>

                <Card.Text>
                    <strong>12.4. Bírósági Eljárás</strong>
                </Card.Text>
                <Card.Text>
                    Az Ügyfél jogosult bírósági eljárás keretében érvényesíteni a fogyasztói jogvitából származó követelését a Polgári
                    Törvénykönyv és a Polgári Perrendtartás rendelkezései szerint.
                </Card.Text>

                <Card.Title>13. EGYÉB RENDELKEZÉSEK</Card.Title>

                <Card.Text>
                    <strong>13.1. Biztonsági Óvintézkedések</strong>
                </Card.Text>
                <Card.Text>
                    A Weboldal biztonsági szintje megfelelő, de javasoljuk, hogy használjon vírusvédelmi és spyware elleni
                    szoftvereket, valamint telepítse az operációs rendszer frissítéseit. Az Ügyfélnek tudomásul kell vennie az
                    Internet technikai és műszaki korlátait.
                </Card.Text>

                <Card.Text>
                    <strong>13.2. Felelősség a Technikai Hibákért</strong>
                </Card.Text>
                <Card.Text>
                    Az üzemeltető nem felelős az Interneten küldött vagy fogadott adatok elvesztéséért, működési hibákért,
                    szoftverhibákért vagy technikai problémákért.
                </Card.Text>

                <Card.Text>
                    <strong>13.3. ÁSZF Módosítása</strong>
                </Card.Text>
                <Card.Text>
                    A weboldal üzemeltetője jogosult az ÁSZF feltételeit egyoldalúan módosítani. A módosításokról a weboldalon
                    keresztül tájékoztatjuk az Ügyfeleket. Az Ügyfél a módosítást követően a Weboldal használatával elfogadja az új
                    feltételeket.
                </Card.Text>

                <Card.Text style={{ textAlign: 'left', paddingLeft: '2rem' }}>
                    <a href="általános szerződési feltételek.docx" download>
                        Töltse le az általános szerződési feltételeket 
                    </a>
                </Card.Text>
                </CardBody>
                </Card>
              </Col>
            </Row>
        </Container>


        <footer fluid className="footer" style={{ color: 'bisque', padding: 0, backgroundColor: '#333333', marginTop: '20vw' }}>
            <Row>
                <Col xs={12} md={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src='Logo.png' style={{ width: '100%', maxWidth: '200px', marginTop: '1rem' }} alt="Logo"/>
                </Col>
                <Col xs={12} md={8}>
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
                                +36/70 421 2294
                                <br />
                                +36/70 530 3055
                            </Card.Text>
                            <Card.Title className='fontSize'>
                                Email:
                            </Card.Title>
                            <Card.Text className='fontSize'>
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

export default Contract;