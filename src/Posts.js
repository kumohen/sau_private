import React,{useState,useEffect} from 'react';
import { storage, database } from "./fbase";


const Posts = () => {
    const[List,setList] = useState([])
    useEffect(()=>{
          database.ref(`/items`).once('value').then(snapshot => {
             if(snapshot.val()){
                 const items = Object.values(snapshot.val()).reverse();
                setList(items);
             }
         })
    },[])

  
    return (
        <div>
            <h3>All Post be here</h3>
            <div className="col-md-5" style={{margin:"auto"}}>

          
            {List && List.map((item,index) => (
                <div key={index} className="card">
                    <img src={item.image} alt={item.caption} style={{height:"80vh"}} />
                    <p>{ item.name && item.name}</p>
                    <p>{item.course && item.course}</p>
                    <p>{item.category && item.category}</p>
                    <p>{item.caption && item.caption}</p>
                  
                </div>    
            ))}
              </div>
        </div>
    );
};

export default Posts;