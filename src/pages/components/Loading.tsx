import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectLoading } from "../../features/core/coreSlice";
import { ReactComponent as LoadingSvg } from "./loading.svg";

export default function Loading() {
    const loading = useAppSelector(selectLoading);
    return loading ? (
        <div className="fixed w-screen h-screen bg-zinc-700 opacity-80 z-50">
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                <div className="w-24 h-24">
                    <LoadingSvg></LoadingSvg>
                </div>
                <div className="mt-3 text-gray-200 font-mono text-sm sm:text-xs text-center">
                    Loading...
                </div>
            </div>
        </div>
    ) : (
        <></>
    );
}
