import { FaReact } from "react-icons/fa";
import { bebas } from "./ui/fonts";
import Header from "./components/Header";

const Home = () => {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />

            <div className="mt-4 mx-auto flex grow flex-col gap-4 md:flex-row w-4/5">
            
                <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
                    <p className={`${bebas.className} text-xl text-gray-800 md:text-3xl md-leading-normal`}>
                        <strong>Welcome to JosCari</strong> Dashboard en text
                    </p>
                </div>

            </div>

        </main>
    );
};

export default Home