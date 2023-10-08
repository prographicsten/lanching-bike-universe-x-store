import { Link } from "react-router-dom";

const SignupPage = () => {
    return (
        <div className=" min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center mb-2">
                <h1 className="text-5xl font-bold">Signup now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>

                    <div className="form-control mt-6">
                    <button className="btn text-white py-2 bg-[#FF444A] hover:bg-black hover:text-white">Signup</button>
                    </div>

                    <p className="text-center mt-4"><small>Already Have an account <Link to="/login" className="text-blue-600 font-bold">Login</Link></small></p>

                    <div>
                        <h2 className="text-2xl font-semibold text-center">Signup with</h2>
                        <div className="flex justify-between items-center mt-5">
                            <button className="flex items-center font-medium bg-[#FF444A] text-white py-2 hover:bg-black hover:text-white px-8 rounded-full"><i className='mr-2 bx bxl-google' ></i><span className="text-red-500">G</span>oogle</button>
                            <button className="flex items-center font-medium bg-[#FF444A] text-white py-2 hover:bg-black hover:text-white px-8 rounded-full"><i className='mr-2 bx bxl-github' ></i><span className="text-red-500">G</span>ithub</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;