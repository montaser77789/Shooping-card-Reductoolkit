import { useEffect } from "react";
import { Iproduct } from "./Interface";
import ProductCard from "./components/ProductCard";
import useCustomQuery from "./hooks/useCustomQuery";
import { getProducts } from "./app/Products/productSlice";
import { useAppDispatch } from "./app/store";

const ProductList = () => {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  const { isLoading } = useCustomQuery({
    queryKey: ["productList"],
    url: `/products?limit=10&select=title,price,thumbnail`,
  });

  if (isLoading) return <h3>Loading...</h3>;


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
      {[].map((product:Iproduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
