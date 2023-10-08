import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div>
            <Link to={"/"}>
                <div className="flex items-center gap-3">
                    <div>
                    <img className="w-16" src="https://i.ibb.co/QYbXQQT/st1.webp" alt="" />
                    </div>
                    <div>
                        <p className="text-lg font-bold underline"><span className="text-[#FF444A]">B</span>ike</p>
                        <p className="-mt-1"><small className="tracking-[0.15rem] font-semibold"><span className="text-[#FF444A]">U</span>verse</small> <span className="text-[#FF444A]">X</span> </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Logo;