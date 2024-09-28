import { BarFinder, RootLayout } from '@/widgets';
import { useGate } from 'effector-react';
import { LocationModel } from '@/entities/Location/model';

export default function IndexPage() {
    useGate(LocationModel.gate);
    return (
        <RootLayout>
            <BarFinder />
        </RootLayout>
    );
}
