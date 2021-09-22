import React,{ useEffect, useState } from 'react';
import './Box.css';
import {data} from './SetData';

const Box=()=>{
    const [currData,setCurrData]=useState([]);
    const [currData2,setCurrData2]=useState([]);
    const getApiData= async ()=>{
        try{
           const covidData=await fetch("https://api.covid19india.org/v4/min/data.min.json")
           const jsonData= await covidData.json();
            setCurrData(jsonData.TT.total);
            setCurrData2(jsonData.TT.delta)
        }   
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getApiData();
    },[])
    const dateTime=new Date();
    var i=-1;
    return(
        <>
            <h5>Last update: {dateTime.toString()}</h5>
            <button onClick={getApiData}><span className="material-icons">refresh</span></button>
            <center>
                <div className="row">

                    {
                        
                        data.map((val,index)=>{
                   
                            i+=1;
                            const dataDisplay=[currData2.confirmed,currData2.recovered,currData2.deceased,currData.vaccinated1,currData.confirmed,currData.recovered,currData.deceased,currData.tested];

                            return (
                                <div key={index} className="col-lg-3">
                                    <div className="dataBox p-3 shadow-lg" style={{color:val.color}}>
                                        <h3><span className="size">{val.data_name1}</span>{val.data_name2}</h3>
                                        <h4>{dataDisplay[i]}</h4>
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>
            </center>
        </>
    );
}
export default Box;