import React, { useEffect,  useState } from 'react'
import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import products from '../assets/data/products';
import '../styles/productdetails.css';
import { motion } from 'framer-motion';
import ProductList from '../components/UI/ProductList';
import { cartActions } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const ProductDetails = () => {

  const [tab,setTab] = useState('desc');

  
  const dispatch=useDispatch()

  

  const{id} = useParams()
  
  console.log(id);

  const product = products.find(item=> item.id === id)

  console.log("imgUrl");
 
  console.log("product") ;

  
  
  const {imgUrl,productName,price,avgRating,shortDesc,reviews,description,category} = product;

  const relatedProducts = products.filter(item=> item.category===category)

  

  const addToCart=()=>{
    dispatch(cartActions.addItem({
      id,
      image:imgUrl,
      productName,
      price:price,
    })
   );

   toast.success('Product added successfully')
  };

  

  useEffect(()=>{
    window.scrollTo(0,0)
  },
  [product]
)

  return (
    <Helmet title={productName}>
      <CommonSection title={productName}/>

        <section className='pt-0'>
           <Container>
            <Row>
              <Col lg="6">
                <img src={imgUrl} alt=''/>
              </Col>

              <Col lg="6">
                <div className="product__details">
                  <h2>{productName}</h2>
                  <div className="product__rating d-flex align-items-center gap-5 mb-3">
                    <div>
                      <span>
                        <i class='ri-star-s-fill'></i>
                        </span>
                      <span>
                        <i class='ri-star-s-fill'></i>
                        </span>
                      <span>
                        <i class='ri-star-s-fill'></i>
                        </span>
                      <span>
                        <i class='ri-star-s-fill'></i>
                        </span>
                      <span>
                        <i class='ri-star-half-s-fill'></i>
                        </span>
                    </div>

                     <p>
                      (<span>{avgRating}</span>ratings)
                      </p>
                  </div>

                  <div className='d-flex align-items-center gap-5'>
                  <span className='product__price'>${price}</span>
                  <span>Category:{category}</span>
                  </div>

                  <p className='mt-3'>{shortDesc}</p>

                  <motion.button whileTap={{scale:1.2}} className="buy__btn" onClick={addToCart}>Add to Cart</motion.button>


                </div>
              </Col>

            </Row>
           </Container>        
        </section> 

        <section>
          <Container>
            <Row>
              <Col lg='12'>
                <div className="tab__wrapper d-flex align-items-center gap-5">
                  <h6 className={`${tab==='desc'? 'active__tab':""}`} onClick={()=>setTab('desc')}>
                    Description</h6>
                  <h6 className={`${tab==='rev'? 'active__tab':""}`} onClick={()=>setTab('rev')}>
                    Reviews({reviews.length})</h6>
                </div>

                 
              {tab==="desc" ? (

                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
                ):( 
                <div className='product__review mt-5'>
                  <div className="review__wrapper">
                    <ul>
                      {
                        reviews?.map((item,index)=>(
                          <li kew={index} className='mb-4'>
                            <h6>Tom Cruise</h6>
                            <span>
                              {item.rating} (rating)
                            </span>
                            <p>
                              {item.text}
                            </p>
                          </li>
                        ))
                      }
                    </ul>
                                                             
                    </div>

                  </div>
                
               )}
              </Col>

              <Col lg='12' className='mt-5'>
                <h2 className="related__title"> You might also like </h2>
              </Col>

              <ProductList data={relatedProducts}/>

            </Row>
          </Container>
        </section>
    </Helmet>
  )
}

export default ProductDetails;