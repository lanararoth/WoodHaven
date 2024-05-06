import React from 'react';
import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import '../styles/checkout.css';
import { useSelector } from 'react-redux';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



const Checkout = () => {
  
  

  const totalQty = useSelector(state=>state.cart.totalQuantity)
  const totalAmount= useSelector(state=>state.cart.totalAmount)


  return (
    <Helmet title="Checkout">
      <CommonSection title="Ckeckout"/>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Billing Information</h6>
              <Form className='billing__form'>
                <FormGroup className="form__group">
                  <input type='text' placeholder='Enter your name'/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type='email' placeholder='Enter your email'/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type='number' placeholder='Enter your number'/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type='text' placeholder='Country'/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type='text' placeholder='City'/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type='text' placeholder='Street address'/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type='text' placeholder='Postal code'/>
                </FormGroup>

                <FormGroup className="form__group">
                  <select>
                  <option value="COD">Cash on Delivery</option>
                  </select>
                </FormGroup>

              </Form>
                
                <Col lg='4'>
              
              <div className="checkout__cart">
                <h6>
                  Total Quantity : 
                  <span>{totalQty}</span>
                </h6>

                <h6>
                  Subtotal : 
                  <span>${totalAmount}</span>
                </h6>

                <h6>
                  Shipping Charge : 
                  <span>Free</span>
                </h6>

                <h4>Total Cost: 
                  <span>${totalAmount} items</span>
                </h4>

                <motion.button whileTap={{scale:1.2}} className="buy__btn auth_btn w-100">
                 <Link to='/success'>
                   Place order
                 </Link>
                </motion.button>

              </div>

                

              </Col>
                
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout;