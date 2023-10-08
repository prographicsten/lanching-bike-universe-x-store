import { Link } from "react-router-dom";

const Service = ({bike}) => {
    // console.log(bike);
    const {id, img, bike_name, price, model} = bike || {};

    return (
        <div>
            <div className="text-center py-10 bg-[#F9F9F9] rounded-tl-lg hover:rounded-tl-[50px] rounded-br-2xl mb-5 md:mb-0">
                <img className="mx-auto" src={img} alt="" />
                <h2 className="text-lg text-[#111111] font-bold mt-5">{bike_name}</h2>
                <div className="flex justify-around my-5">
                    <p className="font-semibold text-[#25D366]">{price}</p>
                    <p className="font-semibold">{model}</p>
                </div>
                <Link to={`/bike/${id}`}>
                <button className="bg-[#FF444A] text-white py-1 font-semibold hover:bg-black hover:text-white px-8 rounded-tl-xl rounded-br-xl   hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-lg hover:rounded-bl-lg">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;