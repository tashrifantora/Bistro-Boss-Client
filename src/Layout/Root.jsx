import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import useAuth from "../Hooks/useAuth";



const Root = () => {
    const { loading } = useAuth()

    const location = useLocation()

    const path = location.pathname;
    const noHeaderFooter = path.includes('login') || path.includes('signup')

    if (loading) {
        return <div>loading...</div>
    }
    return (
        <div>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}

        </div>
    );
};

export default Root;