import React from 'react';
import '../styles/cart.css'
import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {

  const cartItems = useSelector(state=>state.cart.cartItems);

  console.log(cartItems);

  const totalAmount = useSelector((state)=> state.cart.totalAmount);

  console.log(totalAmount);

  return (
    <Helmet title='Cart'>
      <CommonSection title='Shopping Bag'/>
      <section>
       <Container>
         <Row>
           <Col lg='9'>

            {
              cartItems.length===0? (<h2 className='fs-4 text-center'>No item added to the cart</h2>) : 
              ( <table className='table bordered'>
              <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Delete</th>
              </tr>
              </thead>
              
              <tbody>
                {
                 cartItems.map((item,index)=>(
                 <Tr item={item} key={index}/>
                  ))
                }
              </tbody>
            </table>)
            }
             
             <Col lg='3'>
            <div>
              <h6 className='d-flex align-items-center justify-content-between'>
                Subtotal
                <span className='fs-4 fw-bold'>${totalAmount}</span>
                </h6>
             
              <p>Tax and shipping charge will calculate in checkout </p>
              <div>
                <button className="buy__btn"><Link to='/shop'>Continue Shopping</Link>
                </button>

                <button className="buy__btn"><Link to='/checkout'>Checkout</Link>
                </button>
              </div>
            </div>
          </Col>
         </Col>
        
         </Row>
        </Container>
      </section> 
    </Helmet>
  )
}


const Tr=({item})=>{

  const dispatch=useDispatch()

  const deleteProduct=()=>{
    dispatch(cartActions.deleteItem(item.id))
  }
  console.log("price")

  return( 
  <tr>
  <td><img src={item.imgUrl} alt=''/></td>
  <td>{item.productName}</td>
  <td>${item.price}</td>
  <td>{item.quantity}</td>
  <td><motion.i whileTap={{scale:1.2}} onClick={deleteProduct} class='ri-delete-bin-line'></motion.i></td>
 </tr>
  )
}


export default Cart;