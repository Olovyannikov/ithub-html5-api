import { createRequestFx } from './create-request-fx';

export const createCommonRequestFx = createRequestFx({
    baseURL: 'https://search-maps.yandex.ru',
});

export const createWeatherRequestFx = createRequestFx({
    baseURL: 'https://api.openweathermap.org/data/2.5',
});
