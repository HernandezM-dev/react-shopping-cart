import React from 'react';

const Item = props => {
	const {removeItem} = props

	const removeItemHandler = () =>{

		removeItem(props.id);
	}

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.id} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<p></p>
				<button onClick={removeItemHandler}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
