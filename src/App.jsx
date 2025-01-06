import { useState, useRef, useEffect } from "react";
import Connectors from "./components/Connectors";
import SecondConnector from "./components/SecondConnector";
import ThirdConnector from "./components/ThirdConnector";
import SliderComponent from "./components/slider";

const App = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);

  const handleScroll = () => {
    if (containerRef.current) {
      const newScrollX = containerRef.current.scrollLeft;
      setScrollX(newScrollX);

      if (sliderRef.current) {
        sliderRef.current.scrollLeft = newScrollX;
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <div className="fixed top-[35px] left-[20px] z-50">
        <button className="bg-blue-600 text-white px-[120px] py-[14px] font-bold rounded-[12px] flex items-center hover:bg-blue-700 transition shadow-xl shadow-blue-600/40">
          View open roles
          <i className="bi bi-arrow-right-circle text-[20px] ml-[10px]"></i>
        </button>
      </div>

      <div
        ref={containerRef}
        className="fixed top-[90px] left-[20px] z-40 overflow-x-auto"
        style={{
          whiteSpace: "nowrap",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>
          {`
            /* Hide scrollbar for Chrome, Safari and Opera */
            .fixed::-webkit-scrollbar {
              display: none;
            }
            /* Hide scrollbar for IE, Edge and Firefox */
            .fixed {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
            }
          `}
        </style>
        <div className="flex relative w-[388%]">
          <div className="relative" style={{ top: "-25px", left: "40px" }}>
            <Connectors scrollX={scrollX} />
          </div>
          {/* <div className="relative" style={{ top: "-20px", left: "200px" }}>
            <SecondConnector scrollX={scrollX} />
          </div> */}
          {/* <div className="relative" style={{ top: "5px", left: "150px" }}>
            <ThirdConnector scrollX={scrollX} />
          </div> */}
          {/* <div className="relative" style={{ top: "-20px", left: "150px" }}>
            <SecondConnector scrollX={scrollX} />
          </div> */}
          {/* <div className="relative" style={{ top: "5px", left: "100px" }}>
            <ThirdConnector scrollX={scrollX} />
          </div> */}
          {/* <div className="relative" style={{ top: "-20px", left: "150px" }}>
            <SecondConnector scrollX={scrollX} />
          </div> */}
          <div className="relative" style={{ top: "5px", left: "50px" }}>
            <ThirdConnector scrollX={scrollX} />
          </div>
          {/* <div className="relative" style={{ top: "-20px", left: "150px" }}>
            <SecondConnector scrollX={scrollX} />
          </div> */}
          <div className="relative" style={{ top: "5px", left: "50px" }}>
            <ThirdConnector scrollX={scrollX} />
          </div>
          {/* <div className="relative" style={{ top: "-20px", left: "150px" }}>
            <SecondConnector scrollX={scrollX} />
          </div> */}
          <div className="relative" style={{ top: "5px", left: "50px" }}>
            <ThirdConnector scrollX={scrollX} />
          </div>
          <div className="relative" style={{ top: "5px", left: "50px" }}>
            <ThirdConnector scrollX={scrollX} />
          </div>
          <div className="relative" style={{ top: "5px", left: "50px" }}>
            <ThirdConnector scrollX={scrollX} />
          </div>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="pt-[120px] overflow-x-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <SliderComponent />
      </div>
    </div>
  );
};

export default App;
