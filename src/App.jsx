import { useState, useRef } from "react";
import heroBg from "./assets/hero-bg.gif";
import tagImage1 from "./assets/tree-hill.jpg";
import tagImage2 from "./assets/anime-tree.jpg";
import tagImage3 from "./assets/anime-tree2.jpg";
import Header from "./components/Header.jsx";
import "./App.css";
import LaunchButton from "./components/LaunchButton.jsx";

function App() {

  const elementRef = useRef(null);
  const [isrevealed, setIsRevealed] = useState(false);

  
  return (
    <>
      <style>{`
        .perspective-container { perspective: 1200px; }
        .page {
          transform-origin: right bottom;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          will-change: transform, box-shadow;
        }
        .page.animate {
          animation: pageFlip 8s ease-in-out infinite;
        }
        .page.animate.delay {
          animation-delay: 2.5s;
        }
        @keyframes pageFlip {
          0%   { transform: rotateZ(0deg); }
          20%  { transform: rotateZ(35deg); right: -100%; top: 10rem; }
          40%  { transform: rotateZ(35deg); right: -100%; top: 10rem; }
          60%  { transform: rotateZ(35deg); right: -100%; top: 10rem; }
          80%  { transform: rotateZ(35deg); right: -100%; top: 10rem; }
          100% { transform: rotateZ(0deg); }
        }
      `}</style>
      <div className="w-full">
        <div className="w-full h-screen bg-blue-950 flex flex-col items-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        >
          <Header />

          <div className="py-1.5 px-3 rounded-l font-bold font-mono text-gray-700 bg-white mt-35">
            <span className=""><strong className="text-purple-600">Enjoy</strong> the altimate <span className="text-rose-400  glitch">onchain</span> swaps</span>
          </div>
          <div className="w-full flex flex-col justify-center items-center text-center mt-5">
            <p className="text-white font-extrabold w-[80%] max-w-3xl text-4xl sm:text-5xl">Liqidity for all multicain swaps</p>
            <p className="my-5 px-1.5 w-[90%] max-w-100 text-white font-bold text-2">Vebswap is a decentralized tool that enables millions of user to seamlessly swap between tokens across multiple blockchains</p>
            <LaunchButton />
          </div>
        </div>
        <div className="w-full">
          <div className="w-[95%] -mt-25 mx-auto bg-white rounded-r-2xl rounded-l-2xl p-4">

            <div className="w-[70%] text-center max-w-100 mt-20 mx-auto flex flex-col gap-3 shadow-sm items-center p-6 rounded-3xl">
              <p className="text-2xl text-black font-bold">Lorem ipsum dolor sit amet consectetur.</p>
              <p className="text-sm text-gray-600 font-sans my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eius facilis quae modi officiis eligendi optio, esse alias perferendis, consequatur distinctio illo architecto adipisci! Consectetur sapiente. Eligendi?</p>
              <LaunchButton />
            </div>
            <div className="flex w-full my-30 flex-col justify-around sm:flex-row">
              <div className="w-full max-w-md p-4">
                <div 
                ref={elementRef}
                onMouseOver={() => setIsRevealed(true)}
                className="p-3 text-gray-400 hover:text-gray-800 rounded-lg transition duration-300">
                  <span className="font-bold text-fuchsia-500">Secure</span>
                  <p className="text-sm">Simple and audited by industry-leading firms. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="p-3 text-gray-400 hover:text-gray-800 rounded-lg transition duration-300">
                  <span className="font-bold text-violet-900">Speed</span>
                  <p className="text-sm">Simple and audited by industry-leading firms. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="p-3 text-gray-400 hover:text-gray-800 rounded-lg transition duration-300">
                  <span className="font-bold text-emerald-800">Low Gas fees</span>
                  <p className="text-sm">Simple and audited by industry-leading firms. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="py-4 w-full max-w-[400px] relative h-130 overflow-hidden perspective-container">
                {/* First image remains static */}
                <div className="absolute h-70">
                  <img src={tagImage1} className="rounded-xl w-full rounded-tr-4xl object-cover h-110" alt="Image" />
                </div>

                {/* Second image: animated page (starts immediately) */}
                <div className="absolute object-cover h-70 w-full page animate top-6 left-2">
                  <img src={tagImage2} className="rounded-xl w-full rounded-tr-4xl object-cover h-110" alt="Image" />
                </div>

                {/* Third image: animated page with delay so it follows the second */}
                <div className="absolute object-cover h-70 w-full page animate delay">
                  <img src={tagImage3} className="rounded-xl w-full rounded-tr-4xl object-cover h-110" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
