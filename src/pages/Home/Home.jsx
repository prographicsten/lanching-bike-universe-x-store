
import Services from "../../components/Services/Services";
import Shipping from "../../components/Shipping/Shipping";

const Home = () => {

    const banner_bg = {
        // backgroundImage: "url('https://i.ibb.co/n1tG6hJ/banner-side.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: "10"
    };

    const service_bg = {
        backgroundImage: "url('https://i.ibb.co/HxrCGwk/about-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: "10"
    };
    
    return (
        <div>
            <div style={banner_bg} className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-6 lg:px-10 xl:px-20 h-[80vh] md:h-screen items-center">
                <div className="mt-20 md:mt-0">
                    <h2 className="font-medium text-2xl md:text-3xl lg:text-5xl text-[#25D366]">Lunching New Bike</h2>
                    <p className="mt-4 text-black md:text-sm">Discover curated Jawa Perak has been priced in Bike Universe X $1892 dollar</p>
                </div>
                <div className="col-span-2 flex justify-end">
                    <img className="w-full" src="https://i.ibb.co/yY6SyNW/bike.webp" alt="" />
                </div>
            </div>
            <h2 className="text-4xl font-bold text-[#25D366] text-center mb-10">Our Services</h2>
            <div>
            <Services></Services>
            </div>
            <div style={service_bg}>
                <Shipping></Shipping>
            </div>
        </div>
    );
};

export default Home;