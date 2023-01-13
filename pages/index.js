import Head from 'next/head'
import Image from 'next/image'
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';

import header from '../styles/Header.module.css'
import { Header } from '../components/Navigation';
import { HomeBanner } from '../components/HomeBanner';
import { InvestItem } from '../components/InvestItem';
import { InvestPropertyItem } from '../components/InvestPropertyItem';
import { InvestMarketsItem } from '../components/InvestMarketsItem';
import { TestimonialItem } from '../components/TestimonialItem';
import { FaqItem } from '../components/FaqItem';
import { NewsletterItem } from '../components/NewsletterItem';
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
      />

      <HomeBanner />

      <InvestItem />

      <InvestPropertyItem /> 

      <InvestMarketsItem />
      
      <TestimonialItem />
      
      <FaqItem />

      <NewsletterItem />

      <Footer />
    </>
  )
}
