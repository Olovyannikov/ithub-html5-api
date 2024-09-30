import { Placemark } from '@pbe/react-yandex-maps';

interface UserCurrentLocationProps {
    center: number[];
}

export const UserCurrentLocation = ({ center }: UserCurrentLocationProps) => (
    <Placemark
        modules={['geoObject.addon.balloon']}
        geometry={center}
        defaultOptions={{
            iconColor: 'red',
        }}
        properties={{
            balloonContentBody: 'Это ваше местоположение',
        }}
    />
);
