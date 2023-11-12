import { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    fetch('reviews.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setReviews(data)
        })

    return (
        <section className="my-20">
            <SectionTitle
                subheading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review =>
                            <SwiperSlide
                                key={review._id}>

                                <div className="mx-24 my-16 flex flex-col items-center">

                                    {/* Rating */}
                                    <Rating className="mx-auto"
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <FaQuoteLeft className="mt-12 text-7xl"></FaQuoteLeft>

                                    <p className="py-6 text-center text-lg">{review.details}</p>

                                    <h3 className="text-3xl text-orange-600">{review.name}</h3>
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;