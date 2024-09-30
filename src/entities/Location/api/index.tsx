import { createQuery } from '@farfetched/core';

import { createCommonRequestFx, createWeatherRequestFx } from '@/shared/api';

import { LocationApiDto, LocationApiResponseDto, LocationWeatherRequest } from './dto.ts';

export const getBarsQuery = createQuery({
    effect: createCommonRequestFx<LocationApiDto, LocationApiResponseDto>(({ ll, spn }) => ({
        url: `/v1/?apikey=${import.meta.env.VITE_YMAP_API_KEY}&text=бар&type=biz&lang=ru_RU&ll=${ll.join(',')}&spn=${spn.join(',')}`,
    })),
});

export const getCurrentLocationWeatherQuery = createQuery({
    effect: createWeatherRequestFx<LocationWeatherRequest, void>(({ latitude, longitude }) => ({
        url: `/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API}`,
    })),
});
