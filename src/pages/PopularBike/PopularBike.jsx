import { useLoaderData } from "react-router-dom";
import PopularCycle from "../PopularCycle/PopularCycle";

const PopularBike = () => {
    const popularBike = useLoaderData();
    // console.log(popularBike);

    return (
        <div className="pt-10 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-6 px-5 md:px-6 lg:px-10 xl:px-20">
            {
                popularBike?.map(popularCycle => <PopularCycle key={popularCycle.id} popularCycle={popularCycle}></PopularCycle>)
            }
            </div>
        </div>
    );
};

export default PopularBike;