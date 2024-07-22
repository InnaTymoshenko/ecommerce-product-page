import { ProductImageCarousel } from './ProductImageCarousel'
import { product } from '../data'
import { Image } from '../types/type'

const Product = () => {
	const images: Image[] = product.images

	return (
		<div className="lg:w-[50%] sx:w-full lg:px-16 sx:px-0 ">
			<ProductImageCarousel images={images} />
		</div>
	)
}

export { Product }
