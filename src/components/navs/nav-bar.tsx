import NavContent from "./nav-content";



const NavBar: React.FC = () => {




    return(
        <div className="min-w-full bg-slate-300 fixed top-0 h-12 ">
        
        <div className="flex w-full h-full items-center justify-end mr-12">
        <NavContent/>
        </div>
        
        </div>
    )
}


export default NavBar;