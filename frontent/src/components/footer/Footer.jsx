import React from 'react';
import './footer.css';
import { Container, Row ,Col ,ListGroup ,ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/clean-house.png';

const Footer = () => {

  const Year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4'>
          <div className="logo" >
            <img src={logo} alt="" style={{width:"30px",height:"30px"}}/>
            <div>
                <h1 className='fw-100 fs-5'>WoodHaven</h1>
            </div>
            
          </div> 
            <p className="footer_text mt-4" style={{color:"#000"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Ea quas,
               vitae ullam laudantium dolor sed. Dolorum, culpa quae et rem non,
               cumque minus dolores excepturi iure esse repudiandae itaque molestias.
            </p> 
          </Col>

          <Col lg='3'>
            <div className="footer__quick-links">
              <h4 className='quick__links-title'>Top Categories</h4>
              <ListGroup>
      
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Chair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Bed</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mirror</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Shelf</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Outdoor</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Kids</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Swing Chair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Table</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Sofa</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='2'>
          <div className="footer__quick-links">
              <h4 className='quick__links-title'>Useful Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>   

          <Col lg='3'>
          <div className="footer__quick-links">
              <h4 className='quick__links-title'>Contact</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>456 Kozikode Kerala India</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-phone-line"></i></span>
                  <p>+91 9048106907</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-mail-line"></i></span>
                  <p>woodhaven007@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col> 

          <Col lg='12'>
            <p className="footer__copyright">
              Copyright {Year} developed by ICT group 3 . All rights reserved.</p>
          </Col>         
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;