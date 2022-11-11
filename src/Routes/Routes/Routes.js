import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../components/Home/Home';
import Admin from '../../layouts/Admin';
import Main from '../../layouts/Main';
import Login from '../../adminPannel/Login/Login';
import Register from '../../adminPannel/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ErrorPage from '../../adminPannel/ErrorPage/ErrorPage';
import Dashboard from '../../adminPannel/Dashboard/Dashboard';
import AboutUs from '../../components/AboutUs/AboutUs';
import Contact from '../../components/Contact/Contact';
import Products from '../../layouts/Products';
import AllProducts from '../../components/AllProducts/AllProducts';
import CategoryProduct from '../../components/CategoryProduct/CategoryProduct';

export const CLIENT_URL = "https://art.emporia-bd.com/art_api/api/v1/art";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`${CLIENT_URL}/product`)
            },
            {
                path:'/about',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/products',
                element:<Products></Products>,
                loader: ()=> fetch(`${CLIENT_URL}/category`),
                children: [
                    {
                        path:'/products',
                        element:<AllProducts></AllProducts>,
                        loader: () => fetch(`${CLIENT_URL}/product`)
                    },
                    {
                        path:'/products/category/:id',
                        element:<CategoryProduct></CategoryProduct>,
                        loader: ({params}) => fetch(`${CLIENT_URL}/category/${params.id}`)
                    }
                ]
            },
            {
                

            }
        ]
    },
    {
        path: '/admin',
        element: <Admin></Admin>,
        children: [
            {
                path:'/admin',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/admin/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path:'/admin/login',
        element: <Login></Login>
    },
    
    {
        path: "/*",
        element: <ErrorPage></ErrorPage>
    }
]);
