import { trackGeolocation } from '@withease/web-api';
import { createEvent, createStore, sample } from 'effector';
import { persist } from 'effector-storage/local';

import { atom } from '@/shared/factory';

export const LocationModel = atom(() => {
    const geo = trackGeolocation();

    const $lastKnownLocation = createStore<{ latitude: number; longitude: number } | null>(null);
    const $customPointers = createStore<number[][]>([]);

    const customPointerAdded = createEvent<[number, number]>();

    persist({
        store: $lastKnownLocation,
        key: 'location',
    });

    persist({
        store: $customPointers,
        key: 'customPointers',
    });

    sample({
        clock: geo.$location,
        target: $lastKnownLocation,
    });

    sample({
        clock: customPointerAdded,
        source: $customPointers,
        fn: (pointers, pointer) => [...pointers, pointer],
        target: $customPointers,
    });

    return {
        geo,
        $lastKnownLocation,
        customPointerAdded,
        $customPointers,
    };
});
