import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import CallUs from "../CallUs/CallUs";
import CategorySwiper from "../CategorySwiper/CategorySwiper";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss - home</title>
            </Helmet>
            <Banner></Banner>
            <CategorySwiper></CategorySwiper>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home; <h1>This is home</h1>