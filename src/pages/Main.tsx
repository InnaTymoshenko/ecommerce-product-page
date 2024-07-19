import { InfoProduct } from '../components/InfoProduct'
import { Product } from '../components/Product'
import { Shell } from '../components/ui/Shell'

const Main = () => {
	return (
		<Shell className="container min-h-[85vh] flex lg:flex-row sx:flex-col gap-8 lg:py-28 sx:py-0 ">
			<Product />
			<InfoProduct />
		</Shell>
	)
}

export default Main
