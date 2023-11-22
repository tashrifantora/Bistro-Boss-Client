import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import { ImSpoonKnife } from "react-icons/im";
import { MdOutlineRateReview } from "react-icons/md";

import useAdmin from "../../Hooks/useAdmin";



const Dashboard = () => {

    const [cart] = useCart()

    // TODO:
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">

            {/* Dashboard side bar */}
            <div className="w-64 bg-[#D1A054] min-h-screen">
                <ul className="menu p-4">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to='/dashboard/cart'><FaHome className="text-xl"></FaHome>Admin Home</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/add-items'><ImSpoonKnife className="text-xl"></ImSpoonKnife>Add Items</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/manage-item'><FaList className="text-xl"></FaList>Manage Item</NavLink>
                                </li>

                                <li>

                                    <NavLink to='/dashboard/mybookings'><FaBook className="text-xl"></FaBook>Manage Bookings</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/users'><FaUser className="text-xl"></FaUser>All User</NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink to='/dashboard/cart'><FaHome className="text-xl"></FaHome>User Home</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard'><FaCalendar className="text-xl"></FaCalendar>--</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/review'><FaShoppingCart className="text-xl"></FaShoppingCart>My Cart ({cart.length})</NavLink>
                                </li>

                                <li>

                                    <NavLink to='/dashboard/mybookings'><MdOutlineRateReview className="text-xl"></MdOutlineRateReview>Add a review</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/payment-history'><FaList className="text-xl"></FaList>Payment History</NavLink>
                                </li>
                            </>
                    }




                    <div className="divider"></div>

                    {/* User */}

                    <li>
                        <NavLink to='/'><FaHome className="text-xl"></FaHome>Home</NavLink>
                    </li>

                    <li>
                        <NavLink to='/order/salad'><FaSearch className="text-xl"></FaSearch>Menu</NavLink>
                    </li>

                    <li>
                        <NavLink to='/order/contact'><FaEnvelope className="text-xl"></FaEnvelope>Contact</NavLink>
                    </li>

                </ul>

            </div>


            {/* Dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;