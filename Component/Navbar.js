import Link from 'next/link'
const Navbar = () => {
    return ( 
        <nav>
        <div className="logo">
            <h1>
                Rimarkabl
            </h1>
        </div>
       <Link href="/users"><a className="nav-text">Users List</a></Link>
        <Link href="/articals"><a className="nav-text">Articals List</a></Link> 
        </nav>
     );
}
 
export default Navbar;