import React from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);

  const fetchProductData = async () => {};

  useEffect(() => {
    fetchProductData();
  }, [productID]);

  console.log(productId);

  return <div></div>;
};

export default Product;
