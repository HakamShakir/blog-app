import 'bootstrap/dist/css/bootstrap.min.css';  


function Blog(props) {  
    const { header, content, publishedDate } = props;
  return (  
    <div className='border-2 w-3/4 h-auto mt-5 pl-2 flex flex-col drop-shadow-xl'>  

      <div className='pt-2 flex flex-col self-center'>
        <h1 className='font-bold text-3xl '>{header}</h1>
        <p className='text-sm italic self-center	pt-2 '><span className='italic text-xs'>Published on </span>{publishedDate}</p>
      </div>
      <div className='pt-2'>
        <p className='pb-3 pl-2 text-xl'>{content}</p>
      </div>
 
    </div>  
  );  
}  
export default Blog;  