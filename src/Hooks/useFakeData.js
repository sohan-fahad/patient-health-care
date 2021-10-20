import React, { useEffect, useState } from 'react';

const useFakeData = () => {
    const [doctors, setDoctors] = useState()
    const [services, setServices] = useState([])

    const servicesUrl = "https://raw.githubusercontent.com/sohan-fahad/fakeDB/main/servicesDB.json";
    const doctorsUrl = ""
    useEffect(() => {
        fetch(doctorsUrl)
            .then(res => res.json())
            .then(data => setDoctors())
    }, [])
    useEffect(() => {
        fetch(servicesUrl)
            .then(res => res.json())
            .then(data => setServices())
    }, [])
    return {
        doctors,
        services
    };
};

export default useFakeData;