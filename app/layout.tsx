import { FC, PropsWithChildren } from "react";
import '@/app/ui/globals.css';
import { roboto } from "./ui/fonts";

const RootLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <html>
            <body className={`${roboto.className} bg-slate-500`}>
                {children}
            </body>
        </html>
    );
};

export default RootLayout