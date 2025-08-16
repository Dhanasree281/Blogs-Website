import './DedicatedBlogs.css';
import { useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import blogs from '../../Utils/MockData';
import { useParams } from 'react-router-dom';
import {useEffect} from "react";
function DedicatedBlogs() 
{
    const [blogID,setBlogID]=useState(2);

    let blogToDisplay=blogs.filter(blog=>blog.id==blogID)[0]
    const {id} = useParams();
    useEffect(()=>{
        if(id){
            setBlogID(id)
        }    },[]);
    console.log(blogToDisplay);
   return(
    <>
    <Banner/>
    <h1>{blogToDisplay.title}</h1>
    <h6>{blogToDisplay.category}</h6>
    <p>{blogToDisplay.content}</p>
    
    </>
   )

}
export default DedicatedBlogs;