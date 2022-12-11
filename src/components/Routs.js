import { createBrowserRouter } from 'react-router-dom';
import About from './About';
import Home from './Home/Home';
import Main from './Main';
import Blog from './Blog';
import Contact from './Contact';
import Project1 from './Home/ProjectDetails/Project1';
import Project2 from './Home/ProjectDetails/Project2';
import Project3 from './Home/ProjectDetails/Project3';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      }
      ,
      {
        path: '/about',
        element: <About></About>,
      }
      ,
      {
        path: '/contact',
        element: <Contact></Contact>,
      }
      ,
      {
        path: '/project1',
        element: <Project1></Project1>,
      }
      ,
      {
        path: '/project2',
        element: <Project2></Project2>,
      }
      ,
      {
        path: '/project3',
        element: <Project3></Project3>
      }
    ],
  },
]);
