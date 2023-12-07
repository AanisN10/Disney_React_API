import { Link, Outlet } from "react-router-dom";
import "../styles.css" 


const Home = () => {
    return (
        <>
            <nav className = "nav-bar">
                <button><Link to ="/">Go to Disney Home</Link></button>
                <button><Link to ="/characters">Characters</Link></button>
            </nav>
            <Outlet />
        
        </>
    );
}
export default Home;
