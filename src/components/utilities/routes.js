import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Blog';
import Home from '../Home';
import Root from '../Root';
import Statistics from '../Statistics';
import About from '../About';
import ErrorPage from '../ErrorPage';
import QuizContainer from '../QuizContainer';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            {
                path: '/home/:quizId',
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${ params.quizId }`),
                element: <QuizContainer />
            },
            { path: 'statistics', element: <Statistics /> },
            { path: '/blog', element: <Blog /> },
            { path: '/about', element: <About /> }
        ]
    }
])

export default router;
