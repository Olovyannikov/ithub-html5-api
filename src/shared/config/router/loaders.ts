import { createEvent, sample } from 'effector';

import { getBarsQuery, getCurrentLocationWeatherQuery, LocationModel } from '@/entities/Location';

export const Loaders = {
    index: async () => {
        const appStarted = createEvent();

        sample({
            clock: LocationModel.$lastKnownLocation,
            filter: () => Boolean(LocationModel.$lastKnownLocation),
            fn: (params) => ({
                ll: [params?.longitude ?? 37, params?.latitude ?? 55],
                spn: [0.014924, 0.005646],
            }),
            target: getBarsQuery.start,
        });

        sample({
            clock: [appStarted],
            source: LocationModel.$lastKnownLocation,
            filter: () => Boolean(LocationModel.$lastKnownLocation),
            fn: (params) => params ?? { latitude: 55, longitude: 55 },
            target: getCurrentLocationWeatherQuery.start,
        });

        sample({
            clock: appStarted,
            filter: () => Boolean(LocationModel.$lastKnownLocation),
            target: LocationModel.geo.request,
        });

        appStarted();

        return null;
    },
};
