import PropTypes from 'prop-types';

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className='flex space-x-4 items-center mx-5'>
            <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-[100px]' src={image} alt="" />
            <div>
                <h3 className='uppercase text-xl'>{name}------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500 text-xl'>${price}</p>

        </div>
    );
};
MenuItem.propTypes = {
    item: PropTypes.object,
}


export default MenuItem;