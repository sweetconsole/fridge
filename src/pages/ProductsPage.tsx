import {type FC, useEffect, useState} from "react"
import { getProducts } from "../services/product.service.ts";
import type {Product} from "../types/product.type.ts";
import {Link} from "react-router-dom";

const ProductsPage: FC = () => {
	const [products, setProducts] = useState<Product[]>([])

	const loadProducts = async () => {
		const data = await getProducts()
		setProducts(data)
	}

	useEffect(() => {
		loadProducts().then(error => console.error(error))
	}, [])


	return (
		<>
			<h1>Product List</h1>
			<div>
				{products.map((product, index) => (
					<div key={index}>
						<img src={product.image} alt={`${product.name} Изображение`} />
						<p>{product.name} - {product.calories}</p>
						<Link to={`../product/${product.id}`}>Чекнуть</Link>
						<br />
					</div>
				))}
			</div>
		</>
	)
}

export default ProductsPage