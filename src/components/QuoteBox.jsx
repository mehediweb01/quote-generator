import React, { useState } from "react";
import { quoteData } from "../data/quoteData";

const QuoteBox = () => {
  const [quotes, setQuotes] = useState(quoteData[0]);

  const randomQuote = () => {
    const random = Math.floor(Math.random() * quoteData.length);
    setQuotes(quoteData[random]);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-[80%] sm:w-[60%] p-3 bg-black/10 rounded-md">
        <div className="w-full mx-auto min-h-[50vh] rounded-lg bg-slate-500/20 p-4 flex items-center justify-center flex-col shadow-md shadow-black">
          <h3 className="w-[80%] mx-auto text-2xl font-medium font-mono text-slate-900/85 mb-3">
            {quotes.text}
          </h3>
          <p className="font-semibold text-xl text-blue-600/80 tracking-[2px] text-start w-[80%]">
            {quotes.author}
          </p>
          <div className="mt-16">
            <button
              onClick={randomQuote}
              className="bg-sky-600 px-4 py-2 rounded-md cursor-pointer text-xl font-bold text-white tracking-[1px] hover:bg-blue-600 transition-all duration-300"
            >
              Random Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
