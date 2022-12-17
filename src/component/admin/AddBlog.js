import { addDoc, collection, setDoc, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../config/firebase";



const AddBlog = ({setpopup}) => {


    const [newBlog, setNewBlog] = useState({
        header: '',
        content: '',
      publishedDate: '',
      id: ''
})

  

  const addBlog =  (e)  => {
    e.preventDefault();
        const ref = collection(db, 'blogs');

    addDoc(ref, { header: newBlog.header, content: newBlog.content, publishedDate: newBlog.publishedDate }).then(docRef => {
      updateDoc(doc(ref, docRef.id), { id: docRef.id });
    })

    
        alert('blog added');
        setNewBlog({
            header: '',
            content: '',
            publishedDate:''
        })
      setpopup(false);
  }
  

    
  return (
      
       
            
    <form tabIndex="2" aria-hidden="true" className=" relative top-20 mx-auto p-5 border w-3/4 shadow-lg rounded-md bg-white " onSubmit={(e) => addBlog(e)}>
      <button className="float-right text-red-600" onClick={() => setpopup(false)}>X</button>
            <div className="flex flex-wrap -mx-3 mb-6 clear-right">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="blog-header">
              Blog Header
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="blog-header" type="text" placeholder="Life in Kurdistan" onChange={(e) => setNewBlog({ ...newBlog, header: e.target.value })} value={newBlog.header} required />
            
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="blog-date">
              Last Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="blog-date" type="text" placeholder="21/02/2024" onChange={(e) => setNewBlog({ ...newBlog, publishedDate: e.target.value })} value={newBlog.publishedDate} required />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="blog-content">
              Content
            </label>
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="blog-content" rows="20" cols="60" onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })} value={newBlog.content} required />
            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
          </div>
                </div>
                <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Blog</button>
       </form>

       
    ) 

    
    
}

export default AddBlog;