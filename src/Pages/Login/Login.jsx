import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import SocialLogin from "../../Components/SocialLogin/SocialLogin";



const Login = () => {
    const { signIn } = useContext(AuthContext)
    // const [disable, setDisable] = useState(true)

    // For Navigate
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location)
    const from = location.state?.state?.from?.pathname || "/"
    // console.log(from)



    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value;
        console.log(email, password);

        // Signin
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    icon: 'success',
                    title: 'Well done',
                    text: 'You login successully',
                    footer: '<a href="">Thank you</a>'
                });
                // navigate('/login')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }


    const handleValidateCapcha = (e) => {
        const user_capcha_value = e.target.value;
        console.log(user_capcha_value)
        if (validateCaptcha(user_capcha_value)) {
            // setDisable(false)
        }
    }

    return (
        <>

            <Helmet>
                <title>Bistro Boss - login</title>
            </Helmet>
            <div className='mx-5 md:mx-10'>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row justify-between">
                        <div className="card flex-shrink-0 max-w-2xl md:w-4/5 lg:w-3/5">

                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Email:</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Password:</span>
                                    </label>
                                    <input type="password"
                                        name='password' placeholder="password" className="input input-bordered" required />
                                </div>

                                {/* Capcha */}
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input type="text" onBlur={handleValidateCapcha}
                                        name='capcha' placeholder="type the capcha" className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <input type="submit" value="LOGIN" className="btn bg-black text-white" />
                                </div>
                            </form>
                            <div className="divider mt-5">OR</div>
                            <SocialLogin></SocialLogin>

                            <p className="text-center text-lg  font-medium">Do you already have an account ? <Link className="text-blue-800 font-bold" to="/signup">Register</Link></p>
                        </div>

                        <img className='md:w-4/5 lg:w-1/2' src={loginImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;