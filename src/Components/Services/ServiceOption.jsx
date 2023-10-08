import { MdDoubleArrow } from 'react-icons/md';
const ServiceOption = ({ item }) => {

    console.log(item);
    return (
        <div className=''>

            <div className='flex items-center gap-1 text-xl'>
                <MdDoubleArrow className=''></MdDoubleArrow>
                <p>{item}</p>
            </div>


        </div>
    );
};

export default ServiceOption;