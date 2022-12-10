import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Main from "./Main";
import Resume from "./Resume";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/resume',
                element: <Resume></Resume>
            }
        ]
    }
])