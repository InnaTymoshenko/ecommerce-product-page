import { ProductImageCarousel } from './ProductImageCarousel'
import { images } from '../data'

const Product = () => {
	return (
		<div className="lg:w-[50%] sx:w-full lg:px-16 sx:px-0 ">
			<ProductImageCarousel images={images} />
		</div>
	)
}

export { Product }
