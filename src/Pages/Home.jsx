import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Services from "../Components/Services/Services";

const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center text-5xl mt-12 text-white font-semibold">Services you will get</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-12">
                
                {
                    data.map(service => <Services key={service.id} service={service}></Services>)
                }
            </div>
        </div>
    );
};

export default Home;