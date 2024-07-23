import * as React from 'react'
import { cn } from '../utils/cn'
import useEmblaCarousel from 'embla-carousel-react'
import { type EmblaOptionsType } from 'embla-carousel'
import { type CarouselApi } from './ui/Carousel'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/Carousel'
import { Star } from './icons/Star'
import { ImagePopupCarousel } from './ImagePopupCarousel'
import { Image } from '../types/type'

interface ProductImageCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
	images: Image[]
	options?: EmblaOptionsType
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ProductImageCarousel({ images, className, options, ...props }: ProductImageCarouselProps) {
	const [current, setCurrent] = React.useState(0)
	const [isModal, setIsModal] = React.useState(false)
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
			<div className={cn('flex flex-col gap-12', className)} {...props}>
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
											'w-full relative cursor-pointer  aspect-square min-w-full h-auto lg:rounded-2xl sx:rounded-none overflow-hidden'
										)}
										onClick={() => setIsModal(!isModal)}
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
					<CarouselNext className="sx:block lg:hidden" />
					<CarouselPrevious className="sx:block lg:hidden" />
				</Carousel>
				<div ref={emblaThumbsRef} className="overflow-hidden lg:block sx:hidden">
					<ul className="flex gap-4">
						{images.map((image, i) => {
							return (
								<li
									className={cn(
										'relative aspect-square min-w-[96px] md:min-w-[64px]  border-transparent cursor-pointer transition-opacity duration-200 rounded-2xl overflow-hidden',
										{
											'border-4 border-orange-200 rounded-2xl ': current === i
										}
									)}
									onClick={() => onThumbClick(i)}
									key={i}
								>
									<img
										src={image.url}
										alt={image.title}
										className={cn('object-cover opacity-100 hover:opacity-60', {
											' opacity-20': current === i
										})}
									/>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
			{isModal && <ImagePopupCarousel isModal={isModal} setIsModal={setIsModal} images={images} {...props} />}
		</>
	)
}
