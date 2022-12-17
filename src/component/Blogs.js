
import {db} from '../config/firebase';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import Blog from './Blog';
import React from 'react';
import Navibar from './Navbar';


function Blogs() {

  const [blogs, setBlogs] = useState([]);
  const [loaded, setLoaded] = useState(false);


 const Fetchdata = () => {
    getDocs(collection(db, "blogs")).then((querySnapshot) => {
          
          // Loop through the data and store it in array to display
          querySnapshot.forEach(element => {
              var data = element.data();
              setBlogs(arr => [...arr , data,]);
          });
      })
    setLoaded(true);
  }

  useEffect(() => {
    Fetchdata();
  
    
  }, [])



 

  
  return (
      <div className='flex-col'> 
          <Navibar />
          <div className='flex flex-col justify-center items-center mb-5'>    
          
      {
        loaded ?
          blogs.map((blog, i) =>
              <Blog key={i} header={blog.header} content={blog.content} publishedDate={blog.publishedDate} />) : <p>loading</p>
        }
    
          </div>
 
     </div>
  ) 
}
 


export default Blogs;
