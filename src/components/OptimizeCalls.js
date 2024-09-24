import React from 'react';
import axios from 'axios';

const OptimizeCalls = () => {
    let cancelToken;
    const onType = async (e) => {
        const search = e.target.value

        if (typeof cancelToken != typeof undefined) {
            cancelToken.cancel("cancelling the previous req")
        }

        cancelToken = axios.CancelToken.source()

        const results = await axios.get(
            `http://localhost:4000/courses?q=${search}`,
            {cancelToken: cancelToken.token}
        )

        console.log(results.data) // congestion in network
    };
    return (
        <div style={{marginTop: "4em", textAlign: "center"}}>
            <input type="text" placeholder='enter search' onChange={onType}/>
        </div>
    )
}

export default OptimizeCalls