import DisneyContainer from "./containers/DisneyContainer";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home';
import "./styles.css" 
import Disney from "./components/images/disney.png"
import Characters from "./components/images/characters.png"
import Mickey from "./components/images/mickey.png"
import AliceCarousel from "react-alice-carousel";

function App() {

  const disneyRoute = createBrowserRouter ([
    {
        path: "/",
        element: <Home/>, 
        children: [
            {
                path: "/characters",
                element: <DisneyContainer/>
            }
        ]  
    }
  ])

  return (
    <>
    <h1>Welcome to Disney</h1>
    <RouterProvider router={disneyRoute}/>

    <div >
      <p><img className="disney-image" src={Disney} width= "1500" height = "700" alt="disney"/></p>
      <p><img className="disney-image" src={Characters} width= "1500" height = "700" alt="characters"/></p>
      <p><img className="disney-image" src={Mickey} width= "1500" height = "700" alt="mickey"/></p>
      <p><AliceCarousel/></p>
    </div>
  
    </>
  )
}

export default App;
