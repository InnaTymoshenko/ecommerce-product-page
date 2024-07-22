import { Cart } from './icons/Cart'
import { Minus } from './icons/Minus'
import { Plus } from './icons/Plus'
import { Button } from './ui/Button'
import { useProduct } from '../store/store'

const InfoProduct = () => {
	const { addProduct, product, plusCount, minusCount, count } = useProduct()

	const handleMinusCount = () => {
		if (count === 0) return
		else {
			minusCount()
		}
	}

	return (
		<div className="lg:w-[50%] sx:w-full lg:py-16 lg:pr-24 flex flex-col items-start justify-between lg:gap-4 sx:gap-8 sx:px-12 lg:pl-2 sx:pb-16">
			<span className="text-lg tracking-[0.2em] font-bold uppercase">Sneaker Company</span>
			<h1 className="text-blue-500 text-5xl font-bold lg:mb-8 sx:mb-2">{product.title}</h1>
			<p className="text-lg leading-relaxed lg:tracking-widest sx:tracking-[0.15em] font-semibold">
				{product.description}
			</p>
			<div className="sx:w-full flex lg:flex-col sx:flex-row justify-between lg:items-start sx:items-center gap-4">
				<div className="flex gap-8">
					<span className="text-blue-500 text-4xl font-bold">{`$${product.lowPrice?.toFixed(2)}`}</span>
					<span className="text-white text-lg font-bold px-2 py-1 mt-2 bg-blue-500 rounded-lg">{`${product.discount}%`}</span>
				</div>
				<span className="text-xl font-bold line-through">{`$${product.price.toFixed(2)}`}</span>
			</div>
			<div className="w-full flex xl:flex-row sx:flex-col gap-4  justify-between mt-4">
				<div className="bg-gray-200 rounded-lg flex justify-between items-center px-4 py-4 gap-8 lg:text-lg sx:text-xl text-blue-500 font-bold">
					<Button variant={'ghost'} size={'small'} onClick={handleMinusCount}>
						<Minus />
					</Button>
					<span>{count}</span>
					<Button variant={'ghost'} size={'small'} onClick={() => plusCount()}>
						<Plus />
					</Button>
				</div>
				<Button
					variant={'accent'}
					size={'large'}
					className="sx:shadow-3xl lg:shadow-none"
					onClick={() => addProduct(count)}
				>
					<Cart />
					Add to cart
				</Button>
			</div>
		</div>
	)
}

export { InfoProduct }
