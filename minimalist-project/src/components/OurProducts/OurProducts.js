import "./OurProducts.css";
import { useGlobalContext } from "../Context/Context";
export default function OurProducts() {
  const { currentPage, setCurrentPage } = useGlobalContext();
  return (
    <div className="our-products-container">
      <h3 className="heading">Our Products</h3>
      <div className="products-container">
        <div className="product-card" onClick={() => setCurrentPage(true)}>
          <img
            src="https://s3-alpha-sig.figma.com/img/22f6/b7b5/b47561aa2ad560235e2702e286a6d4b7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D1sbiDpivdUXcgrTSSc5RJI2iy3cl2mwuq097Tpi94ZpTu3~CqkJu2CqbmlnwjeiEeUzVqQUUgTZIB0HIJaeAcoUGpYkYgj5iApxpXhBq8jPPpW7Cmtm0saXQFrc0LKUy6XsnG8wxIZHPREhmyuW4LNknYuhHvNm8TprWaYRkGly99XqiTze8Z11IXY6mv4riXabS7ljTwOF1zxFW0ruK4EYsRp5fslGOdqTzDg4mtihhjaFPBli6UHwj4DU7WMKupfRMcViizjGCa929hiupZkrCgYl1mNTaiV4UeJVa06~6uVCLNAiSqhZeBapYwomqMSjuGQnDIkac7mNX4VsSA__"
            alt="user-name"
            className="image"
          />
          <div className="product-content">
            <p className="product-name">Raju Rassibomb</p>
            <button className="button">QUICK VIEW</button>
          </div>
        </div>

        <div className="product-card" onClick={() => setCurrentPage(true)}>
          <img
            src="https://s3-alpha-sig.figma.com/img/22f6/b7b5/b47561aa2ad560235e2702e286a6d4b7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D1sbiDpivdUXcgrTSSc5RJI2iy3cl2mwuq097Tpi94ZpTu3~CqkJu2CqbmlnwjeiEeUzVqQUUgTZIB0HIJaeAcoUGpYkYgj5iApxpXhBq8jPPpW7Cmtm0saXQFrc0LKUy6XsnG8wxIZHPREhmyuW4LNknYuhHvNm8TprWaYRkGly99XqiTze8Z11IXY6mv4riXabS7ljTwOF1zxFW0ruK4EYsRp5fslGOdqTzDg4mtihhjaFPBli6UHwj4DU7WMKupfRMcViizjGCa929hiupZkrCgYl1mNTaiV4UeJVa06~6uVCLNAiSqhZeBapYwomqMSjuGQnDIkac7mNX4VsSA__"
            alt="product-name"
            className="image"
          />
          <div className="product-content">
            <p className="product-name">Ladiyon ki Rani Chani</p>
            <button className="button">QUICK VIEW</button>
          </div>
        </div>
      </div>
      <hr className="horizontal-line" />
    </div>
  );
}
