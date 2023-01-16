import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { TestimonialCard } from './TestimonialCard';

export const TestimonialItem = (props) => {
    return (
        <>
            <section className='testimonialBlock sectionPadding'>
                <Container>
                    <Swiper
                        modules={[Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={32}
                        slidesPerView={3}
                        centeredSlides={false}
                        loop={false}
                        autoplay={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 32,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 32,
                            },
                            992: {
                                slidesPerView: 2,
                                spaceBetween: 32,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 32,
                            },
                            1400: {
                                slidesPerView: 3,
                                spaceBetween: 32,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <TestimonialCard
                                name="Sherry Chris"
                                designation="CEO of BH&G Real Estate"
                                description="Although 89% of US investors are interested in incorporating real estate into their investment strategy, only 3% currently own any real estate investment assets."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                name="Claus Skaaning"
                                designation="CEO of DigiShares"
                                description="Today, non-accredited investors are largely prohibited from trading and investing in real estate. Just consider the fact that approximately 93% of all U.S.-registered commercial real estate is exclusively accessible to only accredited investors."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                name="Berkshire Hathaway"
                                designation=""
                                description="Fractional ownership is a promising investment avenue for new-age investors willing to grow their wealth. Offering high returns and low risk, it is gaining traction globally and is all set to pave the way for creating a highly liquid real estate market in the coming years."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                name="Investor Junkie"
                                designation=""
                                description="By breaking down large real estate investments into smaller, more manageable chunks, fractional investing helps to mitigate risk and increase liquidity. It allows investors to diversify their portfolio and gain exposure to real estate without committing a large amount of capital."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                name="Caleb Benedict"
                                designation="CEO of Savant"
                                description="Fractional real estate investing is democratizing the way we invest, making it accessible to a wider range of investors. It levels the playing field and allows all investors to participate in the real estate market, which was previously only open to a select few."
                            />
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </section>     
        </>
    )
}