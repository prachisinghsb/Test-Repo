import {QueryClient, useMutation ,QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";



const queryClient = new QueryClient()
export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Todos />
        </QueryClientProvider>
    )
}


function Todos() {

    const mutation = useMutation({

        mutationFn: (newTodo : string) => {
            return axios.post('/todo', newTodo)
        },
    })


    return (
        <div>
            {mutation.isLoading ? (
                'Adding todo...'
            ) : (
                <>
                    {mutation.isError ? (
                        <div className="text-red-600" >An error occurred: {mutation?.error?.message}</div>
                    ) : null}

                    {mutation.isSuccess ?
                        <div className="text-green-600">Todo added! - {mutation?.variables?.title}</div> : null
                    }

                    <button className="border border-black m-auto bg-blue-800 text-white p-2"
                        onClick={() => {
                            mutation.mutate({ id: new Date(), title: 'Breakfast Done' })
                        }}
                    >
                        Create Todo
                    </button>
                </>
            )}

            <div>
                <h1>Todo List</h1>
            </div>
        </div>

    )
}
