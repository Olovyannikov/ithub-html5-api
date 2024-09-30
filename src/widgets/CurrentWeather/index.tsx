import { Paper } from '@mantine/core';
import { useUnit } from 'effector-react/effector-react.mjs';

import { getCurrentLocationWeatherQuery } from '@/entities/Location/api';

interface CurrentWeatherProps {
    className?: string;
}

export const CurrentWeather = ({ className }: CurrentWeatherProps) => {
    const { data, pending } = useUnit(getCurrentLocationWeatherQuery);

    console.log('widget', { data, pending });

    return (
        <Paper p={20} radius={8} className={className}>
            Hellow
        </Paper>
    );
};
