import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img1 from '../../../assets/home/recipe1.jpg'
import img2 from '../../../assets/home/recipe2.jpg'
import img3 from '../../../assets/home/recipe3.jpg'


const Recommends = () => {
    return (
        <div className="mx-5 mb-24">
            <SectionTitle
                heading={'CHEF RECOMMENDS'}
                subheading={'---Should Try---'}
            ></SectionTitle>
            <div className="flex gap-7">
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline text-black border-0 border-b-4 mt-5">Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline text-black border-0 border-b-4 mt-5">Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline text-black border-0 border-b-4 mt-5">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Recommends;