import { PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet';

interface RootLayoutProps {
    title?: string;
}

export const RootLayout = ({ children, title = 'BarFinder' }: PropsWithChildren<RootLayoutProps>) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div>
                <main>{children}</main>
            </div>
        </>
    );
};
