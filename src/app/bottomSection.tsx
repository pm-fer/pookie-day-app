"use client";

const BottomSection: React.FC = () => {
  return (
    <div className="w-full">
      <div className="mb-3 ml-6">
        <span className="text-4xl font-bold text-violet-500">{">:0"}</span>
      </div>

      <div className="max-w-4xl mx-auto rounded-t-3xl bg-violet-500 p-7 relative overflow-hidden min-h-[200px]">
        <div className="flex flex-col gap-4 items-start w-[45vw] z-10 relative">
          <p className="text-white text-sm/4">
            woah you reached the end of your messages that's crazy!! i've said this a bajillion times already but thank you for being my best friend i love u soso much you're such a radiant human being and im always proud of you! HAPPY BIRTHDAY!!!!! *leans in*
          </p>
        </div>

        <img
          src="/heroPic.png"
          alt="Pookie Pic"
          className="absolute bottom-0 right-0 w-[45vw] max-w-[200px] object-contain"
        />
      </div>
    </div>
  );
};

export default BottomSection;
