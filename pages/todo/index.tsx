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

    console.log("mutation:",mutation?.variables)

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








// import {QueryClient, QueryClientProvider, useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
// import axios from "axios";
//
//
//
// const queryClient = new QueryClient()
// export default function App() {
//     return (
//         <QueryClientProvider client={queryClient}>
//             <Todos />
//         </QueryClientProvider>
//     )
// }
//
// function Todos(){
//
//     const queryClient = useQueryClient()
//     const query = useQuery({
//         queryKey: ["todos"],
//         queryFn: () => {
//             axios.get("http://localhost:8080/todo").then((res) => res.data)
//         }
//     })
//
//     const mutation = useMutation({
//         mutationFn: () =>{
//             queryFn: () => {
//                 axios.post("http://localhost:8080/todo")
//             }
//         },
//         onSuccess: () => {
//             queryClient.invalidateQueries({ queryKey: ['todos'] })
//         },
//     })
//
//     return (
//         <div>
//             <ul>
//                 {query.data?.map((todo) => (
//                     <li key={todo.id}>{todo.title}</li>
//                 ))}
//             </ul>
//
//             <button
//                 onClick={() => {
//                     mutation.mutate({
//                         id: Date.now(),
//                         title: 'Do Laundry',
//                     })
//                 }}
//             >
//                 Add Todo
//             </button>
//         </div>
//     )
//
// }
//








