
const AssesoriesProduct = ({assesoriesProduct}) => {
    // console.log(assesoriesProduct);
    const {img, name, price, details} = assesoriesProduct || {};

    return (
        <div>
            <div className="text-center py-10 bg-[#F9F9F9] rounded-tl-lg hover:rounded-tl-[50px] rounded-br-2xl mb-5 md:mb-0">
                <img className="mx-auto" src={img} alt="" />
                <h2 className="text-lg text-[#111111] font-bold mt-5">{name}</h2>
                <p className="font-semibold text-[#25D366] mt-2">{price}</p>
                <button className=" mt-5 bg-[#FF444A] text-white py-1 font-semibold hover:bg-black hover:text-white px-8 rounded-tl-xl rounded-br-xl   hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-lg hover:rounded-bl-lg">Buy Now</button>
            </div>
        </div>
    );
};

export default AssesoriesProduct;