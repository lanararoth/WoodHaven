import React, { useEffect } from 'react';
import Helmet from '../components/helmet/Helmet';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/user.css';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';


const User = () => {
  
  const user = useSelector((state) => state.user.user);
   useEffect(() => {
  console.log(user, 'user');
 }, [user])
  return (
    <Helmet>
      <section>
        <Container>
          <Row>

            <Col lg='4' className='m-auto text-center'>
              <div className="user__page">
                <h5>Hi {user} Welcome to WoodHaven</h5>
                {!user &&<motion.button whileTap={{scale:1.2}} className="buy__btn auth__btn">
                  <Link to='/login'>Login</Link>
                </motion.button>}
                
              </div>
            </Col>

            <Col lg='3'>
              
            </Col>
            
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default User;