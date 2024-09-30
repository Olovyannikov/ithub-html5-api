import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { IndexPageLazy } from '@/pages/IndexPage';
import { PageLoader } from '@/shared/ui';

import { Loaders } from './loaders.ts';

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
        element: (
            <Suspense fallback={<PageLoader />}>
                <IndexPageLazy />
            </Suspense>
        ),
        loader: Loaders.index,
    },
]);
