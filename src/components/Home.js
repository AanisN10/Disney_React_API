import { Link, Outlet } from "react-router-dom";


const Home = () => {
    return (
        <>
            <nav>
                <button><Link to ="/">Go to Disney Home</Link></button>
                <button><Link to ="/characters">Characters</Link></button>
            </nav>
            <Outlet />
        
        </>
    );
}
export default Home;
