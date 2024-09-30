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

export interface LocationWeatherResponseDto {
    name: string;
    weather: {
        description: string;
        main: string;
    }[];
    main: {
        feels_like: number;
        grnd_level: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
}
