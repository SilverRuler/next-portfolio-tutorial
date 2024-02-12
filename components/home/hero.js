import Animation from "./animation";
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                SilverRuler
                <br className="hidden lg:inline-block"/>
                To See an Empire Fall
            </h1>
            <p className="mb-8 leading-relaxed">
            A world united by network
            </p>
            <div className="flex justify-center">
                <Link href="/projects">
                    <a className="btn-project">
                        View My Thesis
                    </a>
                </Link>
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
    );
}
