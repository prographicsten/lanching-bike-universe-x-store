
const Shipping = () => {

    

    return (
        <div className="px-4 md:px-2 lg:px-10 xl:px-20">
            <div className="py-20 grid grid-cols-1 md:grid-cols-3">
                <div className="lg:flex gap-5 justify-center items-center">
                    <div className="flex justify-center items-center">
                    <img className="w-20 p-5 border rounded-full mx-auto mb-4 lg:mb-0" src="https://i.ibb.co/PzY3ZjD/delivery-truck.png" alt="" />
                    </div>
                    <div className="text-center lg:text-start">
                        <h3 className="font-semibold text-lg text-white mb-4">Free Shipping & Return</h3>
                        <p className="text-white text-sm">Worldwide Free Shiping on 
                            <br />            
                            Oder Over $200.
                        </p>
                    </div>
                </div>
                <div className="lg:flex gap-5 justify-center items-center my-10 md:my-0">
                    <div className="flex justify-center items-center">
                    <img className="w-20 p-5 border rounded-full mx-auto mb-4 lg:mb-0" src="https://i.ibb.co/gws0wWX/24-hours.png" alt="" />
                    </div>
                    <div className="text-center lg:text-start">
                        <h3 className="font-semibold text-lg text-white mb-4">27/7 Support</h3>
                        <p className="text-white text-sm">Worldwide Free Shiping on 
                            <br />            
                            Oder Over $200.
                        </p>
                    </div>
                </div>
                <div className="lg:flex gap-5 justify-center items-center">
                    <div className="flex justify-center items-center">
                    <img className="w-20 p-5 border rounded-full mx-auto mb-4 lg:mb-0" src="https://i.ibb.co/D4zwHpT/shield.png" alt="" />
                    </div>
                    <div className="text-center lg:text-start">
                        <h3 className="font-semibold text-lg text-white mb-4">100% Secure Payments</h3>
                        <p className="text-white text-sm">Worldwide Free Shiping on 
                            <br />            
                            Oder Over $200.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipping;