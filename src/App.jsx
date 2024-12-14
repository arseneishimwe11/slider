import SliderComponent from "./components/slider";
import Connectors from "./components/Connectors";
import SecondConnector from "./components/SecondConnector";
import ThirdConnector from "./components/ThirdConnector";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative">
      <div className="fixed top-[35px] left-[20px] z-50">
        <button className="bg-blue-600 text-white px-[120px] py-[14px] font-bold rounded-[12px] flex items-center hover:bg-blue-700 transition shadow-xl shadow-blue-600/40">
          View open roles
          <i className="bi bi-arrow-right-circle text-[20px] ml-[10px]"></i>
        </button>
      </div>

      <div className="fixed top-[90px] left-[20px] z-40">
        <div className="flex relative">
          <div className="relative top-[-25px] left-[40px]">
            <Connectors />
          </div>
          <div className="relative top-[-25px] left-[160px]">
            <SecondConnector />
          </div>
          <div className="relative top-[px] left-[70px]">
            <ThirdConnector />
          </div>
        </div>
      </div>

      <div className="pt-[120px] overflow-x-auto">
        <SliderComponent />
      </div>
    </div>
  );
};

export default App;
