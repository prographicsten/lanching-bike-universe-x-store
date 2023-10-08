import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Detail from "../Detail/Detail";


const Details = () => {

    const [details, setDetails] = useState({});
    // console.log(details);

    const {id} = useParams();
    console.log(id);

    const bikeDetails = useLoaderData();
    // console.log(bikeDetails);

    useEffect(() => {
        const findDetails = bikeDetails?.find(detail => detail.id == id);
        setDetails(findDetails);
    }, [id, bikeDetails]);

    return (
        <div className="px-4 md:px-2 lg:px-10 xl:px-20">
            <Detail details={details}></Detail>
        </div>
    );
};

export default Details;