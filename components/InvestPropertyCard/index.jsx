import Image from 'next/image'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import style from './style.module.css'

import { MainButton } from '../Button';

export const InvestPropertyCard = (props) => {
    return ( 
        <div className={`${style.prprtyCard} ${props.customClass}`}>
            <div className={`${style.prprtyImgSldr}`}>
                <div className={`${style.prprtyDividend} ${props.dividendPosition}`}>
                    <h3>+${props.dividend}</h3>
                    <p>You Received a Dividend!</p>
                </div>
                <Swiper
                    modules={[Pagination, Navigation, Scrollbar, A11y, Autoplay]}
                    navigation={true}
                    pagination={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    centeredSlides={false}
                    loop={false}
                    autoplay={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className={`${style.prprtyImg}`}>
                            <Image src={props.imgSrc1} alt={props.title} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${style.prprtyImg}`}>
                            <Image src={props.imgSrc2} alt={props.title} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${style.prprtyImg}`}>
                            <Image src={props.imgSrc3} alt={props.title} />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className={`${style.prprtyTag}`}>Investing Open</div>
            </div>
            <div className={`${style.prprtyInfo}`}>
                <div className={`${style.prprtyTtl}`}>
                    <h3>{props.title}</h3>
                    <p>{props.address}</p>
                </div>
                <div className={`${style.prprtyBtm}`}>
                    <div className='d-flex gap-3 justify-content-between'>
                        <div className={`${style.prprtyFeau}`}>
                            <p><span>Price per Share:</span><strong>${props.price}</strong></p>
                        </div>
                        <div className={`${style.prprtyFeau}`}>
                            <p><span>Remaining Shares:</span><strong>{props.share}</strong></p>
                        </div>
                    </div>
                    <div className={`${style.prprtyBtn}`}>
                        <MainButton
                            title="View Investment"
                            btnURL="/"
                            customClass="btnRadius btnSmall btnFull"
                        />
                    </div>
                </div>
                <div className={`${style.prprtyPrgrs}`}><span></span></div>
            </div>
        </div>
    )
}