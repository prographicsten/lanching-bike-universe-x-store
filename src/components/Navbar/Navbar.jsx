import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Login from "./Login";

const Navbar = () => {
    const navlinks = <>

            <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7 rounded-tl-xl rounded-br-xl   hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-lg hover:rounded-bl-lg " : " "
            }
            >
            <span className="text-black ">H</span>ome
            </NavLink>

            <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7 rounded-tl-xl rounded-br-xl   hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-lg hover:rounded-bl-lg " : " "
            }
            >
            <span className="text-black ">A</span>bout
            </NavLink>

            <NavLink
            to="/popularbikes"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7 rounded-tl-xl rounded-br-xl   hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-lg hover:rounded-bl-lg " : " "
            }
            >
            <span className="text-black ">P</span>opular Bike
            </NavLink>

            <NavLink
            to="/assesories"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7 rounded-tl-xl rounded-br-xl   hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-lg hover:rounded-bl-lg " : " "
            }
            >
            <span className="text-black ">A</span>ssesories
            </NavLink>

            <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7 rounded-tl-xl rounded-br-xl   hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-lg hover:rounded-bl-lg " : " "
            }
            >
            <span className="text-black ">L</span>ogin
            </NavLink>

            <NavLink
            to="/signup"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7 rounded-tl-xl rounded-br-xl   hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-lg hover:rounded-bl-lg " : " "
            }
            >
            <span className="text-black ">S</span>ignup
            </NavLink>
        </>


    return (
        // <div className="sticky top-0 left-0 w-[100%] bg-yellow-200">
        //     {/* <nav className="md:flex justify-center md:justify-between text-center md:text-start py-5 px-4 md:px-2 lg:px-10 xl:px-20">
        //         <div className="flex md:flex-none lg:flex-none xl:flex-none justify-center md:justify-start lg:justify-start xl:justify-start items-center">
        //         <Logo></Logo>
        //         </div>
        //         <ul className="grid grid-cols-2 md:flex items-center md:gap-5 justify-between md:justify-start md:text-start lg:text-start py-4 md:py-0">
        //             <li className="my-2 mb-5 md:mb-0">
        //                 <NavLink
        //                 to="/"
        //                 className={({ isActive, isPending }) =>
        //                     isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7 rounded-tl-xl rounded-br-xl   hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-lg hover:rounded-bl-lg " : " "
        //                 }
        //                 >
        //                 <span className="text-black ">H</span>ome
        //                 </NavLink>
        //             </li>
        //             <li className="my-2 mb-5 md:mb-0">
        //                 <NavLink
        //                 to="/about"
        //                 className={({ isActive, isPending }) =>
        //                     isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7 rounded-tl-xl rounded-br-xl   hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-lg hover:rounded-bl-lg " : " "
        //                 }
        //                 >
        //                 <span className="text-black ">A</span>bout
        //                 </NavLink>
        //             </li>
        //             <li className="my-2 mb-5 md:mb-0">
        //                 <NavLink
        //                 to="/popularbikes"
        //                 className={({ isActive, isPending }) =>
        //                     isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7 rounded-tl-xl rounded-br-xl   hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-lg hover:rounded-bl-lg " : " "
        //                 }
        //                 >
        //                 <span className="text-black ">P</span>opular Bike
        //                 </NavLink>
        //             </li>
        //             <li className="my-2 mb-5 md:mb-0">
        //                 <NavLink
        //                 to="/assesories"
        //                 className={({ isActive, isPending }) =>
        //                     isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7 rounded-tl-xl rounded-br-xl   hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-lg hover:rounded-bl-lg " : " "
        //                 }
        //                 >
        //                 <span className="text-black ">A</span>ssesories
        //                 </NavLink>
        //             </li>
        //         </ul>
        //         <div className="flex justify-center items-center">
        //             <Login></Login>
        //         </div>
        //     </nav> */}
        // </div>

        <div className="navbar bg-base-100  py-4 px-4 md:px-2 lg:px-10 xl:px-20 flex justify-between">
            <div className="">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        {navlinks}
                    </li>
                </ul>
                </div>
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}

                <Logo></Logo>
            </div>
            <div className="hidden lg:flex">
                <ul className="">
                <li className="flex justify-between items-center gap-5">
                    {navlinks}
                </li>
                </ul>
            </div>
            <div className="">
                <Login></Login>
            </div>
        </div>
    );
};

export default Navbar;