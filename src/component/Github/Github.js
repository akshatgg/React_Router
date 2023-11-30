import React, { useState, useEffect } from 'react';

function Github() {
    const [data, setData] = useState([]); // Initialize state with an empty object

    useEffect(() => {
        fetch('https://api.github.com/users/akshatgg')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data); // Set the state with the fetched data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to run the effect only once on mount

    return (
        <div className='bg-gray-600 text-white text-3xl p-4 text-center'>
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt='Github Picture' width={300} className=' '/>
        </div>
    );
}

export default Github;
