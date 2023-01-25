import axios from "axios";
import {useState} from "react";


export default function ProductDetailsPage(props: any){

    return(
        <>
            <div className='text-red-900 bg-white flex flex-col p-10 border border-blue-900'>
                <h1 className="border border-green-900 m-10 p-5 hover:bg-red-900 hover:text-white">Product Id - {props.id}</h1>
                <h2 className="border border-green-900 m-10 p-5 hover:bg-red-900 hover:text-white">Product Title - {props.products.title}</h2>
                <img className="border border-green-900 m-10" src={props.products.image} alt="img"/>
            </div>
        </>
    )
}

export async  function getServerSideProps(context:any){

    let res = await axios.get(`https://fakestoreapi.com/products/${context.query.id}`)

    if(res.status == 404){
        return{
            NotFound : true
        }
    }

    return {

        props: {
            id : context.query.id,
            products : res.data
        }
    }
}