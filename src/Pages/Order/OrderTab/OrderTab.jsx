import Card from "../../../Components/SectionTitle/Card";


const OrderTab = ({ items }) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                items.map(item => <Card key={item._id} item={item}></Card>)
            }
        </div>
    );
};

export default OrderTab;