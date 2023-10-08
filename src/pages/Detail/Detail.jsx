
const Detail = ({details}) => {
    console.log(details);
    const {img} = details || {};


    return (
        <div>
            <div>
                <img className="mx-auto md:w-[80%]" src={img} alt="" />
            </div>
        </div>
    );
};

export default Detail;