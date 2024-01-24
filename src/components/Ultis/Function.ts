import { Iproduct } from "../../Interface";


export const addItemsToShopppingCard =(cartProduct:Iproduct[],product:Iproduct)=>{
  const exists = cartProduct.find(item => product.id ==item.id );

  if(exists) return cartProduct.map(item => (item.id == product.id ? {...item , qty : item.qty+1 } : item ))

  return [...cartProduct,{...product , qty:1 }]




}