import { Map, Placemark, Clusterer, YMaps } from '@pbe/react-yandex-maps';

interface LocationMapProps extends ymaps.IMapState {
    clusterPoints: number[][];
}

export const LocationMap = ({ center = [55.751574, 37.573856], zoom = 18, clusterPoints }: LocationMapProps) => {
    return (
        <YMaps>
            <Map
                style={{
                    height: '100vh',
                    width: '100%',
                }}
                defaultState={{ center, zoom, controls: ['zoomControl', 'fullscreenControl'] }}
                modules={['control.ZoomControl', 'control.FullscreenControl']}
            >
                <Clusterer
                    options={{
                        preset: 'islands#invertedVioletClusterIcons',
                        groupByCoordinates: false,
                    }}
                >
                    <Placemark
                        modules={['geoObject.addon.balloon']}
                        defaultGeometry={center}
                        defaultOptions={{
                            iconColor: 'red',
                        }}
                        properties={{
                            balloonContentBody: 'Это ваше местоположение',
                        }}
                    />
                    {clusterPoints.map((coordinates, index) => (
                        <Placemark modules={['geoObject.addon.balloon']} key={index} geometry={coordinates} />
                    ))}
                </Clusterer>
            </Map>
        </YMaps>
    );
};
