import { useState, useRef, useEffect } from "react";
import Header from "./components/Header.jsx";
import LaunchButton from "./components/LaunchButton.jsx";
import "./App.css";
import heroBg from "./assets/hero-bg.gif";
import tagImage1 from "./assets/tree-hill.jpg";
import tagImage2 from "./assets/anime-tree.jpg";
import tagImage3 from "./assets/anime-tree2.jpg";
import footerBG from "./assets/FooterMin.jpg";
import tagImage4 from "./assets/untitled-1.jpg";
import tagImage5 from "./assets/untitled-2.jpg";
import tagImage6 from "./assets/untitled-3.jpg";

function App() {

  const elementRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const inViewRef = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          inViewRef.current = entry.isIntersecting; // true when visible
        });
      },
      { threshold: 0.2 } // start animation when 20% of element is visible
    );

    if (elementRef.current) observer.observe(elementRef.current);

    let ticking = false;

    const handleScroll = () => {
      if (!inViewRef.current) return;

      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      lastScrollY.current = currentY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setRotation((r) => r + delta * 0.5);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full h-screen bg-blue-950 flex flex-col items-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        >
          <Header />

          <div className="py-1.5 px-3 rounded-l font-bold font-mono text-gray-700 text-[10px] bg-white mt-35">
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

            <div className="w-full] text-center max-w-100 mt-20 mx-auto flex flex-col gap-3 shadow-lg items-center p-6 rounded-3xl">
              <p className="text-2xl text-black font-bold">Lorem ipsum dolor consectetur.</p>
              <p className="text-sm text-gray-600 font-sans my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eius facilis quae modi officiis eligendi optio, esse alias perferendis, consequatur distinctio illo architecto adipisci! Consectetur sapiente. Eligendi?</p>
              <LaunchButton />
            </div>
            <div className="flex w-full mt-30 flex-col items-center justify-around sm:flex-row">
              <div className="w-full max-w-md p-4">
                <div 
                ref={elementRef}
                onMouseOver={() => setIsRevealed(true)}
                className="p-3 text-gray-400 hover:text-gray-800 rounded-lg transition duration-300">
                  <span className="font-bold text-fuchsia-500">Secure</span>
                  <p className="text-[17px] md:text-2xl">Simple and audited by industry-leading firms. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="p-3 text-gray-400 hover:text-gray-800 rounded-lg transition duration-300">
                  <span className="font-bold text-violet-900">Speed</span>
                  <p className="text-[17px] md:text-2xl">Simple and audited by industry-leading firms. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="p-3 text-gray-400 hover:text-gray-800 rounded-lg transition duration-300">
                  <span className="font-bold text-emerald-800">Low Gas fees</span>
                  <p className="text-[17px] md:text-2xl">Simple and audited by industry-leading firms. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="py-4 w-full max-w-[400px] relative h-130 overflow-hidden perspective-container">
                {/* First image remains static */}
                <div className="absolute h-70">
                  <img src={tagImage1} className="rounded-xl w-full rounded-tr-4xl object-cover h-110" alt="Image" />
                </div>

                {/* Second image: animated page (starts immediately) */}
                <div className="absolute object-cover h-70 w-full page animate">
                  <img src={tagImage2} className="rounded-xl w-full rounded-tr-4xl object-cover h-110" alt="Image" />
                </div>

                {/* Third image: animated page with delay so it follows the second */}
                <div className="absolute object-cover h-70 w-full page animate delay">
                  <img src={tagImage3} className="rounded-xl w-full rounded-tr-4xl object-cover h-110" alt="Image" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-screen w-[full] lg:w-[95%] mx-auto flex items-center justify-center overflow-hidden">
            <div ref={elementRef}
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.05s linear",
              }} className="relative w-full h-full">
                {Array.from({ length: 8 }).map((_, i) => {
                  const top = (5 + Math.random() * 90).toFixed(2) + "%";
                  const left = (5 + Math.random() * 90).toFixed(2) + "%";
                  const size = Math.floor(20 + Math.random() * 120);
                  const colors = [
                    "bg-purple-500/50",
                    "bg-blue-500/50",
                    "bg-fuchsia-400/50",
                    "bg-red-400/50",
                    "bg-green-600/50",
                    "bg-indigo-400/40",
                    "bg-indigo-800/90",
                    "bg-pink-500/40",
                    "bg-maroon-500/40",
                    "bg-violet-700/80",
                    "bg-yellow-400/40",
                    "bg-yellow-800/80"
                  ];
                  const colorClass = colors[i % colors.length];
                  return (
                    <div
                      key={i}
                      className={`absolute ${colorClass} rounded-full ball`}
                      style={{
                        top,
                        left,
                        width: `${size}px`,
                        height: `${size}px`,
                        transform: "translate(-50%, -50%)",
                        transition: "top 600ms ease, left 600ms ease, transform 200ms linear",
                        pointerEvents: "none",
                      }}
                    />
                  );
                })}
              </div>
            <div className="flex flex-col justify-center absolute items-center w-[70%] gap-5 text-center">
              <h2 className="text-3xl font-[900] font-doto text-[#2200a9] lg:text-4xl">Vebswap is widely integrated across DeFi.</h2>
              <p className=" max-w-[550px] text-[17px]">Explore the interchain with Vebswap to get the ultimate experience. Rewards can be redeemed for VEBSWAP tokens upon token launch.</p>
              <button type="button" className="p-3 text-[13px] text-white bg-[#6039ff] rounded-lg">Explore Oppotunities</button>
            </div>
          </div>
          <div className="w-full lg:w-[95%] mx-auto flex flex-col my-20">
            <div className="w-full flex justify-center gap-2 mb-3.5">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => handleImageClick(index)}
                    className={`border-[1px] border-neutral-700 rounded-4xl p-0.5 cursor-pointer transition ${currentImageIndex === index ? 'bg-indigo-600' : ''}`}
                  >
                    <div className="p-1.5 w-[17px] rounded-2xl bg-indigo-800 flex justify-center items-center">
                      <span className="p-[2px] absolute rounded-full bg-white"></span>
                    </div>
                  </button>
                ))}
            </div>
            <div className="w-[90%] lg:w-[60%] mx-auto overflow-x-scroll snap-x snap-mandatory scroll-smooth flex flex-row bg-white rounded-lg scroll-con">
              <div className="min-w-[100%] transition-transform duration-500 scroll-ml-1 snap-center snap-always" style={{transform: `translateX(-${currentImageIndex * 100}%)`}}>
                <img src={tagImage4} alt="" className="object-cover w-full h-110 rounded-lg" />
              </div>
              <div className="min-w-[100%] transition-transform duration-500 scroll-ml-1 snap-center snap-always" style={{transform: `translateX(-${currentImageIndex * 100}%)`}}>
                <img src={tagImage5} alt="" className="object-cover w-full h-110 rounded-lg" />
              </div>
              <div className="min-w-[100%] transition-transform duration-500 scroll-ml-1 snap-center snap-always" style={{transform: `translateX(-${currentImageIndex * 100}%)`}}>
                <img src={tagImage6} alt="" className="object-cover w-full h-110 rounded-lg" />
              </div>
            </div>

            <div className="w-full flex items-center flex-col gap-5 my-10">
              <p className="p-[3px] rounded-sm bg-[#e7d5fc] text-purple-900/60 text-[10px] font-mono">verifiable security</p>
              <div className="w-full flex flex-col items-center justify-center">
                <div className={`w-[70%] max-w-[300px] text-center ${currentImageIndex === 0 ? 'block' : 'hidden'}`}>
                  <h2 className="text-2xl font-extrabold mb-3">Continuous Audits</h2>
                  <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel facere a fugiat maiores!</p>
                </div>
                <div className={`w-[70%] max-w-[300px] text-center ${currentImageIndex === 1 ? 'block' : 'hidden'}`}>
                  <h2 className="text-2xl font-extrabold mb-3">Bug Bounties</h2>
                  <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus rerum asperiores soluta veniam.</p>
                </div>
                <div className={`w-[70%] max-w-[300px] text-center ${currentImageIndex === 2 ? 'block' : 'hidden'}`}>
                  <h2 className="text-2xl font-extrabold mb-3">Real-time monitoring</h2>
                  <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit possimus sint quibusdam? Eum?</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[95%] mx-auto flex flex-col lg:flex-row rounded-2xl overflow-hidden">
            <div className="w-full py-30 flex flex-col items-center gap-5 bg-[#e7d5fc]">
                <span className="py-[1px] px-1.5 text-[13px] bg-[#302659] text-[#e7d5fc] rounded-sm">Developer</span>
                <h2 className="text-3xl text-[#302659] font-bold">Builde with Vebswap</h2>
                <p className="text-[#302659] text-[15px] w-[90%] text-center max-w-[450px]">Bring liquidity and users to your application by integrating Drop's liquid staking tokens. Get started with quick start guides, protocol documentation, and fully open-source code.</p>
                <button type="button" className="py-3 px-5 bg-[#302659] rounded-lg text-[13px] flex gap-2 justify-evenly items-center">
                  <span className="text-animate text-[#e7d5fc]">Intergrate Vebswap</span> 
                  <i className="fa fa-external-link text-animate"></i>
                </button>
            </div>
            <div className="w-full py-30 flex flex-col items-center gap-5 bg-[#302659]">
                <span className="py-[1px] px-1.5 text-[13px] bg-[#e7d5fc] text-[#302659] rounded-sm">Developer</span>
                <h2 className="text-3xl text-[#e7d5fc] font-bold">Builde with Vebswap</h2>
                <p className="text-[#e7d5fc] text-[15px] w-[90%] text-center max-w-[450px]">Bring liquidity and users to your application by integrating Drop's liquid staking tokens. Get started with quick start guides, protocol documentation, and fully open-source code.</p>
                <button type="button" className="py-3 px-5 bg-[#e7d5fc] rounded-lg text-[13px] flex gap-2 justify-evenly items-center">
                  <span className="text-animate text-[#3026595f]" style={{webkitTextFillColor: "#3026595f",}}>
                    Intergrate Vebswap</span> 
                  <i className="fa fa-external-link text-animate"  style={{webkitTextFillColor: "#3026595f",}}></i>
                </button>
            </div>
          </div>
        </div>
        <div className="h-200 w-full flex flex-col items-center justify-center" style={{
          // background: 'linear-gradient(180deg, white, skyblue 20%)'
          backgroundImage: `url(${footerBG})`,
          backgroundPositionY: 'start',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
          <h2 className="text-2xl lg:text-5xl text-white text-center font-extrabold mt-30 max-w-150 font-mono">Experince the future of cross-chain</h2>
          <div className="w-full lg:w-[90%] lg:gap-8 flex flex-col lg:flex-row mt-32">
            <div className="w-[95%] p-5 text-2xl lg:text-3xl font-bold mx-auto bg-white flex flex-col justify-center rounded-t-2xl lg:rounded-2xl">
              <p>Join the Drop community to stay updated on new opportunities and shape the future of your favorite ecosystems.</p>
            </div>
            <div className="w-[95%] py-6 px-5 mx-auto bg-white flex flex-col gap-1.5 rounded-b-2xl lg:rounded-2xl">
              <span className="w-full font-bold p-1 border-b"><a href="" className="text-black text-[18px]">Twitter</a></span>
              <span className="w-full font-bold p-1 border-b"><a href="" className="text-black text-[18px]">Telegram</a></span>
              <span className="w-full font-bold p-1 border-b"><a href="" className="text-black text-[18px]">Discord</a></span>
              <p className="mt-5 text-[13px]">Vebswap Foundation © 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
