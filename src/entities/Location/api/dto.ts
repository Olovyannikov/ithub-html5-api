export interface LocationApiDto {
    ll: number[];
    spn: number[];
}

export interface Properties {
    name: string;
    CompanyMetaData: {
        address: string;
        Hours: {
            text: string;
        };
        Phones: {
            formatted: string;
        }[];
        Categories: {
            name: string;
        }[];
    };
}

export interface LocationApiResponseDto {
    features: {
        geometry: {
            coordinates: [number, number];
        };
        properties: Properties;
    }[];
}

export interface LocationWeatherRequest {
    latitude: number;
    longitude: number;
}
