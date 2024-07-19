import React, { useEffect, useState } from 'react'
import { Shell } from './components/ui/Shell'
import { Cart } from './components/icons/Cart'
import { NavLink, Outlet } from 'react-router-dom'
import logo from './assets/images/logo.svg'
import avatar from './assets/images/image-avatar.png'
import './index.css'
import { Menu } from './components/icons/Menu'
import { Button } from './components/ui/Button'
import { Delete } from './components/icons/Delete'
import { images } from './data'
import { Close } from './components/icons/Close'

function App() {
	const [count, setCount] = useState(2)
	const [isCart, setIsCart] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	return (
		<React.Fragment>
			<header>
				<Shell className="container lg:h-[8rem] sx:h-[5rem] sx:px-8">
					<div className="w-full h-full flex gap-6 justify-between items-center  lg:border-b-2  ">
						<div className="flex gap-4 items-center">
							<div className="lg:hidden sx:block cursor-pointer">
								<Menu onClick={() => setIsOpen(!isOpen)} />
							</div>
							<NavLink to={'/'}>
								<img src={logo} alt="logo" />
							</NavLink>
						</div>

						<nav
							className={`w-[70%] h-full lg:flex ${
								isOpen
									? 'flex flex-col gap-8 items-start p-8 w-[60%] absolute top-0 left-[-1rem] h-[100vh] z-50 bg-gray-100 overscroll-none'
									: 'hidden  items-center'
							}`}
						>
							{isOpen && <Close className="cursor-pointer ml-2" onClick={() => setIsOpen(!isOpen)} />}

							<ul
								className={`h-full flex justify-start text-xl ${
									isOpen ? 'flex-col items-start w-full gap-4' : ' items-center  gap-8  '
								}`}
							>
								<li
									className={` flex items-center  hover:border-b-orange-200 hover:border-b-4 px-2 ${
										isOpen ? 'h-16' : 'h-full'
									}`}
								>
									<NavLink
										to={'collections'}
										className={({ isActive }) =>
											isActive ? 'text-blue-300' : `text-blue-200  hover:text-blue-300 ${isOpen && 'text-blue-500'}`
										}
										onClick={() => setIsOpen(false)}
									>
										Collections
									</NavLink>
								</li>
								<li
									className={` flex items-center hover:text-blue-300 hover:border-b-orange-200 hover:border-b-4 px-2 ${
										isOpen ? 'h-16' : 'h-full'
									}`}
								>
									<NavLink
										to={'men'}
										className={({ isActive }) =>
											isActive ? 'text-blue-300' : `text-blue-200  hover:text-blue-300 ${isOpen && 'text-blue-500'}`
										}
										onClick={() => setIsOpen(false)}
									>
										Men
									</NavLink>
								</li>
								<li
									className={` flex items-center hover:text-blue-300 hover:border-b-orange-200 hover:border-b-4 px-2 ${
										isOpen ? 'h-16' : 'h-full'
									}`}
								>
									<NavLink
										to={'women'}
										className={({ isActive }) =>
											isActive ? 'text-blue-300' : `text-blue-200  hover:text-blue-300 ${isOpen && 'text-blue-500'}`
										}
										onClick={() => setIsOpen(false)}
									>
										Women
									</NavLink>
								</li>
								<li
									className={` flex items-center hover:text-blue-300 hover:border-b-orange-200 hover:border-b-4 px-2 ${
										isOpen ? 'h-16' : 'h-full'
									}`}
								>
									<NavLink
										to={'about'}
										className={({ isActive }) =>
											isActive ? 'text-blue-300' : `text-blue-200  hover:text-blue-300 ${isOpen && 'text-blue-500'}`
										}
										onClick={() => setIsOpen(false)}
									>
										About
									</NavLink>
								</li>
								<li
									className={` flex items-center hover:text-blue-300 hover:border-b-orange-200 hover:border-b-4 px-2 ${
										isOpen ? 'h-16' : 'h-full'
									}`}
								>
									<NavLink
										to={'contact'}
										className={({ isActive }) =>
											isActive ? 'text-blue-300' : `text-blue-200  hover:text-blue-300 ${isOpen && 'text-blue-500'}`
										}
										onClick={() => setIsOpen(false)}
									>
										Contact
									</NavLink>
								</li>
							</ul>
						</nav>
						<div className="flex lg:gap-12 sx:gap-6 items-center justify-end">
							<div className="cursor-pointer relative" onClick={() => setIsCart(!isCart)}>
								<Cart />
								{count !== 0 && (
									<div className="bg-orange-200 absolute px-2 py-[0.1rem] rounded-full text-white text-sm top-[-0.75rem] left-2">
										{count}
									</div>
								)}
							</div>
							<div className=" sx:w-[30%]  rounded-full hover:border-orange-200 border-4">
								<img src={avatar} alt="avatar" className="w-full object-cover cursor-pointer" />
							</div>
						</div>
					</div>
					{isCart && (
						<div className="bg-gray-100  min-h-[20rem] absolute rounded-lg lg:w-[30%] sx:w-[90%] sx:top-[10%] sx:right-[5%] shadow-2xl z-10 ">
							<div className="text-blue-500 text-xl font-bold  p-8 border-b-2">Cart</div>
							{count !== 0 ? (
								<div className="flex flex-col p-8 gap-6 justify-between">
									<div className="w-full flex justify-between items-center gap-4 ">
										<div className="w-[20%] rounded-md overflow-hidden">
											<img src={images[0].url} alt={images[0].title} />
										</div>
										<div className="w-[60%] flex flex-col justify-between items-start gap-2">
											<span className="text-md">Fall Limited Edition Sneakers</span>
											<div className="flex gap-2 items-center justify-start">
												<span>$125.00</span>
												<span>x</span>
												<span>{count}</span>
												<strong className="text-blue-500">{`$${(125.0 * count).toFixed(2)}`}</strong>
											</div>
										</div>
										<Delete className="cursor-pointer" onClick={() => setCount(0)} />
									</div>
									<Button variant={'accent'} size={'large'} className="w-full" onClick={() => setIsCart(false)}>
										Checkout
									</Button>
								</div>
							) : (
								<div className="w-full h-[10rem] flex justify-center items-center text-lg font-bold text-blue-500">
									Your cart is empty
								</div>
							)}
						</div>
					)}
				</Shell>
			</header>
			<div
				className={`${isOpen ? 'absolute h-full top-0 left-0 right-0 bg-blue-500/80 z-10 overscroll-none' : 'hidden'}`}
			></div>
			<Outlet />
		</React.Fragment>
	)
}

export default App
