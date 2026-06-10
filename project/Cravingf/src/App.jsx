import cravingLogo from "./assets/craving.png";
const App = () => {
  return (
    <>
      <div className="bg-orange-500 text-white p-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span>
            <img src={cravingLogo} alt="Logo" className="w-30 h-20" />
          </span>
        </div>

        <div className="flex gap-3">
          <button className="bg-transparent text-white px-3 py-1 rounded-xl hover: bg-red">
            Login
          </button>

          <button className="bg-transparent text-white px-3 py-1 rounded-xl hover:bg-red">
            Register
          </button>
        </div>
      </div>
    </>
  );
};
export default App;