import { Link, Outlet } from "react-router-dom";

const Home = () => {

    return ( 
        <>
         <>
            <nav>
                <ul>
                    <li><Link to="/character?pageSize=403">Characters</Link></li>
                    {/* <li><Link to="/movies">Movies & TV Shows</Link></li> */}
                </ul>
            </nav>
        </>
        </>
     );
}
 
export default Home;