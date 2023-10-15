'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { Card } from 'antd'
import image1 from 'public/assets/image1.jpeg'
import image2 from 'public/assets/image2.jpeg'
import image3 from 'public/assets/image3.jpeg'
import image4 from 'public/assets/image4.jpeg'
import image5 from 'public/assets/image5.jpeg'
import image6 from 'public/assets/image6.jpeg'
import image7 from 'public/assets/image7.jpeg'
import image8 from 'public/assets/image8.jpeg'
import image9 from 'public/assets/image9.jpeg'
import image10 from 'public/assets/image10.jpeg'
import image11 from 'public/assets/image11.jpeg'
import image12 from 'public/assets/image12.jpeg'
import image13 from 'public/assets/image13.jpeg'
import image14 from 'public/assets/image14.jpeg'
import image15 from 'public/assets/image15.jpeg'
import image16 from 'public/assets/image16.jpeg'

const { Meta } = Card;

export default function Home() {
  return (
    <div className={styles.container}>
      <Card
        hoverable
        className={styles.itemshort}
        cover={
          <Image 
            src={image1} 
            alt='image1' 
            priority 
            style={{objectFit: 'contain', width: '100%', height: '100%'}}
          />
        }
      >
        <Meta title="Mochilas artesanales" description={<p className='gx-text-disabled'>Elaboradas con material de los andes.</p>} />
      </Card>
      <Card
        hoverable
        className={styles.itemshort}
        cover={
          <Image 
            src={image3} 
            alt='image3' 
            priority 
            style={{objectFit: 'contain', width: '100%', height: '100%'}}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        className={styles.itemshort}
        cover={
          <Image 
            src={image4} 
            alt='image4' 
            priority 
            style={{objectFit: 'contain', width: '100%', height: '100%'}}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        className={styles.itemshort}
        cover={
          <Image 
            src={image7} 
            alt='image7'
            priority 
            style={{objectFit: 'contain', width: '100%', height: '100%'}}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        className={styles.itemshort}
        cover={
          <Image 
            src={image8} 
            alt='image8'
            priority 
            style={{objectFit: 'contain', width: '100%', height: '100%'}}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        className={styles.itemshort}
        cover={
          <Image 
            src={image9} 
            alt='image9'
            priority 
            style={{objectFit: 'contain', width: '100%', height: '100%'}}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        className={styles.itemshort}
        cover={
          <Image 
            src={image10} 
            alt='image10'
            priority 
            style={{objectFit: 'contain', width: '100%', height: '100%'}}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        className={styles.itemshort}
        cover={
          <Image 
            src={image11} 
            alt='image11'
            priority 
            style={{objectFit: 'contain', width: '100%', height: '100%'}}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        className={styles.itemshort}
        cover={
          <Image 
            src={image16} 
            alt='image16'
            priority 
            style={{objectFit: 'contain', width: '100%', height: '100%'}}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        className={styles.itemlong}
        cover={
          <Image 
            src={image2} 
            alt='image2'
            priority 
            style={{objectFit: 'contain', width: '100%', height: '100%'}}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        className={styles.itemlong}
        cover={
          <Image 
            src={image5} 
            alt='image5'
            priority 
            style={{objectFit: 'contain', width: '100%', height: '100%'}}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        className={styles.itemlong}
        cover={
          <Image 
            src={image6} 
            alt='image6'
            priority 
            style={{objectFit: 'contain', width: '100%', height: '100%'}}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        className={styles.itemlong}
        cover={
          <Image 
            src={image12} 
            alt='image12'
            priority 
            style={{objectFit: 'contain', width: '100%', height: '100%'}}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        className={styles.itemlong}
        cover={
          <Image 
            src={image13} 
            alt='image13'
            priority 
            style={{objectFit: 'contain', width: '100%', height: '100%'}}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        className={styles.itemlong}
        cover={
          <Image 
            src={image14} 
            alt='image14'
            priority 
            style={{objectFit: 'contain', width: '100%', height: '100%'}}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        className={styles.itemlong}
        cover={
          <Image 
            src={image15} 
            alt='image15'
            priority 
            style={{objectFit: 'contain', width: '100%', height: '100%'}}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  )
}
