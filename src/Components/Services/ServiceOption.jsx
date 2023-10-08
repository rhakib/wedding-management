import { MdDoubleArrow } from 'react-icons/md';
const ServiceOption = ({ item }) => {

    console.log(item);
    return (
        <div className='flex justify-center'>

            <div className='flex text-left items-center gap-1 text-xl'>
                <MdDoubleArrow className=''></MdDoubleArrow>
                <p>{item}</p>
            </div>


        </div>
    );
};

export default ServiceOption;