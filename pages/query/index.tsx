import { QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'
import axios from "axios";

const queryClient = new QueryClient()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Query />
        </QueryClientProvider>
    )
}

function Query() {

    const { isLoading, error, data } = useQuery({
        queryKey: ['products'],
        queryFn: () =>
           axios.get("https://fakestoreapi.com/products").then((res)=> res.data)
    })

    console.log("data",data)

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <h1>Products Data</h1>
            {data.map((products:any)=>(
                <div className="border border-black p-4 m-12 bg-red-100" >
                    <p>{products.title}</p>
                    <p>{products?.description}</p>
                    <p>{products?.price}</p>
                    <p>{products?.category}</p>
                </div>
            ))}
        </div>
    )
}
