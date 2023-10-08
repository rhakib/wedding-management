import { MdDoubleArrow } from 'react-icons/md';
const ServiceOption = ({ item }) => {

    console.log(item);
    return (
        <div className=' lg:ml-40'>
            
                <p className='text-left flex items-center gap-1 text-xl'><MdDoubleArrow className=''></MdDoubleArrow>{item}</p>
            
        </div>
    );
};

export default ServiceOption;