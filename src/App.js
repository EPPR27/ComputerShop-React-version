import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarMain from "./components/navbar";
import CarouselFade from "./components/carrousel";
import Footer from "./components/footer";
import Body from "./components/body";

function App() {
  return (
    <div className="App">
      <NavBarMain />
      <CarouselFade />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
