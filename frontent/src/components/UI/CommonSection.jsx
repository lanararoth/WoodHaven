import React from 'react'
import { Container } from 'react-bootstrap';
import'../../styles/commonsection.css'


const CommonSection = ({title}) => {
  return (
    <section className="common__section">
      <Container className="text__center">
        <h1>{title}</h1>
      </Container>
    </section>
  )
}

export default CommonSection;