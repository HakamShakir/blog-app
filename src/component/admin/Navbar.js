

const Navbar = ({ setpopup } ) => {

    
    const popupHandler = () => {
        setpopup((popup) => !popup);
    }
    return (
       
        
        <nav className="flex items-center justify-between flex-wrap bg-blue-400 p-6">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://instagram.com/hakumi_shakir" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Hakam Shakir" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Hakam Shakir</span>
      </a>
      <div className="flex md:order-2">
     <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={popupHandler}>Add new blog</button>
         
      
      </div>
    
      </div>
    </nav>
    )
}


export default Navbar;