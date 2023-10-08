import { Link, useLoaderData } from "react-router-dom";
import Service from "../Service/Service";




const Services = () => {

    const bikes = useLoaderData();
    // console.log(bikes);

    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-6 px-5 md:px-6 lg:px-10 xl:px-20 mb-20">
            {
                bikes?.map(bike => <Service key={bike.id} bike={bike}></Service>)
            }
        </div>
    );
};

export default Services;