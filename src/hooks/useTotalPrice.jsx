import { useStateValue } from "../contexts/BasketContext";

export const useTotalPrice = () => {
  const [{ basket }, dispatch] = useStateValue();
  let arrayPrice = [];
  basket.map((item) => {
    return arrayPrice.push(item.price);
  });
  const totalPrice = arrayPrice.reduce((a, b) => a + b, 0);

  return totalPrice;
};
