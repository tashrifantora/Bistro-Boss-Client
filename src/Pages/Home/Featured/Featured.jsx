import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white my-10 p-8">
            <SectionTitle
                subheading={'---Check it out---'}
                heading={'FROM OUR MENU '}
            ></SectionTitle>

            <div className="md:flex justify-center items-center py-20 px-5 bg-slate-500  bg-opacity-60 w-full">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 ">
                    <p>March 20, 2023</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi cupiditate, dolor tempora asperiores repudiandae vero dolores ipsum numquam reiciendis nobis quasi assumenda fugiat. Delectus veniam ab expedita consequuntur! Saepe nostrum tenetur amet totam dicta facilis molestias dolorem ipsam quia aliquid perferendis aspernatur quidem omnis doloribus, incidunt aperiam consectetur architecto?</p>
                    <button className="btn btn-outline text-white border-0 border-b-4 mt-5">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;