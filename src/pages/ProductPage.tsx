import {type FC, useEffect, useState} from "react"
import type {Product} from "../types/product.type.ts";
import {getProduct} from "../services/product.service.ts";
import {useParams} from "react-router-dom";

const ProductPage: FC = () => {
	const productId = useParams().productId

	const [product, setProduct] = useState<Product>({name: "", calories: 0, id: "", fats: 0, image: "", carbohydrates: 0, proteins: 0, weight: 0})

	const loadProduct = async () => {
		if (productId) {
			const data = await getProduct(productId)

			if (data) {
				setProduct(data)
			}
		}

		console.log(productId)
	}

	useEffect(() => {
		loadProduct().then(error => console.error(error))
	}, [])

	return (
		<div>
			<img src={product.image} alt="" />
			<p>{product.name}</p>
		</div>
	)
}

export default ProductPage