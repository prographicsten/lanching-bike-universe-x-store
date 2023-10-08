import { useLoaderData } from "react-router-dom";
import AssesoriesProduct from "../../components/AssesoriesProduct/AssesoriesProduct";

const Assesories = () => {
    const assesories = useLoaderData();
    console.log(assesories);


    return (
        <div className="md:px-6 lg:px-10 xl:px-20 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-6 px-5 md:px-6 lg:px-10 xl:px-20 mb-20">
            {
                assesories?.map(assesoriesProduct => <AssesoriesProduct key={assesoriesProduct.id} assesoriesProduct={assesoriesProduct}></AssesoriesProduct>)
            }
            </div>
        </div>
    );
};

export default Assesories;