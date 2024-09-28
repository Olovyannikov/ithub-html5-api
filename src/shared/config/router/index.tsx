import { createBrowserRouter } from 'react-router-dom';
import { IndexPageLazy } from '@/pages/IndexPage';

export const AppRoutes = {
    INDEX: 'index',
} as const;

type Keys = keyof typeof AppRoutes;
type AppRoute = (typeof AppRoutes)[Keys];

const RouterPath: Record<AppRoute, string> = {
    [AppRoutes.INDEX]: '/',
};

export const routerConfig = createBrowserRouter([
    {
        path: RouterPath.index,
        element: <IndexPageLazy />,
    },
]);
