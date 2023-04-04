import React, { useEffect, useState } from 'react'

function Timer() {
  const[min,setMin]=useState(0);
  const[sec,setSec]=useState(0);
  const[flag,setFlag]=useState(true);
    const body=document.body;
  function backgColor(){
    setInterval(()=>{
      const red=Math.floor(Math.random()*126);
      const green=Math.floor(Math.random()*126);
      const blue=Math.floor(Math.random()*126);
      const rgb=`rgb(${red},${green},${blue})`;
      body.style.backgroundColor=rgb;
    },5000)
  }

  let timer=null;
    useEffect(()=>{
      timer=setInterval(()=>{
          setSec((s)=>s+1);
          if(sec>59){
            setMin((m)=>m+1);
            setSec(0);
          }
      },1000);
      return ()=>clearInterval(timer);
      backgColor();
    },[sec,min]);
    
    const startTimer=()=>{
       setSec(sec+1);
       setMin(min);
       setFlag(true);
    }
    const stopTimer=()=>{
      clearInterval(timer);
      setFlag(false);
    }
    const restart=()=>{
       setSec(0);
       setMin(0);
       setFlag(true);
    }


  return (
    <div>
      <h1 style={{border:"2px solid red",background:"grey",color:"whitesmoke",width:"40%",margin:"2rem 30%"}}>Timer</h1>
      <div style={{border:"3px solid grey",width:"30%",height:"10rem",margin:"2rem 35%",fontSize:"25px",background:"#f1440a",color:"whitesmoke",paddingTop:"1.5rem",borderRadius:"20%"}} >
          <h2>{min} : {sec}</h2>
          {
            flag? <button style={{borderRadius:"50%", padding:"1rem",margin:"2px 10px"}} onClick={stopTimer}>stop</button>:
            <button style={{borderRadius:"50%", padding:"1rem",margin:"2px 10px"}} onClick={startTimer}>start</button>
           
          }
          <button style={{borderRadius:"50%", padding:"1rem",margin:"2px 10px"}} onClick={restart}>restart</button>
      </div>
    </div>
  )
}

export default Timer
