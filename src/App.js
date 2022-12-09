import Header from "./layouts/Header";
import Specs from "./components/Specs";
import FeaturedOffering from "./components/FeaturedOffering";
import Market from "./components/Market";
import Teams from "./components/Teams";
import Footer from "./layouts/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Specs />
      <FeaturedOffering />
      <Market />
      <Teams />
      <Footer />
    </div>
  );
}

export default App;
