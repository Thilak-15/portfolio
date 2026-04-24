import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="flex text-white">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;