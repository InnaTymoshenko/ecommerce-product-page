import { create } from 'zustand'
import { IProduct } from '../types/type'
import { product } from '../data'

interface IProductStore {
	product: IProduct
	count: number
	plusCount: () => void
	minusCount: () => void
	addProduct: (count: number) => void
	deleteCart: () => void
}

export const useProduct = create<IProductStore>()((set, get) => ({
	product: {
		...product,
		count: 0
	},
	count: 0,
	plusCount: () => {
		set({
			count: get().count + 1
		})
	},
	minusCount: () => {
		set({
			count: get().count - 1
		})
	},
	addProduct: count => {
		const newProduct = {
			...product,
			count: count
		}
		set({
			product: newProduct
		})
	},
	deleteCart: () => {
		set({
			product: {
				...product,
				count: 0
			},
			count: 0
		})
	}
}))
