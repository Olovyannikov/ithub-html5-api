import { useUnit } from 'effector-react';

import { getBarsQuery, LocationMap, LocationModel } from '@/entities/Location';

export const BarFinder = () => {
    const { data, localStorageLocation, requestGeoPosition, addCustomPointer } = useUnit({
        requestGeoPosition: LocationModel.geo.request,
        localStorageLocation: LocationModel.$lastKnownLocation,
        addCustomPointer: LocationModel.customPointerAdded,
        data: getBarsQuery.$data.map((el) => el?.features),
    });

    const clusterPoints = data?.map((el) => el.geometry).map((el) => el.coordinates);
    const clusterProperties = data?.map((el) => el.properties);

    if (!localStorageLocation) return null;

    return (
        <LocationMap
            trackGeoPosition={requestGeoPosition}
            center={[localStorageLocation.latitude, localStorageLocation.longitude]}
            clusterPoints={clusterPoints?.map((el) => [el[1], el[0]])}
            clusterProperties={clusterProperties}
            addCustomPointer={addCustomPointer}
        />
    );
};
