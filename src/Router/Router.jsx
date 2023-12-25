import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CatalogPage from "../pages/CatalogPage";
import ProductCard from "../pages/ProductCard";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import OrderPage from "../pages/OrderPage";
import ConfirmationPage from "../pages/ConfirmationPage";

export const router = createBrowserRouter([
	{
		path:'/',
		element: <App/>
	},
	{
		path: '/catalog',
		element: <CatalogPage/>
	},
	{
		path: '/product',
		element: <ProductCard/>
	},
	{
		path: '/cart',
		element: <ShoppingCartPage/>
	},
	{
		path: '/order',
		element: <OrderPage/>
	},
	{
		path: '/confirm',
		element: <ConfirmationPage/>
	}
])