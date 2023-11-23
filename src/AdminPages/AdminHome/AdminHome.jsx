import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { IoWalletOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { SiCodechef } from "react-icons/si";


const AdminHome = () => {
    const { user } = useAuth();
    const axiousSecure = useAxiosSecure();

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiousSecure.get('/admin-stats');
            return res.data
        }
    })
    return (
        <div>
            <h2 className="text-4xl mb-10">Hi, Welcome
                <span>{user.displayName ? user.displayName : "Back"}</span>
            </h2>


            <div>
                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <IoWalletOutline className="text-4xl"></IoWalletOutline>
                        </div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUsers className="text-4xl"></FaUsers>
                        </div>
                        <div className="stat-title">Customers</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <CiDeliveryTruck className="text-4xl"></CiDeliveryTruck>
                        </div>
                        <div className="stat-title">Menu Items</div>
                        <div className="stat-value">{stats.menuItems}</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <SiCodechef className="text-4xl"></SiCodechef>
                        </div>
                        <div className="stat-title">Orders</div>
                        <div className="stat-value">{stats.orders}</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default AdminHome;