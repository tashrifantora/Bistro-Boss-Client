import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import registerImg from '../../assets/others/authentication1.png'
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
    const { createUser, UpdateUserProfile } = useContext(AuthContext)
    // For Navigate
    const navigate = useNavigate()
    // const location = useLocation()
    const axiosPublic = useAxiosPublic()




    const onSubmit = (event) => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const photo = from.photo.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log({ name, photo, email, password })


        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)

                UpdateUserProfile(name, photo)
                    .then(() => {

                        const userInfo = {
                            name: name,
                            email: email,
                            photoURL: photo
                        }
                        console.log(userInfo)

                        axiosPublic.post('/user', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user add')
                                    from.reset()
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Well done',
                                        text: 'You login successully',
                                        footer: '<a href="">Thank you</a>'
                                    });
                                }
                            })
                    })
                    .catch(error => {
                        console.log(error)
                    })
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })

    }


    return (
        <>
            <Helmet>
                <title>Bistro Boss - signup</title>
            </Helmet>
            <div className='mx-5 md:mx-10'>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row justify-between">

                        <div className="card flex-shrink-0 max-w-2xl  md:w-4/5 lg:w-3/5">

                            <form onSubmit={onSubmit} className="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Name:</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Photo:</span>
                                    </label>
                                    <input type="photo" name='photo' placeholder="photo URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Email:</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Password:</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-black text-white">Register</button>
                                </div>

                                <div className="divider mt-5">OR</div>
                            </form>

                            <SocialLogin></SocialLogin>

                            <p className="text-center text-lg  font-medium mt-4">Do you already have an account ? <Link className="text-blue-800 font-bold" to="/login">Login</Link></p>
                        </div>

                        <img className='md:w-4/5 lg:w-1/2' src={registerImg} alt="" />
                    </div>
                </div>
            </div>

        </>

    );
};

export default SignUp;