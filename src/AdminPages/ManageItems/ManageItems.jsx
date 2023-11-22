import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { CiEdit } from "react-icons/ci";
import useMenu from "../../Hooks/useMenu";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [menu, refetch] = useMenu([]);
    const axiosSecure = useAxiosSecure()

    const handleDelete = (item) => {
        console.log(item._id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "seccess",
                        text: `${item.name} deleted successfully`,
                        icon: "success"
                    });

                }


            }
        });
    }
    return (
        <div>
            <SectionTitle
                heading={"MANAGE ALL ITEMS"}
                subheading={"---Hurry Up!---"}
            ></SectionTitle>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white">
                            <tr>
                                <th>No</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, idx) => <tr key={item._id}>
                                    <td>
                                        {idx + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="food" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>${item.price}</td>


                                    <td>
                                        <Link to={`/dashboard/update-item/${item._id}`}>
                                            <CiEdit className="text-xl bg-[#D1A054] h-[40px] w-[50px] p-2 rounded text-white cursor-pointer"></CiEdit>
                                        </Link>
                                    </td>



                                    <td><FaTrash
                                        onClick={() => handleDelete(item)}
                                        className="text-xl  bg-[#B91C1C] h-[40px] w-[50px] p-2 rounded text-white cursor-pointer"></FaTrash></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default ManageItems;