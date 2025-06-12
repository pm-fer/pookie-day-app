"use client";

import { useState, useEffect } from "react";
import MessageComp from "./messageComp";
import BottomSection from "./bottomSection";
// @ts-expect-error
import confetti from "canvas-confetti";
import Image from "next/image";

export default function Home() {
  const [clicks, setClicks] = useState(0);
  const [hasCelebrated, setHasCelebrated] = useState(false);
  const isOpened = clicks >= 25;

  const handleClick = () => {
    setClicks((prev) => prev + 1);
  };

  const getMessage = () => {
    if (clicks >= 20) return "FASTEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRR";
    if (clicks >= 10) return "FASTER!!!";
    if (clicks >= 5) return "like. faster tho";
    if (clicks >= 1) return "keep clicking girl";
    return "click on the gift to open :3";
  };

  useEffect(() => {
    if (isOpened && !hasCelebrated) {
      confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 },
      });
      setHasCelebrated(true);
    }
  }, [isOpened, hasCelebrated]);

  if (!isOpened) {
    return (
      <div className="min-h-screen w-full bg-violet-600 flex flex-col items-center justify-center text-white text-center px-4">
        <div className="relative w-20 h-20 sm:w-20 sm:h-20 animate-bounce">
          <Image
            src={clicks >= 30 ? "/giftOpen.png" : "/giftClosed.png"}
            alt="bday gift!!"
            onClick={handleClick}
            fill
            className="object-contain cursor-pointer transition-transform active:scale-90 touch-manipulation select-none"
          />
        </div>
        <p className="mt-6 text-lg font-semibold underline decoration-1 decoration-wavy">
          {getMessage()}
        </p>
      </div>
    );
  }

  return (
<div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
  <div className="grid grid-rows-[5px_1fr] items-center justify-items-center pb-5 p-8 gap-6">
    <main className="flex flex-col row-start-2 sm:items-start gap-4">
      <div className="flex items-center gap-2">
        <p className="text-4xl font-bold leading-tight underline decoration-wavy decoration-violet-300">
          {"HAPPY BIRTHDAY"}
          <br />
          {"POOKIE!!!!"}
        </p>
        <div className="relative w-32 h-[96px] -mt-2"> {/* height set manually to match w-auto */}
          <Image
            src="/oeCat.gif"
            alt="ee oo eeo oee aa oee eoe"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

          <p className="text-sm text-white">
            <span className="bg-violet-800 px-2 py-1 rounded">
              {"it is ur bday... go shawty..."}
            </span>
          </p>

          <p className="text-sm text-violet-800 max-w-md">
            {
              "HELLAUR!!! today is your special day pooks!!! everyone should jump in joy NOW. here's a few messages from people who love you sososo much"
            }
          </p>
        </main>
      </div>

      <div className="bg-violet-200 rounded-2xl pt-19">
        <MessageComp />
        <BottomSection />
      </div>
    </div>
  );
}
