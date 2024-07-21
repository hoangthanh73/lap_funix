import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import QuoteForm from "./components/quotes/QuoteForm";
import QuoteList from "./components/quotes/QuoteList";
import NotFound from "./components/quotes/NotFound";
import HighlightedQuote from "./components/quotes/HighlightedQuote";

const router = createBrowserRouter([
	{
		path: '',
		element: <Layout />,
		children: [
			{
				path: '/quotes',
				element: <QuoteList />
			},
			{
				path: '/',
				element: <Navigate to='/quotes' />
			},
			{
				path: '/quotes/:id',
				element: <HighlightedQuote />
			},
			{
				path: 'new-quote',
				element: <QuoteForm />
			},
			{
				path: '*',
				element: <NotFound />
			}
		]
	},
])

function App() {
	return (
		<RouterProvider router={router} />
	)
}

export default App;
