import { useProduct } from '../store/store'
import { Delete } from './icons/Delete'
import { Button } from './ui/Button'

type CartProps = {
	setIsCart: (value: boolean) => void
}

const CartComponent = ({ setIsCart }: CartProps) => {
	const { product, deleteCart } = useProduct()

	const handleCheckout = () => {
		setIsCart(false)
		deleteCart()

		alert('Your payment was successful')
	}

	return (
		<div className="bg-gray-100  min-h-[20rem] absolute rounded-lg lg:w-[30%] sx:w-[90%] sx:top-[10%] sx:right-[5%] shadow-2xl z-10 ">
			<div className="text-blue-500 text-xl font-bold  p-8 border-b-2">Cart</div>
			{product.count ? (
				<div className="flex flex-col p-8 gap-6 justify-between">
					<div className="w-full flex justify-between items-center gap-4 ">
						<div className="w-[20%] rounded-md overflow-hidden">
							<img src={product.images[0].url} alt={product.images[0].title} />
						</div>
						<div className="w-[60%] flex flex-col justify-between items-start gap-2">
							<span className="text-md">Fall Limited Edition Sneakers</span>
							<div className="flex gap-2 items-center justify-start">
								<span>$125.00</span>
								<span>x</span>
								<span>{product.count}</span>
								{product.count && <strong className="text-blue-500">{`$${(125.0 * product.count).toFixed(2)}`}</strong>}
							</div>
						</div>
						<Delete className="cursor-pointer" onClick={() => deleteCart()} />
					</div>
					<Button variant={'accent'} size={'large'} className="w-full" onClick={handleCheckout}>
						Checkout
					</Button>
				</div>
			) : (
				<div className="w-full h-[10rem] flex justify-center items-center text-lg font-bold text-blue-500">
					Your cart is empty
				</div>
			)}
		</div>
	)
}

export default CartComponent
