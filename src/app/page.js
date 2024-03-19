'use client'
import { lazy, Suspense, useState } from "react";

const KeenSliderContent = lazy(() => import("@/components/KeenSliderContent"));
const WaveSurferContent = lazy(() => import("@/components/WaveSurferContent"));
const ZustandContent = lazy(() => import("@/components/ZustandContent"));
const TailwindContent = lazy(() => import("@/components/TailwindContent"));
const ReactSlick = lazy(() => import("@/components/ReactSlick"));


export default function Home() {
  const [tabState, setTabState] = useState(5)

  return (
    <main className="h-screen">
      <div className="flex flex-col justify-center gap-3 m-4 md:m-0 md:flex-row">
        <button className="p-2 border border-purple-400 rounded-lg active:bg-purple-300 font-bold h-10" onClick={() => { setTabState(1) }}>Keen slider</button>
        <button className="p-2 border border-sky-400 rounded-lg active:bg-sky-300 font-bold h-10" onClick={() => { setTabState(5) }}>React Slick</button>
        <button className="p-2 border border-red-400 rounded-lg active:bg-red-300 font-bold h-10" onClick={() => { setTabState(2) }}>Wavesurfer</button>
        <button className="p-2 border border-green-400 rounded-lg active:bg-green-300 font-bold h-10" onClick={() => { setTabState(3) }}>Zustand</button>
        <button className="p-2 border border-orange-400 rounded-lg active:bg-orange-300 font-bold h-10" onClick={() => { setTabState(4) }}>Tailwind</button>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {tabState === 1 &&
          <KeenSliderContent />
        }

        {tabState === 2 &&
          <WaveSurferContent />
        }

        {tabState === 3 &&
          <ZustandContent />
        }

        {tabState === 4 &&
          <TailwindContent />
        }

        {tabState === 5 &&
          <ReactSlick />
        }
      </Suspense>

    </main>
  );
}
