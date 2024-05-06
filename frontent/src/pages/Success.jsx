import React from 'react'
import Helmet from '../components/helmet/Helmet';
import { Col, Container, Row } from 'react-bootstrap';
import tick from '../assets/images/checked.png';
import '../styles/success.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Success = () => {
  return (
    <Helmet>
        <section>
            <Container>
                <Row>
                    <Col lg='4' className='m-auto text-center'>
                       <div className="order__success">

                        <span>
                            <img src={tick} alt=''/>
                        </span>

                        <br/>

                        <h6>Order Placed Successfully!</h6>

                        <br/>
                        <br/>

                        <motion.p whileHover={{scale:0.9}}>
                            <Link to='/shop'>Continue Shopping</Link>
                        </motion.p>
                        
                        <motion.p whileHover={{scale:0.9}}>
                            <Link to='/home'>Go to home</Link>
                        </motion.p>
                        
                       </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
  )
}

export default Success;