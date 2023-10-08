
const Footer = () => {
    return (
        <div className="flex-row-reverse md:flex md:justify-between px-4 md:px-5 lg:px-10 xl:px-20 bg-[#323332] py-8 md:py-5">
            <div className="mb-4 md:mb-0 flex gap-3 justify-center items-center">
            <i className='text-gray-400 hover:text-white text-2xl md:text-xl bx bxl-facebook'></i>
            <i className='text-gray-400 hover:text-white text-2xl md:text-xl bx bxl-twitter' ></i>
            <i className='text-gray-400 hover:text-white text-2xl md:text-xl bx bxl-google' ></i>
            <i className='text-gray-400 hover:text-white text-2xl md:text-xl bx bxl-instagram' ></i>
            <i className='text-gray-400 hover:text-white text-2xl md:text-xl bx bxl-youtube' ></i>
            </div>
            <p className="text-gray-400 hover:text-white text-center"><small>Copyright &copy; 2023 Bike Universe X. All Rights Reserved.</small></p>
        </div>
    );
};

export default Footer;