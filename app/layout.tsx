import { FC, PropsWithChildren } from "react";
import '@/app/ui/globals.css';

const RootLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <html>
            <body className="text-center p-10 bg-blue-100 text-2xl">
                {children}
            </body>
        </html>
    );
};

export default RootLayout