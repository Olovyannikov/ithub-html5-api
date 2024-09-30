import { Clusterer, Placemark } from '@pbe/react-yandex-maps';

import type { Properties } from '@/entities/Location';

interface FoundClustersProps {
    clusterPoints?: number[][];
    clusterProperties?: Properties[];
}

export const FoundClusters = ({ clusterPoints, clusterProperties }: FoundClustersProps) => (
    <Clusterer
        options={{
            preset: 'islands#invertedVioletClusterIcons',
            groupByCoordinates: false,
        }}
    >
        {clusterPoints?.map((coordinates, index) => (
            <Placemark
                options={{
                    preset: 'islands#yellowBarIcon',
                }}
                properties={{
                    balloonContentBody: `
                                <p><b>Название: </b><span>${clusterProperties?.[index]?.name}</span></p>
                                <p><b>Адрес: </b><span>${clusterProperties?.[index]?.CompanyMetaData.address}</span></p>
                                <p><b>Часы работы: </b><span>${clusterProperties?.[index]?.CompanyMetaData.Hours.text}</span></p>
                                <p><b>Телефон: </b><a href="tel:${clusterProperties?.[index]?.CompanyMetaData.Phones?.[0].formatted}">${clusterProperties?.[index]?.CompanyMetaData.Phones?.[0].formatted}</a></p>
                        `,
                }}
                modules={['geoObject.addon.balloon']}
                key={index}
                geometry={coordinates}
            />
        ))}
    </Clusterer>
);
