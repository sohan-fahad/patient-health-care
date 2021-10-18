import { useEffect, useState } from 'react';

const useData = () => {
    const [doctors, setDoctors] = useState()
    useEffect(()=>{
        fetch('./doctorsDB.json')
        .then(res => res.json())
        .then(data =>setDoctors(data))
    },[])

    return {
        doctors
    }
};

export default useData;