import MainPanel from '../src/pages/MainPanel'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPanel/>,
        children: [
            {
                path: "/antiage",
                element: <MainPanel/>,
            },
            {
                path: "/antistress",
                element: <MainPanel/>,
            },
            {
                path: "/antioxidants",
                element: <MainPanel/>,
            },
            {
                path: "/women",
                element: <MainPanel/>,
            },
            {
                path: "/healthysleep",
                element: <MainPanel/>,
            },
            {
                path: "/strongimmunity",
                element: <MainPanel/>,
            },
            {
                path: "/man",
                element: <MainPanel/>,
            },
            {
                path: "/omega",
                element: <MainPanel/>,
            },
            {
                path: "/memory",
                element: <MainPanel/>,
            },
            {
                path: "/weightloss",
                element: <MainPanel/>,
            },
            {
                path: "/relax",
                element: <MainPanel/>,
            },
            {
                path: "/joint",
                element: <MainPanel/>,
            },

        ]
    },


]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
