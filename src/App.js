// import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart/Cart';
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Nav from './components/Nav/Nav';
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './Pages/AddProduct';
import Loader from './components/Loader/Loader';
import { loadingSelector } from './redux/productSlice';
import { useSelector } from 'react-redux';

function App() {

  const loading = useSelector(loadingSelector);
  const basename = process.env.PUBLIC_URL || "/";
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Nav />,
        children: [
          { index: true, element: <Home /> },
          { path: "cart", element: <Cart /> },
          { path: "add-product", element: <AddProduct /> }
        ]
      }
    ],
    { basename }
  );

  return (
    <div className="App">
       {loading&&<Loader/>}
        <RouterProvider router={router}/>
        <ToastContainer 
        position="top-right"
        autoClose={700}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>

    
  );
}

export default App;
