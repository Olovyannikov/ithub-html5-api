import { List, Paper, rem, Text, ThemeIcon } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import { useUnit } from 'effector-react/effector-react.mjs';

import { getCurrentLocationWeatherQuery } from '@/entities/Location/api';

interface CurrentWeatherProps {
    className?: string;
}

export const CurrentWeather = ({ className }: CurrentWeatherProps) => {
    const { data } = useUnit(getCurrentLocationWeatherQuery);

    return (
        <Paper p={20} radius={8} className={className} shadow='md'>
            <List
                spacing='xs'
                size='sm'
                center
                fw={400}
                icon={
                    <ThemeIcon color='teal' size={24} radius='xl'>
                        <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
                    </ThemeIcon>
                }
            >
                <List.Item>
                    <Text fz={12} span fw={600}>
                        Район:&nbsp;
                    </Text>
                    {data?.name}
                </List.Item>
                <List.Item>
                    <Text fz={12} span fw={600}>
                        Погода:&nbsp;
                    </Text>
                    {data?.weather[0].main}
                </List.Item>
                <List.Item>
                    <Text fz={12} span fw={600}>
                        Описание:&nbsp;
                    </Text>
                    {data?.weather[0].description}
                </List.Item>
                <List.Item>
                    <Text fz={12} span fw={600}>
                        Температура:&nbsp;
                    </Text>
                    {data?.main.temp} °C
                </List.Item>
                <List.Item>
                    <Text fz={12} span fw={600}>
                        Ощущается как:&nbsp;
                    </Text>
                    {data?.main.feels_like} °C
                </List.Item>
            </List>
        </Paper>
    );
};
