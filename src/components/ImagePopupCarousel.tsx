/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'
import { cn } from '../utils/cn'
import useEmblaCarousel from 'embla-carousel-react'
import { type EmblaOptionsType } from 'embla-carousel'
import { type CarouselApi } from './ui/Carousel'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/Carousel'
import { Star } from './icons/Star'
import { Close } from './icons/Close'
import { Image } from '../types/type'
import { Button } from './ui/Button'

interface ProductImageCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
	images: Image[]
	isModal: boolean
	setIsModal: (value: boolean) => void
	options?: EmblaOptionsType
}

export function ImagePopupCarousel({
	images,
	className,
	options,
	isModal,
	setIsModal,
	...props
}: ProductImageCarouselProps) {
	const [current, setCurrent] = React.useState(0)
	const [api, setApi] = React.useState<CarouselApi>()
	const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
		containScroll: 'keepSnaps',
		dragFree: true
	})

	const onThumbClick = React.useCallback(
		(index: number) => {
			if (!api) return
			api.scrollTo(index)
		},
		[api]
	)

	React.useEffect(() => {
		if (!api || !emblaThumbsApi) return

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap())
			emblaThumbsApi.scrollTo(api.selectedScrollSnap())
		})
	}, [api, emblaThumbsApi])

	if (images.length === 0) {
		return (
			<div
				aria-label="Product Placeholder"
				role="img"
				aria-roledescription="placeholder"
				className={cn('flex aspect-square h-full w-full flex-1 items-center justify-center bg-secondary', className)}
			>
				<Star className="h-10 w-10" aria-hidden="true" />
			</div>
		)
	}

	return (
		<>
			<div className="w-full absolute h-full bg-black/70 top-0 left-0 z-10 flex flex-col justify-center items-center">
				<div className="lg:w-[50%] sx:w-full h-[80%] flex flex-col gap-4 p-4 items-end">
					<Button
						className="hover:text-orange-200 cursor-pointer"
						variant={'ghost'}
						size={'small'}
						onClick={() => setIsModal(!isModal)}
					>
						<Close />
					</Button>

					<div className={cn('flex flex-col gap-12 w-full h-full', className)} {...props}>
						<Carousel
							setApi={setApi}
							opts={{
								loop: true
							}}
						>
							<CarouselContent>
								{images.map((image, i) => {
									return (
										<CarouselItem key={i}>
											<div
												className={cn(
													'w-full relative aspect-square min-w-full h-auto lg:max-h-[65vh] sx:max-h-[55vh] lg:rounded-2xl sx:rounded-none overflow-hidden'
												)}
											>
												<img
													src={image.url}
													alt={image.title}
													sizes="100vw"
													className={cn(`object-contain lg:rounded sx:rounded-none`)}
												/>
											</div>
										</CarouselItem>
									)
								})}
							</CarouselContent>
							<CarouselNext className=" lg:right-[-1.5rem]" />
							<CarouselPrevious className="lg:left-[-1.5rem]" />
						</Carousel>
						<div ref={emblaThumbsRef} className="overflow-hidden w-[80%] mx-auto">
							<ul className="flex gap-4">
								{images.map((image, index) => {
									return (
										<li
											className={cn(
												'relative aspect-square min-w-[96px] md:min-w-[64px] bg-white  border-transparent cursor-pointer transition-opacity duration-200 rounded-2xl overflow-hidden',
												{
													'border-4 border-orange-200 rounded-2xl ': current === index
												}
											)}
											onClick={() => onThumbClick(index)}
											key={index + 10}
										>
											<img
												src={image.url}
												alt={image.title}
												className={cn('object-cover opacity-100 hover:opacity-60', {
													' opacity-20': current === index
												})}
											/>
										</li>
									)
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
