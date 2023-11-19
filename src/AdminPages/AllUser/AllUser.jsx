import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";


const AllUser = () => {
    const axiosSecure = useAxiosSecure()


    // TRhis is the way of geting data fro backend with (Tan stack & Axios)
    const { data: users = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/user');
            return res.data;
        }
    })


    // Admin Releted
    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/user/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        icon: 'success',
                        title: 'Well done',
                        text: `${user.name} is an admin now!!`,
                        footer: '<a href="">Thank you</a>'
                    });
                }
            })
    }


    // Delete Operation
    const handleDelete = (user) => {
        console.log(user)
        Swal.fire({
            title: "Are you sure!!",
            text: "You want to delete?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/user/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Well done',
                                text: `Deleted successfully`,
                                footer: '<a href="">Thank you</a>'
                            });
                            refetch()
                        }
                    })
            }
        });
    }
    return (
        <div>
            <SectionTitle
                heading={'MANAGE ALL USERS'}
                subheading={'---How many??---'}
            ></SectionTitle>
            <div className="flex">
                <h2 className="text-3xl">All users</h2>
                <h2 className="text-3xl">Total users: {users.length}</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>

                                    {user.role === 'admin' ? "Admin" : <FaUsers
                                        onClick={() => handleMakeAdmin(user)}
                                        className="text-xl h-[40px] w-[40px] p-1 rounded bg-[#D1A054] cursor-pointer "></FaUsers>
                                    }</td>

                                {/* Delete */}
                                <td
                                    onClick={() => handleDelete(user)}
                                    className=""><FaTrash className="text-xl  bg-[#B91C1C] h-[40px] w-[50px] p-2 rounded text-white cursor-pointer"></FaTrash></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;