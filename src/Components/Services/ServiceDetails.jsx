import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardDetails from './CardDetails';

const ServiceDetails = () => {   
    const [card, setCard] = useState([])
    const [service, setService] = useState([])

    const { id } = useParams()
    
    useEffect(() => {
        fetch('/data.json')
          .then(res => res.json())
          .then(data => {
            setCard(data);
            
            const cardFound = data.find(item => item.id == id);
            setService(cardFound)
          })
          .catch(error => console.error('Error fetching data:', error));
      }, [id]);

      


return (
    <div>
        <div>
            <CardDetails service={service}></CardDetails>
        </div>
    </div>
);
};

export default ServiceDetails;