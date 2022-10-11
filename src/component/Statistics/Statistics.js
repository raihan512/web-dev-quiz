// import React from 'react';
import { useLoaderData } from 'react-router-dom';
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const topics = useLoaderData().data;
    const data = []
    for (const topic of topics) {
        data.push(topic)
    }

    console.log(data);
    return (
        <div className='h-screen flex items-center justify-center'>
            <BarChart width={500} height={300} barSize={20} data={data} margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
            >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="total" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
        </div>
    );
};

export default Statistics;