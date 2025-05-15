import { Outlet } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList"

const Home = () =>{
    return(
        <main>
            <ProductList/>
            <Outlet/>
        </main>
    )
}

export default Home;