"use client";

import {useState} from "react";

// noinspection JSUnusedGlobalSymbols
export default function Home() {
    const [extraTextVisible, setExtraTextVisible] = useState(false);
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-10 bg-[#13142b]">
            <span>Hello World by <a href="https://octomind.dev" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Octomind</a></span>
             <button className="rounded-full border-2 p-2" onClick={() => {
                setExtraTextVisible(!extraTextVisible);
            }}>Show more</button>
            <div className="h-5">
            {extraTextVisible &&
            " This is more text!"}
                </div>

        </main>
    )
}
