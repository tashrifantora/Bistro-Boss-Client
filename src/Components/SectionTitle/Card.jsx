import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";



const Card = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth()
    const navigate = useNavigate();
    const location = useLocation()
    // console.log(location)
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart()

    const handleAddToCart = (food) => {
        if (user && user.email) {
            // TODO:- send cart  item to database leter
            console.log(user.email, food)
            const cartItem = {
                menuId: _id,
                email: user.email,
                name, image, price
            }

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    const data = res.data
                    if (data.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Well done',
                            text: `${name} added successfully`,
                            footer: '<a href="">Thank you</a>'
                        });

                        // REfetch the cart to upadate the items count in NavBar
                        refetch()
                    }
                })

        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { form: location.pathname } });
                }
            });
        }
    }

    return (
        <div className="card bg-base-100 shadow-xl relative">
            <p className="bg-slate-900 w-12 p-1 rounded text-white absolute top-14 right-16">${price}</p>
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div
                    onClick={() => handleAddToCart(item)}
                    className="card-actions">
                    <button className="btn btn-outline text-black border-0 border-b-4 mt-5">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;