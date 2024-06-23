import TopContainer from "./components/TopContainer/TopContainer";
import BottomContainer from "./components/BottomContainer/BottomContainer";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { useGlobalContext } from "./components/Context/Context";
function App() {
  const { currentPage } = useGlobalContext();

  return (
    <div>
      {currentPage ? (
        <ProductDetails />
      ) : (
        <div>
          <TopContainer />
          <BottomContainer />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
