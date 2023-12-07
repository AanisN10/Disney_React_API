import DisneyContainer from "./containers/DisneyContainer";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home';
import "./styles.css" 

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

    </>
  );
}

export default App;
