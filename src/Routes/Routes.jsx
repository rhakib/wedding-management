import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home';
import ServiceDetails from '../Components/Services/ServiceDetails';
import Register from '../Pages/Register';
import ErrorPage from '../Pages/ErrorPage';
import Login from '../Pages/Login';
import PrivateRoute from './PrivateRoute';

const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/service/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
                
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
            
        ]
    }
])

export default myCreatedRouter;