import React, {useState} from 'react'
import classes from '../Styles/MainPage.module.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Link} from 'react-router-dom'


const MainPage = () => {

    const [count, setcount] = useState(0);
    const [data, setdata] = useState(0);

    const handleDecrement = () => {
        setcount(count - 1)
    }

    const handleIncrement = () => {
        setcount(count + 1)
    }

    const handleIndianData = () => {
        setdata(0)
    }
    
    const handleInternationalData = () => {
        setdata(1)
    }


    let database = [
       [ {
        day: 'Today',
        time1: '16:00',
        place1: 'Mysore',
        time2: '18:00',
        place2: 'Kolkata',
        time3: '20:00',
        place3: 'Chennai'
    
    },

    {   day: 'Tomorrow',
        time1: '6:00',
        place1: 'Pune',
        time2: '7:00',
        place2: 'Bangalore',
        time3: '10:00',
        place3: 'Mumbai'
    
    },

    {
        day: 'Day After Tomorrow',
        time1: '2:00',
        place1: 'Delhi',
        time2: '9:00',
        place2: 'Roorkie',
        time3: '11:00',
        place3: 'Kerela'
    
    }], [
        {
            day: 'Today',
            time1: '16:00',
            place1: 'Canada',
            time2: '18:00',
            place2: 'America',
            time3: '20:00',
            place3: 'USA'
        
        },

        {   day: 'Tomorrow',
            time1: '6:00',
            place1: 'France',
            time2: '7:00',
            place2: 'Germany',
            time3: '10:00',
            place3: 'Portugal'
        
        },

        {
            day: 'Day After Tomorrow',
            time1: '2:00',
            place1: 'Argentina',
            time2: '9:00',
            place2: 'Poland',
            time3: '11:00',
            place3: 'Egypt'
        
        }
    ]
    ]

    console.log(database[0][0]);


    return (
        <div>
            <div className={classes.intro}>Races</div>
             <div className={classes.twoButtons}>
                 <button onClick={handleIndianData} className={classes.btn}>INDIAN</button>
                 <button onClick={handleInternationalData} className={classes.btn}>INTERNATIONAL</button>
             </div>
            <div className={classes.dates}>
                 <div className={classes.toggler}>
                     {count > 0 && <ArrowBackIosIcon onClick={handleDecrement}/>}
                     <h2>{database[data][count].day}</h2>
                     {count < 2 && <ArrowForwardIosIcon onClick={handleIncrement}/>}
                 </div>

                 <div className={classes.singleDate}>
                    
                    <ul>
                         <Link className={classes.link} to='/details'><li>{database[data][count].time1} {database[data][count].place1}</li></Link>
                         <Link className={classes.link} to='/details'><li>{database[data][count].time2} {database[data][count].place2}</li></Link>
                         <Link className={classes.link} to='/details'><li>{database[data][count].time3} {database[data][count].place3}</li></Link>
                     </ul>
                    
                 </div>
            </div>

            <div className={classes.upcomingRaces}>
               <h2>Upcoming Races</h2>
               <h3>Dec 31st</h3>
               <h3>Jan 1st</h3>
            </div>

            
        </div>
    )
}

export default MainPage
