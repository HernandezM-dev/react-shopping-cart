import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	function removeItem(key){
		// add the given item to the cart
		
		console.log(key)
		setCart(cart.filter(item => item.id !== key));
	};

	return (
		<div className="App">
				<CartContext.Provider value={cart}>
					<Navigation/>
				</CartContext.Provider>


			<ProductContext.Provider value={{products, addItem}}>
					<Route exact path="/">
						<Products />
					</Route>
			<CartContext.Provider value={{cart, removeItem}}>
					<Route path="/cart">
						<ShoppingCart />
					</Route>
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
