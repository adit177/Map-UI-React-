
import React,{useState} from "react";
import ReactTooltip from "react-tooltip";
import{
  ComposableMap,
  Geographies,
  Geography,
  Marker,Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const marker=[
  {
    markerOffset: -11,
    name:"Delhi",
    coordinbates:[77.1025,28.7041],
   
  },
  {
    markerOffset: -11,
    name:"Uruguay",
    coordinbates:[-70.7658,-50.5228],
   
  },
  {
    markerOffset: -11,
    name:"Peru",
    coordinbates:[-60.0152,-9.1900],
   
  },
  {
    markerOffset: -11,
    name:"Paris",
    coordinbates:[2.3522,48.8566],
   
  },
  {
    markerOffset: -11,
    name:"Nigeria",
    coordinbates:[-9.6753,9.0820],
   
  },
  {
    markerOffset: -11,
    name:"Egypt",
    coordinbates:[30.8025,5.8206],
   
  },
  {
    markerOffset: -11,
    name:"Kenya",
    coordinbates:[15.9062,-25.0236],
   
  },
  {
    markerOffset: -11,
    name:"Moscow",
    coordinbates:[110.6173,55.7558],
   
  },
  {
    markerOffset: -11,
    name:"Tokyo",
    coordinbates:[120.6503,35.6762],
   
  },
  {
    markerOffset: -11,
    name:"Indonesia",
    coordinbates:[113.9213,-30.7893],
   
  },
]
const pop=[
  {
    markerOffset: -11,
    name:"100,00000",
    coordinbates:[76.1025,23.7041],
   
  },
  {
    markerOffset: -11,
    name:"100,000",
    coordinbates:[-76.7658,-58.5228],
   
  },
  {
    markerOffset: -11,
    name:"100,000",
    coordinbates:[-60.0152,-14.1900],
   
  },
  {
    markerOffset: -11,
    name:"500,000",
    coordinbates:[2.3522,42.8566],
   
  },
  {
    markerOffset: -11,
    name:"1000",
    coordinbates:[-9.6753,3.0820],
   
  },
  {
    markerOffset: -11,
    name:"60,000",
    coordinbates:[30.8025,0.8206],
   
  },
  {
    markerOffset: -11,
    name:"10,000",
    coordinbates:[15.9062,-30.0236],
   
  },
  {
    markerOffset: -11,
    name:"60,000",
    coordinbates:[105.6173,49.7558],
   
  },
  {
    markerOffset: -11,
    name:"500,0000",
    coordinbates:[117.6503,30.6762],
   
  },
  {
    markerOffset: -11,
    name:"50,000",
    coordinbates:[115.9213,-35.7893],
   
  },
]

const geoUrl="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

function App() {
  return (
    <div className="App" style={{
      width:"100%",
      height:"100%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
    }}>
     <div style={{width:"100%", height:"100%",borderStyle:"double"}}>
       <ComposableMap data-tip="">
           <Geographies geography={geoUrl}>
           {({geographies})=>
           geographies.map((geo)=>(
             <Geography key={geo.rsmKey} geography={geo}/>
           ))
           }
         </Geographies>
        
         <Annotation subject={[76.0000,29.2001]}
         dx={-88} dy={-30}
         connectorProps={
           {
             stroke:"#db4dff",
             strokeWidth:10,
             strokeLinecap:"round",
           }
         }
         >
         </Annotation>
         <Annotation subject={[42.1025,38.7041]}
         dx={-99} dy={-30}
         connectorProps={
           {
             stroke:"#db4dff",
             strokeWidth:10,
             strokeLinecap:"round",
           }
         }
         >
         </Annotation>
         <Annotation subject={[30.8025,5.8206]}
         dx={-99} dy={-10}
         connectorProps={
           {
             stroke:"#db4dff",
             strokeWidth:10,
             strokeLinecap:"round",
           }
         }
         >
         </Annotation>
         <Annotation subject={[120.6503,35.6762]}
         dx={-60} dy={-60}
         connectorProps={
           {
             stroke:"#db4dff",
             strokeWidth:10,
             strokeLinecap:"round",
           }
         }
         >
         </Annotation>
         <Annotation subject={[113.9213,-30.7893]}
         dx={10} dy={-230}
         connectorProps={
           {
             stroke:"#db4dff",
             strokeWidth:10,
             strokeLinecap:"round",
           }
         }
         >
         </Annotation>
         <Annotation subject={[113.9213,-30.7893]}
         dx={-90} dy={-210}
         connectorProps={
           {
             stroke:"#db4dff",
             strokeWidth:10,
             strokeLinecap:"round",
           }
         }
         >
         </Annotation>
         <Annotation subject={[113.9213,-30.7893]}
         dx={-430} dy={60}
         connectorProps={
           {
             stroke:"#db4dff",
             strokeWidth:10,
             strokeLinecap:"round",
           }
         }
         >
         </Annotation>
         <Annotation subject={[77.1025,28.7041]}
         dx={-100} dy={70}
         connectorProps={
           {
             stroke:"#db4dff",
             strokeWidth:10,
             strokeLinecap:"round",
           }
         }
         >
         </Annotation>
         <Annotation subject={[77.1025,28.7041]}
         dx={-150} dy={190}
         connectorProps={
           {
             stroke:"#db4dff",
             strokeWidth:10,
             strokeLinecap:"round",
           }
         }
         >
         </Annotation>
         <Annotation subject={[15.9062,-25.0236]}
         dx={-60} dy={-110}
         connectorProps={
           {
             stroke:"#db4dff",
             strokeWidth:10,
             strokeLinecap:"round",
           }
         }
         >
         </Annotation>
         <Annotation subject={[-9.6753,9.0820]}
         dx={-130} dy={60}
         connectorProps={
           {
             stroke:"#db4dff",
             strokeWidth:10,
             strokeLinecap:"round",
           }
         }
         >
         </Annotation>
         <Annotation subject={[-60.0152,-9.1900]}
         dx={0} dy={130}
         connectorProps={
           {
             stroke:"#db4dff",
             strokeWidth:10,
             strokeLinecap:"round",
           }
         }
         >
         </Annotation>
         <Annotation subject={[-60.0152,-9.1900]}
         dx={165} dy={-200}
         connectorProps={
           {
             stroke:"#db4dff",
             strokeWidth:10,
             strokeLinecap:"round",
           }
         }
         >
         </Annotation>
         <Annotation subject={[110.6173,55.7558]}
         dx={-230} dy={20}
         connectorProps={
           {
             stroke:"#db4dff",
             strokeWidth:10,
             strokeLinecap:"round",
           }
         }
         >
         </Annotation>
         {
           marker.map(({name, coordinbates, markerOffset})=>(
             <Marker key={name} coordinates={coordinbates }>
                <circle r={32} fill="#db4dff" ></circle>
                <text textAnchor='middle'  class="radius" y={markerOffset} style={{fontFamily:"system-ui", fill:"#cccc00", fontSize:"12px", fontWeight:"bold"}}>
                  {name}                
                </text>
             </Marker>
             
           ))
           
         }     
         {
           pop.map(({name, coordinbates, markerOffset})=>(
             <Marker key={name} coordinates={coordinbates }>
                <text textAnchor='middle'  class="radius" y={markerOffset} style={{fontFamily:"system-ui", fill:"#cccc00", fontSize:"12px", fontWeight:"bold"}}>
                  {name}                
                </text>
             </Marker>
             
           ))
           
         }        
       </ComposableMap>
     </div>
    </div>
  );
  
}

export default App;
