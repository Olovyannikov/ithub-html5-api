import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { routerConfig } from '@/shared/config/router';
import { PageLoader } from '@/shared/ui';

export function AppRouter() {
    return (
        <Suspense fallback={<PageLoader />}>
            <RouterProvider router={routerConfig} />
        </Suspense>
    );
}
