import { Link, Outlet } from "react-router-dom";

const Home = () => {

    return ( 
        <>
         <>
            <nav>
                <ul>
                    <li><Link to="/characters">Characters</Link></li>
                    {/* <li><Link to="/movies">Movies & TV Shows</Link></li> */}
                </ul>
                < Outlet />
            </nav>
        </>
        </>
     );
}
 
export default Home;