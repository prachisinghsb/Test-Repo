import axios from "axios";
import {useState} from "react";


export default function ProductDetails(props: any){

    return(
        <>
            <h1>Product Id - {props.id}</h1>
            <h2>Product Title - {props.products.title}</h2>
            <img src={props.products.image} alt="img"/>
        </>
    )
}

export async  function getServerSideProps(context:any){

    //console.log(context)
    let res = await axios.get(`https://fakestoreapi.com/products/${context.query.id}`)
    console.log(res)

    return {
        props: {
            name : "Prachi",
            id : context.query.id,
            products : res.data
        }
    }
}