
const routes = [
	{
		path: '/login',
		element: (
			<ProtectedRoute>
				<Login />
			</ProtectedRoute>
		)	
	},
	{
		path: '/dashboard',
		element: <Dashboard />
	},
	{
		path: '/*',
		element: <NotFound />
	},
];

export default routes;