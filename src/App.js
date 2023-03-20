import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './laytOut/Main';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import { UserAuthContext } from './Context/AuthContext';

function App() {


const router = createBrowserRouter([
 {
  path:'/',
  element:<Main></Main>,
  children:[
    {
    path:'/',
    element:<Home></Home>
  },
    {
    path:'signup',
    element:<Registration></Registration>
  },
    {
    path:'/login',
    element:<Login></Login>
  },
]
 } 
])


  return (
    <RouterProvider router={router}></RouterProvider>
    
  );
}

export default App;
