import axios from "axios";
import {useState} from "react";


export default function ProductDetails(props: string){

    return(
        <>
            <h1>Product Id - {props.id}</h1>
            <h2>Product Title - {props.title}</h2>
        </>
    )
}

export async  function getServerSideProps(context:any){

    //console.log(context)
    axios.get(`https://fakestoreapi.com/products/${context.query.id}`).then((product:any) => console.log(product))

    return {
        props: {
            name : "Prachi",
            id : context.query.id,
            // title: data.title
        }
    }
}