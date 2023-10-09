

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const LoginPage = () => {

    const {signIn, googleLogin} = useContext(AuthContext)
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault();

        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // sign in the user
        signIn(email, password)
            .then(result => {
                console.log(result.user);

                // navigate after login
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error.message);
            })
    };

    const googleLoginSetup = () =>{
        googleLogin()
        .then(result =>{
          console.log(result.user)
          navigate('/');
        })
        .catch(error=>{
          console.error(error)
        })
    }

    return (
        <div className=" min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center mb-2">
                <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body"  data-aos="flip-left">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-[#FF444A] text-white py-2 hover:bg-black hover:text-white">Login</button>
                        </div>

                        <p className="text-center mt-4"><small>Do not Have an account <Link to="/signup" className="text-blue-600 font-bold">Signup</Link></small></p>

                        <div>
                            <h2 className="text-2xl font-semibold text-center">Login with</h2>
                            <div className="flex justify-between items-center mt-5">
                                <button onClick={googleLoginSetup} className="flex items-center font-medium bg-[#FF444A] text-white py-2 hover:bg-black hover:text-white px-8 rounded-full"><i className='mr-2 bx bxl-google' ></i><span className="text-red-500">G</span>oogle</button>
                                <button className="flex items-center font-medium bg-[#FF444A] text-white py-2 hover:bg-black hover:text-white px-8 rounded-full"><i className='mr-2 bx bxl-github' ></i><span className="text-red-500">G</span>ithub</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;