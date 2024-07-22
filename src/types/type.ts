export interface Image {
	url: string
	title: string
}

export interface IProduct {
	title: string
	description: string
	price: number
	discount?: number
	lowPrice?: number
	count?: number
	images: Image[]
}
