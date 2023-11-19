import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="pt-8">
            {title && <Cover
                img={coverImg}
                title={title}
                subtitle={'Would you like to try a dish?'}
            ></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`} className="flex justify-center">
                <button className="btn btn-lg btn-outline text-black border-0 border-b-4 mt-5">Order Now</button>
            </Link>

        </div>
    );
};

export default MenuCategory;