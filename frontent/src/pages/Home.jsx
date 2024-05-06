import React  from 'react';
import Helmet from '../components/helmet/Helmet';
import { Container,Row,Col } from 'react-bootstrap';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import ProductList from '../components/UI/ProductList';
import bed from'../assets/images/head.png';
import products from '../assets/data/products';
import { useEffect, useState } from 'react';
import counterImg from '../assets/images/count4.png';
import Clock from '../components/UI/Clock';


const Home = () => {


  

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  

  useEffect(() => {
   if(products.length){
    setTrendingProducts([...products])
   }
  }, [])

  console.log("data");
  

useEffect(()=>{
  const filteredTrendingProducts = products.filter((item) =>
   item.category === "sofa");

   const filteredBestSalesProducts = products.filter((item) =>
   item.category === "chair");  

   setTrendingProducts(filteredTrendingProducts);
   setBestSalesProducts(filteredBestSalesProducts);
  },
[]);


  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
            <div className="hero__content">
              
              <h2>Make Your Home More Minimalistic & Modern</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quas quod consequuntur magni a repudiandae beatae dolorem ea assumenda quis!</p>

              <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>   
            </div>
            </Col>


            <Col lg='6' md='6'>
              <div className="hero__image">
                <img src={bed} alt=''/>
              </div>
            </Col>


          </Row>
        </Container>  
      </section>


      <Services/>
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg='12' className="text-center">
               <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts}/>
          </Row>
        </Container>
      </section>


<section className="best__sales">
  <Container>
    <Row>
        <Col lg='12' className="text-center">
          <h2 className="section__title">Best Sales</h2>
        </Col>  


        <ProductList data={bestSalesProducts}/>
    </Row>
  </Container>
</section>
      

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg='6' md='6'>

            <div className="clock__top-content">
              <h4 style={{color:"#fff",fontSize:"7",marginBlock:"2"}}>Limited Deals</h4>
              <h3 style={{color:"#fff",fontSize:"6",marginBlock:"2"}}>Lounge Chair</h3>
            </div>
               <Clock/>
               
               <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn">
                <Link to='/shop'>Visit Store</Link>
               </motion.button>
            </Col>
            <Col lg='6' md='6' className="text-end">
              <img src={counterImg} alt=''/>
            </Col>  
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Home;