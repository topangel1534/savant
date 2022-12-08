import Header from "./layouts/Header";
import Specs from "./components/Specs";
import FeaturedOffering from "./components/FeaturedOffering";
import Footer from "./layouts/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Specs />
      <FeaturedOffering />
      <Footer />
    </div>
  );
}

export default App;
