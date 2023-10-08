import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Login from "./Login";

const Navbar = () => {
    return (
        <div className="sticky top-0 left-0 w-[100%] bg-yellow-200">
            <nav className="md:flex justify-center md:justify-between text-center md:text-start py-5 px-4 md:px-2 lg:px-10 xl:px-20">
                <div className="flex md:flex-none lg:flex-none xl:flex-none justify-center md:justify-start lg:justify-start xl:justify-start items-center">
                <Logo></Logo>
                </div>
                <ul className="grid grid-cols-2 md:flex items-center md:gap-5 justify-between md:justify-start md:text-start lg:text-start py-4 md:py-0">
                    <li className="my-2 mb-5 md:mb-0">
                        <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7 rounded-tl-xl rounded-br-xl   hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-lg hover:rounded-bl-lg " : " "
                        }
                        >
                        <span className="text-black ">H</span>ome
                        </NavLink>
                    </li>
                    <li className="my-2 mb-5 md:mb-0">
                        <NavLink
                        to="/about"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7 rounded-tl-xl rounded-br-xl   hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-lg hover:rounded-bl-lg " : " "
                        }
                        >
                        <span className="text-black ">A</span>bout
                        </NavLink>
                    </li>
                    <li className="my-2 mb-5 md:mb-0">
                        <NavLink
                        to="/popularbikes"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7 rounded-tl-xl rounded-br-xl   hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-lg hover:rounded-bl-lg " : " "
                        }
                        >
                        <span className="text-black ">P</span>opular Bike
                        </NavLink>
                    </li>
                    <li className="my-2 mb-5 md:mb-0">
                        <NavLink
                        to="/assesories"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7 rounded-tl-xl rounded-br-xl   hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-lg hover:rounded-bl-lg " : " "
                        }
                        >
                        <span className="text-black ">A</span>ssesories
                        </NavLink>
                    </li>
                </ul>
                <div className="flex justify-center items-center">
                    <Login></Login>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;