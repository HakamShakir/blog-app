import { db } from '../../config/firebase';
import { useEffect, useState } from "react";
import BlogDisplay from "./BlogDisplay";
import { collection, getDocs, deleteDoc , doc} from "firebase/firestore";
import EditBlog from './EditBlog';
import DeletePopup from './DeletePopup';


const AdminBlogs = () => {

    const [loaded, setLoaded] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [currentBlogID, setCurrentBlogID] = useState('');
    const [operation, setOperation] = useState('');
    const [edit, setEdit] = useState(false);
    const [deleteBlog, setDeleteBlog] = useState(false);
    const [deleteAssurance, setDeleteAssurance] = useState('')
    const [crudOp, setCrudOp] = useState(0)

    const ref = collection(db, 'blogs');



    const Fetchdata = () => {
        getDocs(ref).then((querySnapshot) => {
              
              // Loop through the data and store it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setBlogs(arr => [...arr, data,]);
            });
          })
        setLoaded(true);
    }
    
    


    const deleteSelectedBlog = async (blog) => {
        const docRef = doc(ref, blog.id);
        await deleteDoc(docRef);
    }

    // SHOW POPUP
    useEffect(() => {
        if (operation === "edit")
            setEdit(true);
            
        else if (operation ==="delete"){
            setDeleteBlog(true);
          
        }
       
    }, [currentBlogID,operation])

    // DELETE DATA
    useEffect(() => {
        if (deleteAssurance === "yes") {
            deleteSelectedBlog(blogs[currentBlogID]);
            setCrudOp(crudOp + 1);
            setDeleteAssurance('no');
        }
    }, [deleteBlog])

    // FETCH DATA
    useEffect(() => {
        Fetchdata();
        
    }, [crudOp])




    return (
        <div className='flex flex-col justify-center items-center mb-5 mt-5'>
            {
                loaded && Object.keys(blogs).map((id) =>
                    <BlogDisplay key={id}
                        id={id}
                        header={blogs[id].header}
                        content={blogs[id].content}
                        publishedDate={blogs[id].publishedDate}
                        setOperation={setOperation}
                        setCurrentBlogID={setCurrentBlogID} />)
            }

            {edit ?
                <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'>
                    <EditBlog blog={blogs[currentBlogID]} currentID={currentBlogID} setEdit={setEdit} setCrudOp={setCrudOp} crudOp={crudOp} />
                </div>
                : null}
            {
                deleteBlog ? <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'>
                    <DeletePopup  setDeleteAssurance={setDeleteAssurance } setDeleteBlog={setDeleteBlog} />
                </div> : null
            }

        </div>

    )
}

export default AdminBlogs;