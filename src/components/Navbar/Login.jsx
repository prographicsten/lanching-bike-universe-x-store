import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <Link to={'/login'}>
            <button className="bg-[#FF444A] text-white py-2 font-semibold hover:bg-black hover:text-white px-8 rounded-full">Login</button>
            </Link>
        </div>
    );
};

export default Login;