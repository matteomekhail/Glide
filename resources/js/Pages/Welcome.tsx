import { PageProps } from '@/types';
import Header from '@/Components/header';
import Hero from '@/Components/hero';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {

    return (
        <>
            <Header />
            <Hero />
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-4xl font-bold text-gray-700">Coming Soon</h1>
            </div>
        </>
    );
}
