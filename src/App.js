import Nav from "./components/Nav";
import Home from "./modules/Home";
import Presentation from "./modules/Presentation";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen flex  flex-col justify-center items-center w-full">
      <Nav/>
      <Home />
      <Presentation/>
    </div>
  );
}

export default App;
