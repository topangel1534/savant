import Head from 'next/head'
import Image from 'next/image'
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import header from '../styles/Header.module.css'
import { Header } from '../components/Navigation';
import { ThankyouContent } from '../components/Thankyou/ThankyouContent';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Savant</title>
        <meta name="description" content="Savant" />
      </Head>

      <Header
        homeActive={header.active}
        wishlist={false}
      />

      <ThankyouContent /> 

      <Footer
        theme={'white'}
      />
    </>
  )
}
