import React from "react";


const BlogDisplay = (props) => {

    const { header, content, publishedDate, id, setCurrentBlogID, setOperation } = props;

    const operationHandler = (e) => {
        setCurrentBlogID(id);
        setOperation(e.target.value);
        console.log(id);
        console.log(e.target.value);
    }

    return (
        <div className="bg-blue-200 p-4 rounded-lg pt-3 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]  mb-10 w-2/4 flex flex-col" key={id}>
        <h1 className="text-white text-2xl font-bold mb-1">{header}</h1>
        <p className="text-white-600 text-sm mb-3" >{publishedDate}</p>
            <p className="text-white-800 text-base">{content}</p>
            <div className="self-end">
              <button value="edit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3" onClick={(e) => operationHandler(e)}>Edit</button>
            <button  value="delete" className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-3 " onClick={(e) => operationHandler(e)}>Delete</button>  
            </div>
            
      </div>
    );
};

export default BlogDisplay;