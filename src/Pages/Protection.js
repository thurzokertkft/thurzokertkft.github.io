import React, { useState, useEffect } from 'react';
import './Protection.css';
import { Navbar, Container, Nav, NavbarToggle, NavbarCollapse, Carousel, Col, Card, CardImg, CardHeader, Row, CardBody, CardText, CarouselItem, CardTitle, Table } from 'react-bootstrap';
import Footer from 'rc-footer';
import { Link } from 'react-router-dom';
import { GiHighGrass, GiSpade, GiPlantRoots  } from "react-icons/gi";
import { BsDropletFill } from "react-icons/bs";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaScrewdriverWrench } from "react-icons/fa6";



function Protection() {

    const isScrollablePage = true; // Változtasd meg ennek az értékét az adott oldal szerint

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
                <Nav.Link style={{ marginRight: '2em', color: 'bisque', fontSize: '110%' }}>
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
              <Card>
                <Card.Body>
                    <Card.Title>
                    Adatkezelési tájékoztató ügyfél részére
                    </Card.Title>
                    <Card.Text style={{ textAlign: 'left', paddingLeft: '2rem' }}>
                       <p style={{textAlign: 'center', justifyContent: 'center'}}> A személyes adatok védelme rendkívül fontos számunkra, ezért a jelen Adatkezelési tájékoztatóban ismertetjük, hogy Önről milyen személyes adatot, milyen célból és jogalappal kezelünk. Az Adatkezelési tájékoztató az Önt megillető jogokat is tartalmazza.
                       </p>
                        <br /><br />
                        <strong>1. Az Adatkezelő adatai</strong><br />
                        <strong>Adatkezelő:</strong> Thurzó-Kert Kft. (továbbiakban: Adatkezelő)<br />
                        <strong>Székhely:</strong> 3531 Miskolc Füzes utca 36.<br />
                        <strong>Cégjegyzékszám:</strong> 05 09 018959<br />
                        <strong>Adószám:</strong> 11722591-0-05<br />
                        <strong>Honlap:</strong> --------<br />
                        <strong>Email elérhetőség:</strong> thurzobence98@gmail.com
                        </Card.Text>
                        <Card.Text style={{ textAlign: 'left', paddingLeft: '2rem' }}>
                            <br /><br />
                            <strong>2. Az adatkezelés alapjául szolgáló általános jogszabályok és iránymutatások</strong>
                            <ul style={{ marginLeft: '2rem' }}>
                                <li>az Európai Parlament és a Tanács (EU) 2016/679 rendelete (2016. április 27.) a természetes személyeknek a személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok szabad áramlásáról, valamint a 95/46/EK irányelv hatályon kívül helyezéséről (GDPR)</li>
                                <li>2011. évi CXII. törvény az információs önrendelkezési jogról és az információszabadságról (Infotv.)</li>
                                <li>2013. évi V. törvény a Polgári Törvénykönyvről (Ptk.)</li>
                                <li>2007. évi CXXVII. törvény az általános forgalmi adóról (Áfatörvény)</li>
                                <li>2000. évi C. törvény a számvitelről (Számviteli tv.)</li>
                                <li>1995. évi CXIX. törvény a kutatás és a közvetlen üzletszerzés célját szolgáló név- és lakcímadatok kezeléséről (DM törvény)</li>
                                <li>2001. évi CVIII. törvény az elektronikus kereskedelmi szolgáltatások, valamint az információs társadalommal összefüggő szolgáltatások egyes kérdéseiről (Eker tv.)</li>
                                <li>2008. évi XLVIII. törvény a gazdasági reklámtevékenység alapvető feltételeiről és egyes korlátairól (Grt.)</li>
                            </ul>
                            <strong>Domain Regisztrációs Szabályzat:</strong> <a href="https://www.domain.hu/domainregisztracios-szabalyzat/" target="_blank" rel="noopener noreferrer">https://www.domain.hu/domainregisztracios-szabalyzat/</a>
                        </Card.Text>
                        <br />
                        <Card.Text style={{ textAlign: 'left', paddingLeft: '2rem' }}>
                        <strong>3. Fogalmak</strong>
                        <br />
                        
                        <strong >Személyes adat:</strong>
                        <p>
                            azonosított vagy azonosítható természetes személyre („Érintett”) vonatkozó bármely információ; azonosítható az a természetes személy, aki közvetlen vagy közvetett módon, különösen valamely azonosító, például név, szám, helymeghatározó adat, online azonosító vagy a természetes személy testi, fiziológiai, genetikai, szellemi, gazdasági, kulturális vagy szociális azonosságára vonatkozó egy vagy több tényező alapján azonosítható. Ilyen tipikus személyes adatok különösen: név, lakcím, születési hely és idő, anyja neve.
                        </p>
                        
                        <strong >Adatkezelés:</strong>
                        <p>
                            a személyes adatokon vagy adatállományokon automatizált vagy nem automatizált módon végzett bármely művelet vagy műveletek összessége, így a gyűjtés, rögzítés, rendszerezés, tagolás, tárolás, átalakítás vagy megváltoztatás, lekérdezés, betekintés, felhasználás, közlés, továbbítás, terjesztés vagy egyéb módon történő hozzáférhetővé tétel útján, összehangolás vagy összekapcsolás, korlátozás, törlés, illetve megsemmisítés.
                        </p>
                        
                        <strong >Adatkezelő:</strong>
                        <p>
                            az a természetes vagy jogi személy, közhatalmi szerv, ügynökség vagy bármely egyéb szerv, amely a személyes adatok kezelésének céljait és eszközeit önállóan vagy másokkal együtt meghatározza; ha az adatkezelés céljait és eszközeit az uniós vagy a tagállami jog határozza meg, az Adatkezelőt vagy az Adatkezelő kijelölésére vonatkozó különös szempontokat az uniós vagy a tagállami jog is meghatározhatja.
                        </p>
                        
                        <strong>Adatfeldolgozó:</strong>
                        <p>
                            az a természetes vagy jogi személy, közhatalmi szerv, ügynökség vagy bármely egyéb szerv, amely az Adatkezelő nevében személyes adatokat kezel.
                        </p>
                        
                        <strong >Címzett:</strong>
                        <p>
                            az a természetes vagy jogi személy, közhatalmi szerv, ügynökség vagy bármely egyéb szerv, akivel vagy amellyel a személyes adatot közlik, függetlenül attól, hogy harmadik fél-e.
                        </p>
                        </Card.Text>
                    <br />
                    <Card.Text style={{ textAlign: 'left', paddingLeft: '2rem' }}>
                    <strong style={{}}>4. Alapelvek</strong>
                    <br />
                    
                    Az Adatkezelő a személyes adatok kezelése során a következő alapelveket veszi figyelembe, így a személyes adatok:
                    <ol style={{ paddingLeft: '2rem', listStyleType: 'lower-alpha' }}>
                        <li>
                        kezelését jogszerűen és tisztességesen, valamint az Érintett számára átlátható módon kell végezni <b>(jogszerűség, tisztességes eljárás és átláthatóság)</b>
                        </li>
                        <br />
                        <li>
                        gyűjtése csak meghatározott, egyértelmű és jogszerű célból történjen, és azokat ne kezeljék ezekkel a célokkal össze nem egyeztethető módon; a GDPR 89. cikk (1) bekezdésének megfelelően nem minősül az eredeti céllal össze nem egyeztethetőnek a közérdekű archiválás céljából, tudományos és történelmi kutatási célból vagy statisztikai célból történő további adatkezelés <b>(célhoz kötöttség)</b>
                        </li>
                        <br />
                        <li>
                        az adatkezelés céljai szempontjából megfelelőek és relevánsak kell, hogy legyenek és a szükségesre kell korlátozódniuk <b>(adattakarékosság)</b>
                        </li>
                        <br />
                        <li>
                        pontosnak és szükség esetén naprakésznek kell lenniük; minden észszerű intézkedést meg kell tenni annak érdekében, hogy az adatkezelés céljai szempontjából pontatlan személyes adatokat haladéktalanul töröljék vagy helyesbítsék <b>(pontosság)</b>
                        </li>
                        <br />
                        <li>
                        tárolásának olyan formában kell történnie, amely az Érintettek azonosítását csak a személyes adatok kezelése céljainak eléréséhez szükséges ideig teszi lehetővé; a személyes adatok ennél hosszabb ideig történő tárolására csak akkor kerülhet sor, amennyiben a személyes adatok kezelésére a GDPR 89. cikk (1) bekezdésének megfelelően közérdekű archiválás céljából, tudományos és történelmi kutatási célból vagy statisztikai célból kerül majd sor, az e rendeletben az Érintettek jogainak és szabadságainak védelme érdekében előírt megfelelő technikai és szervezési intézkedések végrehajtására is figyelemmel <b>(korlátozott tárolhatóság)</b>
                        </li>
                        <br />
                        <li>
                        kezelését oly módon kell végezni, hogy megfelelő technikai vagy szervezési intézkedések alkalmazásával biztosítva legyen a személyes adatok megfelelő biztonsága, az adatok jogosulatlan vagy jogellenes kezelésével, véletlen elvesztésével, megsemmisítésével vagy károsodásával szembeni védelmet is ideértve <b>(integritás és bizalmas jelleg)</b>
                        </li>
                        <br />
                        <li>
                        az Adatkezelő felelős a fentieknek való megfelelésért, továbbá képesnek kell lennie e megfelelés igazolására <b>(elszámoltathatóság)</b>
                        </li>
                    </ol>
                    </Card.Text>
                    <Card xs={6} md={12} lg={12} style={{ padding: '2rem' }}>
                        <Card.Title style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                            Adatkezelési tevékenység
                        </Card.Title>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Adatkezelési tevékenység</th>
                                <th>Adatkezelői minőségben végzett adatkezelési tevékenységek</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Kapcsolatfelvétel telefonon</td>
                                <td>
                                <Table striped bordered>
                                    <tbody>
                                    <tr>
                                        <td><strong>Adatkezelés célja:</strong></td>
                                        <td>Kapcsolat felvétele telefon formájában</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Adatkezelés jogalapja:</strong></td>
                                        <td>GDPR 6. cikk (1) bekezdés b) pont: a szerződés teljesítése vagy a szerződés megkötését megelőzően az Érintett kérésére történő lépések megtételéhez szükséges</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Az Érintettek kategóriái:</strong></td>
                                        <td>Érdeklődő</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Személyes adatok köre:</strong></td>
                                        <td>Név, telefonszám, Város cím</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Adatmegőrzési idő:</strong></td>
                                        <td>A kapcsolatfelvételt követő 1. év végéig</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Adattovábbítás:</strong></td>
                                        <td>A GDPR 44-49. cikkei szerinti adattovábbítás nem történik</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Címzettek:</strong></td>
                                        <td>Az Adatkezelő Adatfeldolgozó(ka)t nem vesz igénybe</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Adatok forrása:</strong></td>
                                        <td>A személyes adatok forrása az érdeklődő</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Adatszolgáltatás módja, következménye:</strong></td>
                                        <td>Az adatok megadása szükséges. Amennyiben Ön nem adja meg a személyes adatokat, akkor az Adatkezelő nem tud kapcsolatot felvenni Önnel</td>
                                    </tr>
                                    </tbody>
                                </Table>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        </Card>
                        <Card style={{ padding: '2rem' }}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Adatkezelési tevékenység</th>
                                    <th>Panaszkezelés</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Panaszkezelés</td>
                                    <td>
                                        <Table striped bordered>
                                            <tbody>
                                                <tr>
                                                    <td><strong>Adatkezelés célja:</strong></td>
                                                    <td>Bármely szolgáltatással kapcsolatos panasz kezelése</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Adatkezelés jogalapja:</strong></td>
                                                    <td>GDPR 6. cikk (1) bekezdés c) pontja: jogi kötelezettség teljesítése: a fogyasztóvédelemről szóló 1997. évi CLV. törvény</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Az Érintettek kategóriái:</strong></td>
                                                    <td>Fogyasztó</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Személyes adatok köre:</strong></td>
                                                    <td>Név, lakcím, telefonszám, email cím, a panasz előterjesztésének helye, ideje, módja, panasz részletes leírása, fogyasztó által bemutatott iratok, dokumentumok és egyéb bizonyítékok jegyzéke</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Adatmegőrzési idő:</strong></td>
                                                    <td>Fgy.tv. 17/A. § (7) bekezdése alapján 3 év</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Adattovábbítás:</strong></td>
                                                    <td>A GDPR 44-49. cikkei szerinti adattovábbítás nem történik</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Címzettek:</strong></td>
                                                    <td>Az Adatkezelő Adatfeldolgozó(ka)t nem vesz igénybe</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Adatok forrása:</strong></td>
                                                    <td>A személyes adatok forrása a fogyasztó, mint panaszos</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Adatszolgáltatás módja, következménye:</strong></td>
                                                    <td>Az adatok megadása önkéntes. Amennyiben nem adja meg a szükséges adatokat, akkor előfordulhat, hogy panaszát az Adatkezelő nem tudja kivizsgálni</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                    <Card.Text style={{ textAlign: 'left', paddingLeft: '2rem' }}>
                        <strong>5. Az adatokhoz való hozzáférés</strong>
                        <p>
                            A személyes adatokhoz az Adatkezelő illetékes munkatársai férhetnek hozzá a szükséges mértékben a feladataik ellátása érdekében.
                        </p>

                        <strong>6. Adatbiztonsági intézkedések</strong>
                        <p>
                            Az Adatkezelő megfelelő informatikai, technikai és személyi intézkedésekkel gondoskodik arról, hogy az általa kezelt személyes adatokat védje többek között a jogosulatlan hozzáférés ellen, vagy azok jogosulatlan megváltoztatása ellen.
                        </p>
                    </Card.Text>
                    <Card.Text style={{ textAlign: 'left', paddingLeft: '2rem' }}>
                        <strong>7. Honlap adatkezelése</strong>
                        <br />
                        A Honlap sütiket használ.
                        <br />
                        <br />
                        A süti (angolul: cookie) egy fájl, amely akkor kerül az Ön számítógépére, amikor egy honlapot meglátogat. A süti egy információcsomag, amelyet a szerver küld a böngészőnek, majd minden egyes kérés alkalmával a böngésző visszaküldi ezt a szervernek a kiszolgáló által meghatározott adattartalommal. Ennek az a célja, hogy az Ön által látogatott honlap internetes beállításait elmentse, így ha Ön újra ugyanazt a honlapot keresi fel azonos eszközről, akkor az oldal már emlékezni fog a beállított paraméterekre.
                        <br />
                        <br />
                        A süti számtalan funkcióval rendelkezik. Sütit leggyakrabban hirdetések, szolgáltatások személyre szabásához, a honlap forgalmának elemzéséhez használnak. A jelenleg hatályos jogszabályok értelmében süti csak abban az esetben tárolható az Ön eszközén, ha erre feltétlenül szükség van, azaz elengedhetetlen a honlap működéséhez, ezeket nevezik „szükséges sütiknek”. Minden egyéb típusú süti használatához az Ön hozzájárulására van szükség. A honlapon aktuálisan használt sütiket a honlapra történő belépéskor felugró ablakban (pop-up ablak) tekintheti meg és állíthatja be.
                        <br />
                        <br />
                        A modern böngészők engedélyezik a süti beállítások módosítását. A böngészők egy része alapértelmezettként automatikusan elfogadja a sütiket, de ez a beállítás is megváltoztatható annak érdekében, hogy a jövőre nézve Ön megakadályozza az automatikus elfogadást. Átállítás esetén a böngésző a továbbiakban minden alkalommal felajánlja a sütik beállításának választási lehetőségét.
                        <br />
                        <br />
                        Tekintettel arra, hogy a sütik célja a weboldal használhatóságának és folyamatainak támogatása, valamint megkönnyítése, a sütik letiltása esetén nem lehet garantálni, hogy Ön képes lesz a weboldal valamennyi funkciójának teljes körű használatára. A weboldal ez esetben a tervezettől eltérően működhet a böngészőben. További részletes információk az alábbi böngészők süti beállításairól:
                        <br />
                        <br />
                        - Google Chrome<br />
                        - Firefox<br />
                        - Microsoft Internet Explorer 11<br />
                        - Microsoft Internet Explorer 10<br />
                        - Microsoft Internet Explorer 9<br />
                        - Microsoft Internet Explorer 8<br />
                        - Microsoft Edge<br />
                        - Safari
                    </Card.Text>
                    <Card style={{ padding: '2rem' }}>
                    <Card.Title style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                        Adatkezeléssel kapcsolatos Érintetti jogok és tartalmuk
                    </Card.Title>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Adatkezeléssel kapcsolatos Érintetti jog</th>
                                <th>Az adatkezeléssel kapcsolatos Érintetti jog tartalma</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tájékoztatáshoz való jog /GDPR 13-14. cikk/</td>
                                <td>
                                    Ön jogosult arra, hogy a személyes adatai megszerzésének időpontjában tájékoztatást kapjon az adatkezelés tényéről és céljairól. Az Adatkezelő olyan további információt is az Ön rendelkezésére bocsát, amelyek a tisztességes és átlátható adatkezelés biztosításához szükségesek, figyelembe véve a személyes adatok kezelésének konkrét körülményeit és kontextusát. Önt tájékoztatni kell továbbá a profilalkotás tényéről és annak következményeiről is.
                                </td>
                            </tr>
                            <tr>
                                <td>Hozzáféréshez való jog /GDPR 15. cikk/</td>
                                <td>
                                    Ön jogosult arra, hogy tájékoztatást kérjen arra vonatkozóan, hogy személyes adatainak kezelése folyamatban van-e, és ha ilyen adatkezelés folyamatban van, jogosult arra, hogy megismerje azt, hogy az Adatkezelő:<br />
                                    - milyen személyes adatait<br />
                                    - milyen jogalapon<br />
                                    - milyen adatkezelési cél miatt<br />
                                    - mennyi ideig kezeli<br />
                                    - kinek, mikor, milyen jogszabály alapján, mely személyes adataihoz biztosított hozzáférést vagy kinek továbbította a személyes adatait<br />
                                    - milyen forrásból származnak a személyes adatai (amennyiben nem Ön bocsátotta azokat az Adatkezelő rendelkezésére)<br />
                                    - alkalmaz-e automatizált döntéshozatalt, valamint annak logikáját, ideértve a profilalkotást is.
                                </td>
                            </tr>
                            <tr>
                                <td>Helyesbítéshez való jog /GDPR 16. cikk/</td>
                                <td>
                                    Ön jogosult arra, hogy kérésére az Adatkezelő az Önre vonatkozó pontatlan személyes adatait helyesbítse vagy a hiányos személyes adatait kiegészítse. Tehát Ön kérheti, hogy az Adatkezelő módosítsa valamely személyes adatát (például bármikor megváltoztathatja az e-mail címét, vagy egyéb elérhetőségét).
                                </td>
                            </tr>
                            <tr>
                                <td>Törléshez való jog („az elfeledtetéshez való jog”) /GDPR 17. cikk/</td>
                                <td>
                                    Ön jogosult arra, hogy kérésére az Adatkezelő törölje a személyes adatait, ha az alábbi indokok valamelyike fennáll:<br />
                                    - a személyes adataira már nincs szükség abból a célból, amelyből azokat gyűjtötték vagy más módon kezelték<br />
                                    - Ön visszavonja a 6. cikk (1) bekezdésének a) pontja vagy a 9. cikk (2) bekezdésének a) pontja értelmében az adatkezelés alapját képező hozzájárulását, és az adatkezelésnek nincs más jogalapja<br />
                                    - Ön a 21. cikk (1) bekezdése alapján tiltakozik az adatkezelés ellen, és nincs elsőbbséget élvező jogszerű ok az adatkezelésre, vagy Ön a 21. cikk (2) bekezdése alapján tiltakozik az adatkezelés ellen<br />
                                    - a személyes adatait jogellenesen kezelték<br />
                                    - a személyes adatait az Adatkezelőre alkalmazandó uniós vagy tagállami jogban előírt jogi kötelezettség teljesítéséhez törölni kell<br />
                                    - a személyes adatainak gyűjtésére a 8. cikk (1) bekezdésében említett, információs társadalommal összefüggő szolgáltatások kínálásával kapcsolatosan került sor.
                                </td>
                            </tr>
                            <tr>
                                <td>Korlátozáshoz való jog /GDPR 18. cikk/</td>
                                <td>
                                    Ön jogosult arra, hogy kérésére az Adatkezelő korlátozza az adatkezelést, ha az alábbi indokok valamelyike fennáll:<br />
                                    - Ön vitatja a személyes adatainak pontosságát (ez esetben a korlátozás arra az időtartamra vonatkozik, amely lehetővé teszi, hogy az Adatkezelő ellenőrizze a személyes adatok pontosságát)<br />
                                    - az adatkezelés jogellenes, és Ön ellenzi az adatok törlését, és ehelyett kéri azok felhasználásának korlátozását<br />
                                    - az Adatkezelőnek már nincs szüksége a személyes adatokra adatkezelés céljából, de Ön igényli azokat jogi igény előterjesztéséhez, érvényesítéséhez vagy védelméhez<br />
                                    - Ön a 21. cikk (1) bekezdése szerint tiltakozott az adatkezelés ellen (ez esetben a korlátozás arra az időtartamra vonatkozik, amíg megállapításra nem kerül, hogy az Adatkezelő jogos indokai elsőbbséget élveznek-e az Ön jogos indokaival szemben).
                                </td>
                            </tr>
                            <tr>
                                <td>Adathordozhatósághoz való jog /GDPR 20. cikk/</td>
                                <td>
                                    Ön jogosult arra, hogy az Önre vonatkozó, Ön által egy Adatkezelő rendelkezésére bocsátott személyes adatait tagolt, széles körben használt, géppel olvasható formátumban megkapja, továbbá jogosult arra, hogy ezeket az adatokat egy másik Adatkezelőnek továbbítsa anélkül, hogy ezt akadályozná az az Adatkezelő, amelynek a személyes adatokat a rendelkezésére bocsátotta, ha:<br />
                                    - az adatkezelés a 6. cikk (1) bekezdésének a) pontja vagy a 9. cikk (2) bekezdésének a) pontja szerinti hozzájáruláson, vagy a 6. cikk (1) bekezdésének b) pontja szerinti szerződésen alapul, és<br />
                                    - az adatkezelés automatizált módon történik.<br />
                                    Ön jogosult arra, hogy – ha ez technikailag megvalósítható – kérje a személyes adatainak Adatkezelők közötti közvetlen továbbítását.
                                </td>
                            </tr>
                            <tr>
                                <td>Tiltakozáshoz való jog /GDPR 21. cikk/</td>
                                <td>
                                    Ön jogosult arra, hogy a saját helyzetével kapcsolatos okokból bármikor tiltakozzon személyes adatainak a 6. cikk (1) bekezdésének e) vagy f) pontján alapuló kezelése ellen, ideértve az említett rendelkezéseken alapuló profilalkotást is. Ebben az esetben az Adatkezelő a személyes adatait nem kezelheti tovább, kivéve, ha az Adatkezelő bizonyítja, hogy az adatkezelést olyan kényszerítő erejű jogos okok indokolják, amelyek elsőbbséget élveznek az Ön érdekeivel, jogaival és szabadságaival szemben, vagy amelyek jogi igények előterjesztéséhez, érvényesítéséhez vagy védelméhez kapcsolódnak. Ha a személyes adatainak kezelése közvetlen üzletszerzés érdekében történik, Ön jogosult arra, hogy bármikor tiltakozzon az Önre vonatkozó személyes adatai e célból történő kezelése ellen, ideértve a profilalkotást is, amennyiben az a közvetlen üzletszerzéshez kapcsolódik.
                                </td>
                            </tr>
                            <tr>
                                <td>Hozzájárulás visszavonásának joga /GDPR 7. cikk (3) bekezdés/</td>
                                <td>
                                    Ön jogosult arra, hogy hozzájárulását bármikor visszavonja. A hozzájárulás visszavonása nem érinti a hozzájáruláson alapuló, a visszavonás előtti adatkezelés jogszerűségét. A hozzájárulás megadása előtt Önt erről tájékoztatni kell. A hozzájárulás visszavonását ugyanolyan egyszerű módon kell lehetővé tenni, mint annak megadását.
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    <Card.Title style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        Az adatkezeléssel kapcsolatos Érintetti jogorvoslati lehetőségek és tartalmuk
                    </Card.Title>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Jogorvoslati lehetőség</th>
                                <th>A jogorvoslati lehetőség tartalma</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                    <td style={{ textAlign: 'left' }}>Felügyeleti Hatóságnál történő panasztétel joga /GDPR 77. cikk/</td>
                    <td style={{ textAlign: 'left' }}>
                        Ön a személyes adatainak védelméhez fűződő joga sérelme esetén panaszt nyújthat be a következő Hatósághoz:<br />
                        - Nemzeti Adatvédelmi és Információszabadság Hatóság<br />
                        - székhely: 1055 Budapest, Falk Miksa utca 9-11.<br />
                        - levelezési cím: 1363 Budapest, Pf. 9.<br />
                        - telefon: +36 (1) 391-1400<br />
                        - email: ugyfelszolgalat@naih.hu<br />
                        - honlap: www.naih.hu
                    </td>
                </tr>
                            <tr>
                                <td>Az Adatkezelővel vagy az Adatfeldolgozóval szembeni hatékony bírósági jogorvoslathoz való jog (bírósági eljárás kezdeményezése) /GDPR 79. cikk/</td>
                                <td>
                                    Ön jogosult bírósághoz fordulni az Adatkezelő vagy Adatfeldolgozó ellen, ha a személyes adatai kezelésének jogellenességét tapasztalja. A bíróság az ügyben soron kívül jár el. Ebben az esetben szabadon eldöntheti, hogy a lakóhelye vagy a tartózkodási helye szerint illetékes törvényszéknél nyújtja-e be a keresetét. A törvényszékek elérhetősége: www.birosag.hu/torvenyszekek
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
                <Card.Text style={{ textAlign: 'left', paddingLeft: '2rem' }}>
                    <strong>8. Az Adatkezelési tájékoztató frissítése</strong>
                    <br />
                    Az Adatkezelő fenntartja a jogot, hogy a jelen Adatkezelési tájékoztatót egyoldalúan módosítsa. A jelen tájékoztató módosítására különösen abban az esetben kerülhet sor, ha arra jogszabályváltozás, adatvédelmi hatósági gyakorlat, üzleti igény, illetve egyéb körülmény miatt szükség van. Az Érintett kérésére az Adatkezelő megküldi neki a mindenkor hatályos tájékoztató egy példányát a vele leegyeztetett formában.
                    <br />
                    <br />
                    Szeged, 2024. február 12.
                </Card.Text>
                </Card.Body>
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

export default Protection;