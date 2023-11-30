import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './component/Home/Home.js';
import About from './component/About/About.js';
import Github from './component/Github/Github';
import Contact from './component/Contact/Contact';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>,
//       },
//       {
//         path: 'About',
//         element: <About />,
//       },
//       {                                                                           
//         path: 'Github',
//         element:<Github/>
//       },
//       {
//         path: 'Contact',
//         element:<Contact/>
//       }
//     ],
//   },
// ]);



// 2 Method
const router=createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>
    <Route path='Contact' element={<Contact/>}/>

    <Route path='About' element={<About/>}/>
    <Route path='Github' element={<Github/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
