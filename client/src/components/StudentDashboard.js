import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Home() {

    const data = [
        {
          name: 'Maths',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'DSA',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'DBMS',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'OS',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'TOC',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'CP',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'COA',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>STUDENT PERFORMANCE</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>SCORE</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>COURSES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>7</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TARGETS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}
export default Home


// CSS Styling of StudentDashboard

/* Main   
.main-container {
    grid-area: main;
    overflow-y: auto;
    padding: 20px 20px;
    color: rgba(255, 255, 255, 0.95);
  }
  
  .main-title {
    display: flex;
    justify-content: space-between;
  }
  
  .main-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    margin: 15px 0;
  }
  
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 8px 15px;
    border-radius: 5px;
  }
  
  .card:first-child {
    background-color: #2962ff;
  }
  
  .card:nth-child(2) {
    background-color: #ff6d00;
  }
  
  .card:nth-child(3) {
    background-color: #2e7d32;
  }
  
  .card:nth-child(4) {
    background-color: #d50000;
  }
  
  .card-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .card-inner > .card_icon {
    font-size: 25px;
  }
  
  .charts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 60px;
    height: 300px;
  }
  
  End Main  */