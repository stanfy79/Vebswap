import { useState, useRef, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import Token from "./components/Token.jsx";
import { useTokenList } from "./hooks/tokenList.ts";

export default function Swap(){
  const [showToken, setShowToken] = useState(false);
  const elementRef = useRef(true);

  const handleShowToken = () => {
    setShowToken(!showToken);
  };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     console.log("Clicked outside:", event.target, elementRef.current);
  //     if (event.target) {
  //       setShowToken(false);
  //     }
  //   };
  //   document.addEventListener("click", handleClickOutside);
  //   return () => document.removeEventListener("click", handleClickOutside);
  // }, []);

  return(
    <>
    <div className="min-h-screen bg-black flex items-center justify-center">
      {showToken && <Token ref={elementRef} />}
      <div className="w-[420px] bg-[#0b0b0b] rounded-2xl p-4 shadow-xl">

        <div className="flex gap-4 text-sm mb-4">
          <button className="bg-[#1a1a1a] px-4 py-1 rounded-full text-white">
            Swap
          </button>
          <button className="text-gray-400">Limit</button>
          <button className="text-gray-400">Buy</button>
          <button className="text-gray-400">Sell</button>
        </div>

        <div className="bg-[#141414] rounded-xl p-4 mb-3">
          <p className="text-gray-400 text-sm mb-2">Sell</p>

          <div className="flex items-center justify-between">
            <input
              type="number"
              placeholder="0"
              className="bg-transparent text-3xl text-white outline-none w-full"
            />

            <button className="flex items-center gap-2 w-33 bg-[#1f1f1f] px-3 py-2 rounded-full text-white text-sm"
              onClick={() => handleShowToken()}
            >
              <img
                src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                alt="ETH"
                className="w-5 h-5"
              />
              ETH
              <span className="text-gray-400">▼</span>
            </button>
          </div>

          <p className="text-gray-500 text-sm mt-1">$0</p>
        </div>

        <div className="flex justify-center -my-2 z-10 relative">
          <div className="bg-[#1a1a1a] p-3 rounded-2xl border border-[#2a2a2a]">
            <FaArrowDown size={20} className="text-blue-500" />
          </div>
        </div>

        <div className="bg-[#141414] rounded-xl p-4 mt-3">
          <p className="text-gray-400 text-sm mb-2">Buy</p>

          <div className="flex items-center justify-between">
            <input
              type="number"
              placeholder="0"
              className="bg-transparent text-3xl text-white outline-none w-full"
            />

            <button className="bg-pink-500 px-4 w-45 flex py-2 rounded-full text-white text-sm font-medium">
              Select token ▼
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-1">$0</p>
        </div>

        <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold">
          Connect wallet
        </button>
      </div>
    </div>
    </>
  ); 
};
