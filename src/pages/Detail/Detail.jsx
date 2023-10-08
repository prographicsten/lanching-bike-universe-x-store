
const Detail = ({details}) => {
    console.log(details);
    const {img, bike_details, bike_name, price} = details || {};


    return (
        <div>
            <div className="my-10">
                <img className="mx-auto md:w-[60%]" src={img} alt="" />
                <h2 className="text-3xl font-semibold">{bike_name}</h2>
                <div className="bg-green-400 py-10 px-4 mt-5">
                    <p>Price: {price}</p>
                    <p>Engine: {bike_details?.engine_cc}</p>
                    <p>Max Power: {bike_details?.max_power}</p>
                    <p>Capacity: {bike_details?.tank_capacity}</p>
                    <p>Wheelbase: {bike_details?.wheelbase}</p>
                    <p>Cooling: {bike_details?.cooling}</p>
                    <p>Max Torque: {bike_details?.max_torque}</p>
                    <button className="bg-[#FF444A] mt-5 text-white py-1 font-semibold hover:bg-black hover:text-white px-8 rounded-full">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;