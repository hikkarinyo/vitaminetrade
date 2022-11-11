import MainPanel from '../src/pages/MainPanel'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPanel/>,
    },
    {
        path: "/antistress",
        element: <MainPanel/>,
    },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
