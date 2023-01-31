import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

const defaultQueryFunction = async ({ queryKey }: { queryKey: any }) => {
  const { data } = await axios.get(`https://fakestoreapi.com${queryKey[0]}`, {
    params: queryKey[1],
  });

  console.log("data:", data);
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFunction,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
