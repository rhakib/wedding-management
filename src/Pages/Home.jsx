import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Services from "../Components/Services/Services";
import Stories from "../Components/Stories/Stories";
import Team from "../Components/Team/Team";


const Home = () => {
    const data = useLoaderData()   

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center text-5xl mt-12 font-medium">Our Services</h2>
            <p className="text-center text-lg mt-6">We are commited to provide you the best services in the town, let's get in touch.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 mt-8 gap-12">
                
                {
                    data.map(service => <Services key={service.id} service={service}></Services>)
                }
            </div>
            <Stories></Stories>
            <Team></Team>
        </div>
    );
};

export default Home;