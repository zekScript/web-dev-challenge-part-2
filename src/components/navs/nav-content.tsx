import Link from "next/link";




const NavContent: React.FC = () => {




    return(
        <>
        
        <ul>
            <Link href="/login">Log in</Link>
            <Link href="/signin">Sign in</Link>
            <Link href="/cart">Cart</Link>

        </ul>
        
        
        </>
    )
}

export default NavContent;