import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import googleLogo from '../../assets/icon/googleLogo.png'

const SocialLogin = () => {
    const { GoogleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        GoogleSignIn()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }

                // Send data to back end
                axiosPublic.post('/user', userInfo)
                    .then(res => {
                        console.log(res.data);

                        navigate('/')
                    })
            })
    }
    return (
        <div>
            <div className="form-control mt-3">

                <button onClick={handleGoogleSignIn} className="btn bg-black text-white">
                    <img className='w-6 ' src={googleLogo} alt="" />
                    Google
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;