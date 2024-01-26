"use client";
import { Provider } from 'react-redux';
import Hero from '../components/Hero';
import {store} from "../data/store";
import Categories from '@/components/Categories';

export default function Home() {
    return (
        <Provider store={store}>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <Hero />
                <Categories />
            </main>
        </Provider>
    );
}
