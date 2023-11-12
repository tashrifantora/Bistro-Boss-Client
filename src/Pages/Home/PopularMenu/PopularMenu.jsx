import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const PopularItem = data.filter(item => item.category === 'popular')
                setMenu(PopularItem)
                console.log(PopularItem)
            })

    }, [])

    return (
        <section className="mb-12">
            <SectionTitle
                heading={'FROM OUR MENU'}
                subheading={'---Check it out---'}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center mt-8">
                <button className="btn btn-outline text-black border-0 border-b-4 uppercase">View full menu</button>
            </div>

        </section>
    );
};

export default PopularMenu;