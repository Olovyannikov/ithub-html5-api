import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { PageLoader } from '@/shared/ui';
import { routerConfig } from '@/shared/config/router';

export function AppRouter() {
    return (
        <Suspense fallback={<PageLoader />}>
            <RouterProvider router={routerConfig} />
        </Suspense>
    );
}
