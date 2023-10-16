"use client";
import { Col, Row, Typography } from 'antd';
import "./index.scss";
import facebook from '../../../../public/assets/facebook.png'
import whatsapp from '../../../../public/assets/whatsapp.png'
import instagram from '../../../../public/assets/instagram.png'
import logo from '../../../../public/assets/logo.png'
import Image from 'next/image';

const { Title } = Typography

export default function Header() {
  return (
    <nav className="container-navigation gx-box-shadow-base">
        <Row gutter={[12,12]} className='gx-d-flex gx-justify-content-between gx-align-items-center'>

          <Col xs={24} sm={15} className='gx-d-flex gx-justify-content-start gx-align-items-center'>
            <Image src={logo} alt='Logo' width={160} height={140}/>
            <div>
              <h1 className='title'>HEFZI BÁ & BEULA</h1>
              <h1 className='title'>INDUMENTARIA</h1>
              <h1 className='subtitle'>de José Angel Cieza Moreto</h1>
            </div>
          </Col>

          <Col xs={24} sm={9}>
            <a
              href='' 
              target='_blank' 
              className='link gx-link gx-font-weight-bold gx-text-primary'
              style={{color: '#9A4444', marginBlockEnd: '5px'}}
            >
              <Image src={facebook} alt='Facebook'/>
              <p className='gx-ml-2'>Siguenos en Facebook</p>
            </a>
            <a 
              href='https://wa.me/5491155058191'
              target='_blank'
              className='link gx-link gx-font-weight-bold gx-text-primary'
              style={{color: '#9A4444', marginBlockEnd: '5px'}}
            >
              <Image src={whatsapp} alt='Whatsapp'/> 
              <p className='gx-ml-2'>Contáctanos en Whatsapp</p>
            </a>
            <a 
              href=''
              target='_blank'
              className='link gx-link gx-font-weight-bold gx-text-primary'
              style={{color: '#9A4444', marginBlockEnd: '5px'}}
            >
              <Image src={instagram} alt='Instagram'/>
              <p className='gx-ml-2'>Contactanos en Whatsapp</p>
            </a>
          </Col>
        </Row>
    </nav>
  )
}
