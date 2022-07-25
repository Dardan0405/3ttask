import React, { useState } from "react"
import './tabs.css'
import { data, data2, data3,data4,data5, data6, data7, data8 } from "./Listaedomain";


function Tabs(){
  const[index,setIndex]=useState(0);
  return(
    <div className="Tabs">
      <div className="TabsList">
        <div className={`TabHead ${index===0?`active`:null}`}  onClick={()=>{setIndex(0)}}>Domains</div>
        <div className={`TabHead ${index===1?`active`:null}`} onClick={()=>{setIndex(1)}}>Web Hosting</div>
        <div className= {`TabHead ${index===2?`active`:null}`}onClick={()=>{setIndex(2)}}>Dedicated Server</div>
        <div className= {`TabHead ${index===3?`active`:null}`}onClick={()=>{setIndex(3)}}>Virtual Cloud Servers</div>
        <div className= {`TabHead ${index===4?`active`:null}`}onClick={()=>{setIndex(4)}}>WorPress Hosting</div>
        <div className= {`TabHead ${index===5?`active`:null}`}onClick={()=>{setIndex(5)}}>Email Hosting</div>
        <div className= {`TabHead ${index===6?`active`:null}`}onClick={()=>{setIndex(6)}}>VPS Hosting Server</div>
        <div className={`TabHead ${index===7?`active`:null}`}onClick={()=>{setIndex(7)}}>Free Hosting</div>
        
        </div>
        
        <div className="TabContent" hidden={index !== 0}>
          <div className="iner-tab">
          {data.map((props) => {
            return(
              <div className="permbledhja">
               <div className="title" >
                <h4 className="h4">{props.domain}</h4>
                  <p className="h7">{props.title}</p>
                  
                    <p className="description">{props.description}</p>
                    <button className="Buy">Buy Now</button>
                  </div>
                </div>
              
              
            )
            
          })}
          </div>
          </div>
        
        <div className="TabContent"hidden={index !== 1}>
          <div className="iner-tab">
          
          {data2.map((props) => {
            return(
          <div className="permbledhja">
            <div className="title">
            
              <h4  className="h4">{props.domain}</h4>
              
              <h7  className="h7">{props.title}</h7>
              
               <p className="description">{props.description}</p>
                <button className="Buy">Buy Now</button>
              </div>
              </div>
            )
          })}
          </div>
          </div>
        <div className="TabContent" hidden={index !== 2} >
          <div className="iner-tab">
          {data3.map((props) => {
            return(
          <div className="permbledhja">
            <div className="title">
              <h4 className="h4">{props.domain}</h4>
              <h7 className="h7">{props.title}</h7>
              <p className="description">{props.description}</p>
                <button className="Buy">Buy Now</button>
              </div>
              </div>
            )
          })}
          </div>
          </div>
          
          
        <div className="TabContent" hidden={index !== 3}>
          <div className="iner-tab">
        {data4.map((props) => {
            return(
          <div className="permbledhja">
            <div className="title">
              <h4 className="h4">{props.domain}</h4> 
              <h7 className="h7">{props.title}</h7>
                <p className="description">{props.description}</p>
                <button className="Buy">Buy Now</button>
              </div>
              </div>
            )
          })}
          </div>
        </div>

        <div className="TabContent" hidden={index !== 4}>
          <div className="iner-tab">
        {data5.map((props) => {
            return(
          <div className="permbledhja">
            <div className="title">
              <h4 className="h4">{props.domain}</h4>
              <h7 className="h7">{props.title}</h7>
              <p className="description">{props.description}</p>
                <button className="Buy">Buy Now</button>
              </div>
              </div>
            )
          })}
          </div>
        </div>
        <div className="TabContent" hidden={index !== 5}>
          <div className="iner-tab">
        {data6.map((props) => {
            return(
          <div className="permbledhja">
            <div className="title">
              <h4 className="h4">{props.domain}</h4>
               <h7 className="h7">{props.title}</h7>
              <p className="description">{props.description}</p>
                <button className="Buy">Buy Now</button>
              </div>
              </div>
              )
          })}
          </div>
        </div>
        <div className="TabContent"hidden={index !== 6}>
          <div className="iner-tab">
        {data7.map((props) => {
            return(
          <div className="permbledhja">
            <div className="title">
              <h4 className="h4">{props.domain}</h4>
              <h7 className = "h7">{props.title}</h7>
                <p className="description">{props.description}</p>
                <button className="Buy">Buy Now</button>
              </div>
              </div>
            )
          })}
        </div>
        </div>
        <div className="TabContent" hidden={index !== 7}>
          <div className="iner-tab">
        {data8.map((props) => {
            return(
          <div className="permbledhja">
            <div className="title">
              <h4 className="h4">{props.domain}</h4>
              <h7 className = "h7">{props.title}</h7>
           <p className="description">{props.description}</p>
                <button className="Buy">Buy Now</button>
              </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

      }
      

export default Tabs