import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ErrorPage from '../error-page'
import Men from '../pages/Men'
import Women from '../pages/Women'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Collections from '../pages/Collections'
import Main from '../pages/Main'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Main />
			},
			{
				path: 'collections',
				element: <Collections />
			},
			{
				path: 'men',
				element: <Men />
			},
			{
				path: 'women',
				element: <Women />
			},
			{
				path: 'about',
				element: <About />
			},
			{
				path: 'contact',
				element: <Contact />
			}
		]
	}
])
