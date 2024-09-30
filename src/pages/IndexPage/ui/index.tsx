import { useUnit } from 'effector-react/effector-react.mjs';

import { getCurrentLocationWeatherQuery } from '@/entities/Location';
import { PageLoader } from '@/shared/ui';
import { BarFinder, CurrentWeather, RootLayout } from '@/widgets';

import s from './IndexPage.module.css';

export default function IndexPage() {
    const { pending } = useUnit(getCurrentLocationWeatherQuery);

    if (pending) return <PageLoader />;

    return (
        <RootLayout>
            <CurrentWeather className={s.paper} />
            <BarFinder />
        </RootLayout>
    );
}
