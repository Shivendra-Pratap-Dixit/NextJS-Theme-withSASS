'use client'
import { useTheme } from "@/context/ThemeContext"
import "./page.scss"
import { useEffect, useState } from "react"
import Image from "next/image"
interface Product {
    _id:string,
    name:string,
    picture:string,
    gender:string,
    category:string,
    price:number
}

const Products:React.FC=()=>{
    const theme=useTheme()
    const isDarkMode = theme?.isDarkMode ?? false;
const [product,setProduct]=useState<Product[]>([])
const [loading,setLoading]=useState(false)
const getProducts=async()=>{
    try {
        setLoading(true)
        const response=await fetch("https://nykaa-ne13.onrender.com/products")
if(!response.ok){
    throw new Error("Failed to fetch Data")
}
        const DATA=await response.json();
        setProduct(DATA.data)
        setLoading(false)
        
    }
    catch(error){
        console.error(error)
    }
   
}

useEffect(()=>{
    getProducts()
},[])

// console.log(product)

return (
    <div className="containe">
        <h1 className="heading">Products</h1>
        {loading &&  <p>Loading....</p>}
        <div className="conten">
        {product && product?.map((item)=>(
            <div key={item._id} className={`car ${isDarkMode ? "dark" : "light"}`}>
<Image src={item.picture} alt={item.name} className="image" />
<h2 className="name">{item.name}</h2>
<h3 className="gender">Gender : {item.gender==="male" ? "Male" : "Female"}</h3>
<h4 className="category">Category : {item.category==="makeup" ? "Make Up" : item.category==="skincare" ? "Skin Care" : "Hair Care"}</h4>
<p className="price">Price : ₹ {item.price}</p>
            </div>
        ))}
        </div>
    </div>
)
}

export default Products