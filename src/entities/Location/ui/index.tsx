import { useCallback, useRef } from 'react';
import { GeolocationControl, Map, RoutePanel, YMaps } from '@pbe/react-yandex-maps';

import { type Properties } from '../api/dto.ts';
import { MapState, YMapsQuery } from './constants.ts';
import { CustomUserPointers } from './CustomUserPointers';
import { FoundClusters } from './FoundClusters';
import { UserCurrentLocation } from './UserCurrentLocation';

interface LocationMapProps extends ymaps.IMapState {
    trackGeoPosition: VoidFunction;
    addCustomPointer?: (pointers: [number, number]) => void;
    clusterPoints?: number[][];
    clusterProperties?: Properties[];
}

export const LocationMap = ({
    center = [55.751574, 37.573856],
    zoom = 16,
    clusterPoints,
    clusterProperties,
    trackGeoPosition,
    addCustomPointer,
}: LocationMapProps) => {
    const ref = useRef<ymaps.Map | undefined>(undefined);

    const mapClickHandler = useCallback(
        (e: { get(s: string): [number, number] }) => {
            addCustomPointer?.(e.get('coords'));
        },
        [addCustomPointer]
    );

    return (
        <YMaps query={YMapsQuery}>
            <Map
                {...MapState}
                state={{
                    center,
                    zoom,
                }}
                instanceRef={ref}
                onClick={mapClickHandler}
            >
                <RoutePanel
                    options={{
                        autofocus: false,
                    }}
                />
                <GeolocationControl onClick={trackGeoPosition} />
                <UserCurrentLocation center={center} />
                <FoundClusters clusterPoints={clusterPoints} clusterProperties={clusterProperties} />
                <CustomUserPointers />
            </Map>
        </YMaps>
    );
};
