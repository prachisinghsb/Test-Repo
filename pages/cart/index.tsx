import { useQuery } from "@tanstack/react-query";

export default function Cart() {
  const {
    status: cartsStatus,
    data: cartsData,
    error: cartsError,
    isFetching: cartsIsFetching,
  } = useQuery({
    queryKey: ["/carts", { page: 1 }],
  });

  const {
    status: productsStatus,
    data: productsData,
    error: productsError,
    isFetching: productsIsFetching,
  } = useQuery({
    queryKey: ["/products"],
  });
}
