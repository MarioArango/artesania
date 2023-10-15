"use client";
import { useState } from 'react'
import NextButton from "@/components/NextButton";
import Contact from "@/components/Contact";
import { Col, Row } from 'antd';
import "./index.scss";

export default function Header() {

  const [ viewContact, setViewContact ] = useState<boolean>(false)

  const handleViewContact = () => {
    setViewContact(true)
  }

  const handleCancelContact = () => {
    setViewContact(false)
  }


  return (
    <nav className="container-navigation">
      <Row gutter={[12,12]}>
      <Col xs={24} sm={18} md={18}>
        <h2 style={{color: '#6A9C89'}}> Viste la esencia de cada tejido, abraza la tradición en cada cerámico</h2>
      </Col>
      <Col xs={24} sm={6} md={6} className='gx-text-right'>
        <NextButton text="Contáctanos" type="primary" onClick={handleViewContact}/>
      </Col>
      </Row>
      <Contact viewContact={viewContact} handleCancelContact={handleCancelContact}/>
    </nav>
  )
}
