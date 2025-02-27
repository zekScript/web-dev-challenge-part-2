
type Props = {

    children: React.ReactNode;
}


const Layout: React.FC<Props> = ({children}) => {



    return(
        <>
        
        {/* Topbar */}
        {children}
        {/* Footer */}

        
        </>
    )
}

export default Layout;