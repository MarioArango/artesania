'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { Card } from 'antd'
import imagen1 from 'public/assets/imagen1.jpeg'
import imagen2 from 'public/assets/imagen2.jpeg'
import imagen3 from 'public/assets/imagen3.jpeg'
import imagen4 from 'public/assets/imagen4.jpeg'
import imagen5 from 'public/assets/imagen5.jpeg'
import imagen6 from 'public/assets/imagen6.jpeg'
import imagen7 from 'public/assets/imagen7.jpeg'
import imagen8 from 'public/assets/imagen8.jpeg'
import imagen9 from 'public/assets/imagen9.jpeg'
import imagen10 from 'public/assets/imagen10.jpeg'
import imagen11 from 'public/assets/imagen11.jpeg'
import imagen12 from 'public/assets/imagen12.jpeg'
import imagen13 from 'public/assets/imagen13.jpeg'
import imagen14 from 'public/assets/imagen14.jpeg'
import imagen15 from 'public/assets/imagen15.jpeg'
import imagen16 from 'public/assets/imagen16.jpeg'
import imagen17 from 'public/assets/imagen17.jpeg'
import imagen18 from 'public/assets/imagen18.jpeg'
import imagen19 from 'public/assets/imagen19.jpeg'
import imagen20 from 'public/assets/imagen20.jpeg'
import imagen21 from 'public/assets/imagen21.jpeg'
import imagen22 from 'public/assets/imagen22.jpeg'
import imagen23 from 'public/assets/imagen23.jpeg'
import imagen24 from 'public/assets/imagen24.jpeg'
import imagen25 from 'public/assets/imagen25.jpeg'
import imagen26 from 'public/assets/imagen26.jpeg'
import imagen27 from 'public/assets/imagen27.jpeg'
import imagen28 from 'public/assets/imagen28.jpeg'
import imagen29 from 'public/assets/imagen29.jpeg'
import imagen30 from 'public/assets/imagen30.jpeg'

const { Meta } = Card;

export default function Home() {

  const listImages = [
    {
      img: imagen1,
      title: '',
      description: ''
    },
    {
      img: imagen2,
      title: '',
      description: ''
    },
    {
      img: imagen3,
      title: '',
      description: ''
    },
    {
      img: imagen4,
      title: '',
      description: ''
    },
    {
      img: imagen5,
      title: '',
      description: ''
    },
    {
      img: imagen6,
      title: '',
      description: ''
    },
    {
      img: imagen7,
      title: '',
      description: ''
    },
    {
      img: imagen8,
      title: '',
      description: ''
    },
    {
      img: imagen9,
      title: '',
      description: ''
    },
    {
      img: imagen10,
      title: '',
      description: ''
    },
    {
      img: imagen11,
      title: '',
      description: ''
    },
    {
      img: imagen12,
      title: '',
      description: ''
    },
    {
      img: imagen13,
      title: '',
      description: ''
    },
    {
      img: imagen14,
      title: '',
      description: ''
    },
    {
      img: imagen15,
      title: '',
      description: ''
    },
    {
      img: imagen16,
      title: '',
      description: ''
    },
    {
      img: imagen17,
      title: '',
      description: ''
    },
    {
      img: imagen18,
      title: '',
      description: ''
    },
    {
      img: imagen19,
      title: '',
      description: ''
    },
    {
      img: imagen20,
      title: '',
      description: ''
    },
    {
      img: imagen21,
      title: '',
      description: ''
    },
    {
      img: imagen22,
      title: '',
      description: ''
    },
    {
      img: imagen23,
      title: '',
      description: ''
    },
    {
      img: imagen24,
      title: '',
      description: ''
    },
    {
      img: imagen25,
      title: '',
      description: ''
    },
    {
      img: imagen26,
      title: '',
      description: ''
    },
    {
      img: imagen27,
      title: '',
      description: ''
    },
    {
      img: imagen28,
      title: '',
      description: ''
    },
    {
      img: imagen29,
      title: '',
      description: ''
    },
    {
      img: imagen30,
      title: '',
      description: ''
    },
  ]

  return (
    <div className={styles.container}>
      {
        listImages.map(item => (
          <Card
            hoverable
            className={styles.itemshort}
            cover={
              <Image 
                src={item.img} 
                alt={item.title} 
                priority 
                style={{objectFit: 'cover', width: '300px', height: '400px'}}
              />
            }
          >
            <Meta title={item.title} description={<p className='gx-text-disabled'>{item.description}</p>} />
          </Card>
        ))
      }
    </div>
  )
}
