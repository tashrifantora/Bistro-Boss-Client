import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import slide7 from '../../../assets/home/slider7.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const CategorySwiper = () => {
    return (
        <section>
            <SectionTitle

                subheading={'---From 11:00am to 10:00pm---'}
                heading={'ORDER ONLINE'}

            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-3xl text-center uppercase -mt-20 text-white'>Salad</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-3xl text-center uppercase -mt-20 text-white'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-3xl text-center uppercase -mt-20 text-white'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-3xl text-center uppercase -mt-20 text-white'>Desert</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-3xl text-center uppercase -mt-20 text-white'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide7} alt="" />
                    <h3 className='text-3xl text-center uppercase -mt-11 text-white'>Ramen</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default CategorySwiper;