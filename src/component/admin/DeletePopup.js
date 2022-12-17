



const DeletePopup = (props) => {
    const { blog, setDeleteBlog, setDeleteAssurance} = props;
    

    const deleteHandler = (e) => {
        setDeleteAssurance(e.target.value);
        setDeleteBlog(false);
    }



   

    return (
        <div className="relative top-20 mx-auto p-5 border w-1/4 shadow-lg rounded-md bg-white flex flex-col items-center	">
            <h1 className="pb-3">Are you sure you want to delete this Blog?</h1>
            <div>
                <button value='no' className="bg-blue-500 text-white font-bold py-2 px-4 rounded m-3 w-30 " onClick={deleteHandler}>No</button>
                <button value='yes' className="bg-red-500  text-white font-bold py-2 px-4 rounded m-3 w-30" onClick={deleteHandler}>Yes</button>
            </div>
        </div>
    )
}

export default DeletePopup;