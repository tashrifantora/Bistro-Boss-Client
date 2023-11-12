import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subheading }) => {
    return (
        <div className='md:w-4/12 mx-auto my-5 mt-12'>
            <h3 className='text-yellow-500 text-center text-lg mb-4'>{subheading}</h3>
            <p className='text-center text-4xl border-y-4 py-4'>{heading}</p>

        </div>
    );
};
SectionTitle.propTypes = {
    heading: PropTypes.string,
    subheading: PropTypes.string
}


export default SectionTitle;