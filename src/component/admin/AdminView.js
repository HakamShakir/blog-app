


import { useState } from 'react';
import Navbar from './Navbar'
import AddBlog from './AddBlog';
import AdminBlogs from './AdminBlogs';



function AdminView() {


    const [popup, setPopup] = useState(false);
    

    
    return (
        <div className='d-flex flex-col '>
        
            <Navbar setpopup={setPopup} />
            <AdminBlogs/>
           
            {popup && ( <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'>
                <AddBlog setpopup={setPopup}/>
                 </div>  ) }
           
       
            
            
        </div>
      
    
    );
}

export default AdminView;