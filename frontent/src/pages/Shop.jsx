import React, { useState } from 'react';
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/helmet/Helmet';
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/shop.css';
import products from '../assets/data/products';
import ProductList from '../components/UI/ProductList';



const Shop = () => {

const [productsData,setProductsData]=useState(products)


const handleFiller=e=>{

  
  const filterValue=e.target.value
      if(filterValue==='sofa'){
        const filteredProducts=products.filter(item=>item.category==='sofa'
      );

      setProductsData(filteredProducts);
      
     }

     if(filterValue==='bed'){
      const filteredProducts=products.filter(item=>item.category==='bed'
    );

    setProductsData(filteredProducts);
    
   }  

   if(filterValue==='chair'){
    const filteredProducts=products.filter(item=>item.category==='chair'
  );

  setProductsData(filteredProducts);
  
 }  

 if(filterValue==='table'){
  const filteredProducts=products.filter(item=>item.category==='table'
);

setProductsData(filteredProducts);

} 

if(filterValue==='kids'){
  const filteredProducts=products.filter(item=>item.category==='kids'
);

setProductsData(filteredProducts);

}  

if(filterValue==='mirror'){
  const filteredProducts=products.filter(item=>item.category==='mirror'
);

setProductsData(filteredProducts);

}  

if(filterValue==='swingchair'){
  const filteredProducts=products.filter(item=>item.category==='swingchair'
);

setProductsData(filteredProducts);

}  

if(filterValue==='outdoor'){
  const filteredProducts=products.filter(item=>item.category==='outdoor'
);

setProductsData(filteredProducts);

}  

if(filterValue==='shelf'){
  const filteredProducts=products.filter(item=>item.category==='shelf'
);

setProductsData(filteredProducts);

}  

};


const handleSearch = e =>{
  const searchTerm = e.target.value 

  const searchedProducts = products.filter(item=>
    item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchedProducts)
    

}


  return (
    <Helmet title='Shop'>
      <CommonSection title='Products'/>

      <section>
        <Container>
          <Row>
           <div className="filter__set">
            <Col lg='3' md='3'>
            <div className="filter__widget">
                  <select onChange={handleFiller}>
                  <option>Filter By Category</option>
                  <option value="bed">Bed</option>
                  <option value="chair">Chair</option>
                  <option value="shelf">Shelf</option>
                  <option value="mirror">Mirror</option>
                  <option value="kids">Kids</option>
                  <option value="outdoor">Outdoor</option>
                  <option value="sofa">Sofa</option>
                  <option value="swingchair">Swing Chair</option>
                  <option value="table">Table</option>
                </select>
              </div>
            </Col>
            
            <Col lg='6' md='6'>
              <div className="search__box">
                <input type="text" placeholder="Search...." onChange={handleSearch}/>
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
               
            </Col>
          </div> 
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              productsData.length===0? (<h1 className='text-center'>Oops!No Products Are Found</h1>)
              :(<ProductList data ={productsData}/>)
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop; 