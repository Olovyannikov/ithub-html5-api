import { LocationMap } from '@/entities/Location';
import { useUnit } from 'effector-react';
import { LocationModel } from '@/entities/Location/model';

export const BarFinder = () => {
    const { location } = useUnit({
        location: LocationModel.geo.$location,
    });

    const clusterPoints = [[55.751574, 37.573856]];

    if (!location) return null;

    return <LocationMap center={[location.latitude, location.longitude]} clusterPoints={clusterPoints} />;
};
