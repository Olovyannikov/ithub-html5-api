import { trackGeolocation } from '@withease/web-api';
import { atom } from '@/shared/factory';
import { createGate } from 'effector-react';
import { sample } from 'effector';

export const LocationModel = atom(() => {
    const geo = trackGeolocation();
    const gate = createGate();

    sample({
        clock: gate.open,
        target: geo.request,
    });

    return {
        geo,
        gate,
    };
});
