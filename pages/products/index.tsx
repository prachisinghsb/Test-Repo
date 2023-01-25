import axios from "axios";
import {useRouter} from "next/router";


interface ProductsData {
    products : any;
}

const productListPage = (props: ProductsData) =>{

    const router = useRouter()

    return(
        <>
            <h1 className="text-center p-10">List Of Products</h1>
            <div className="cursor-pointer border-green-500 grid grid-cols-3 h-150 m-50 gap-10 p-10">
                {
                    props.products.map((item:any)=>(
                        <div onClick={() => router.push(`products/${item.id}`)} className="border border-black-100 p-10 h-90">
                            <img className="w-60 h-70 m-auto p-5" src={item.image} alt={item.name}/>
                            <h1>{item.title}</h1>
                            <h2>{item.price}</h2>
                        </div>
                    ))
                }
            </div>
        </>
    )

}
export default productListPage

export async function getServerSideProps(){

    let res = await axios.get("https://fakestoreapi.com/products")
    //console.log(res.data)

    return{

        props :{
            products : res.data
        }
    }

}
