import { Clusterer, Placemark } from '@pbe/react-yandex-maps';
import { useUnit } from 'effector-react';

import { LocationModel } from '@/entities/Location';
export const CustomUserPointers = () => {
    const customPointers = useUnit(LocationModel.$customPointers);

    return (
        <Clusterer
            options={{
                preset: 'islands#invertedGreenClusterIcons',
                groupByCoordinates: false,
            }}
        >
            {customPointers?.map((coordinates, index) => (
                <Placemark
                    defaultOptions={{
                        iconColor: 'green',
                    }}
                    key={index}
                    geometry={coordinates}
                    modules={['geoObject.addon.balloon']}
                    properties={{
                        balloonContentHeader: `
                                Пользовательская метка`,
                        balloonContentBody: `
                                <address>${customPointers[index]}</address>
                        `,
                    }}
                />
            ))}
        </Clusterer>
    );
};
