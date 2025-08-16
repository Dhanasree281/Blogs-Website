import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import TrendingBlog from "../../Components/TrendingBlog/TrendingBlog";
import blogs from "../../Utils/MockData";
import {useParams} from "react-router-dom";
import './CategoryBlogs.css';  
import {useState} from "react"; 
import {useEffect} from "react";
function CategoryBlogs(){
    const [currentCategory, setCurrentCategory] = useState("Programming");
    const {category} = useParams();
    console.log('Line 11: ',category);
    useEffect(()=>{
        if(category){
            setCurrentCategory(category.replace(':',''));
        }
       
    },[])

    return(
        <>
        <Banner/>          
            <div className="trending-blog-section">
                <h1>
                    {currentCategory}
                </h1>
                <div className="all-trending-blogs d-flex justify-content-between flex-wrap row-gap-2" >
                    {
                        blogs.map(blog=> blog.category==currentCategory && 
                            <TrendingBlog blog={blog}/>

                        )
                    }
                    

                </div>
                
            </div>
               





                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

           
            
       
        

        </>
    )
}
export default CategoryBlogs;