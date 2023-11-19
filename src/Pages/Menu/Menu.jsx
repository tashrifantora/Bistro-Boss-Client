import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss - menu</title>
            </Helmet>

            {/* Main cover */}
            <Cover
                img={menuImg}
                title={'OUR MENU'}
                subtitle={'Would you like to try a dish?'}
            ></Cover>
            <SectionTitle
                heading={'TODAYS OFFER'}
                subheading={'---Dont miss---'}
            ></SectionTitle>


            {/* Offerd item */}
            <MenuCategory items={offered}></MenuCategory>


            {/* Dessert items */}
            <MenuCategory
                items={desserts}
                title={'dessert'}
                coverImg={dessertImg}
            ></MenuCategory>


            {/* Pizza items */}
            <MenuCategory
                items={pizzas}
                title={'pizza'}
                coverImg={pizzaImg}
            ></MenuCategory>


            {/* Salad items */}
            <MenuCategory
                items={salad}
                title={'salad'}
                coverImg={saladImg}
            ></MenuCategory>


            {/* Soup items */}
            <MenuCategory
                items={soup}
                title={'Soup'}
                coverImg={soupImg}
            ></MenuCategory>


        </div>
    );
};

export default Menu;