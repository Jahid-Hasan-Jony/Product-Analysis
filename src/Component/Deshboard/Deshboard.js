import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, } from 'recharts';

const Deshboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('FakeData/DeshboardFakeData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <div className='container'>
                <h2 className='text-center py-3'>Month Wise Sell</h2>
                <div className='text-center'>
                    <LineChart className='pt-3' width={500} height={300} data={data}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
                <h2 className='text-center py-3'>Investment Vs Revenue</h2>
                <div className=''>
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </div>
            </div>
        </div>
    );
};

export default Deshboard;