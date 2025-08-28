import { span } from 'motion/react-client';
import React from 'react'
import { useState } from 'react'

const Shop = () => {
  const [allProducts,setallProducts] = useState([]);
    const [showForm, setShowForm] = useState(false)
    const [showBtn, setshowBtn] = useState(true)
    const [product, setProduct] = useState({
        image: null,
        title: "",
        price: "",
        desc: "",
    })

    const handleChange = (e)=> {
        setProduct({...product, [e.target.name]: e.target.value})
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const imageURL = URL.createObjectURL(file); // Preview the uploaded image
        setProduct({...product, image: imageURL});
    };

    // Validate Form
    const [shopError, setshopError] = useState({})
    const shopRuncheck = () => {
      const shopErrorLog = {}
      if(!product.title.trim()){
        shopErrorLog.title = "Product title is required"; // Assigns error message to key 'title'
      }
      if(!product.price){
        shopErrorLog.price = "Product price is required"; // Assigns error message to key 'price'
      }
      if(!product.desc.trim()){
        shopErrorLog.desc = "Product description is required"; // Assigns error message to key 'desc'
      }
      if(product.image == null){
        shopErrorLog.image = "Product image is required" // Assigns error message to key 'image'
      }
      return shopErrorLog;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const shopValidate = shopRuncheck();

        // Condition to check if errors exist
        if(Object.keys(shopValidate).length > 0){  
          setshopError(shopValidate)
          console.log(shopError) // Logs to console an object of errors based on non-empty inputs
        }
        else{
          setallProducts([...allProducts, product]);
          setProduct({
              image: null,
              title: "",
              price: "",
              desc: "",
          })
          setshopError({})
          console.log(allProducts)
          setShowForm(false);
          setshowBtn(!showBtn);
        }

    }
    const toggleBtn = () => setShowForm(!showForm)
    const handleAddProduct = () => {
        toggleBtn();
        document.querySelector(".empty h1").style.marginTop = "10px" ;
        setshowBtn(!showBtn);
    }

  return (
    <div>
      <div id='shop' className="text-white h-[87vh]  flex flex-col text-center items-center justify-center">
        {
          allProducts.length === 0 &&
          <div className='empty'>
            <h1 className='text-2xl md:text-4xl font-bold mb-4 mt-[100px]'>Ooops!! Cart is Empty.</h1>
          </div>
        }
        <div className='mt-4'>
          <button onClick={handleAddProduct} className='bg-purple-600 text-white text-[1rem] border-0 rounded-full px-4 py-2 transition-all duration-300 hover:bg-purple-700 cursor-pointer'>Add Product</button>
        </div>

        {
          showForm && 
          <form onSubmit={handleSubmit} className='border-1  mt-6 text-left max-w-[400px]'>
          <h2 className='text-xl font-bold py-3 text-center'>Product Form</h2>
            <div className='px-4'>
              <div className="inputs flex flex-col">
                  <label htmlFor="name">Product Name</label>
                  <input type="text" name='title' value={product.title} onChange={handleChange} className='border-1 outline-0 px-2 py-2' />
                  {shopError.title &&
                    <span className='error'>{shopError.title}</span>
                  }
              </div>
              <div className="inputs flex flex-col">
                  <label htmlFor="price">Product Price</label>
                  <input type="number" name='price' value={product.price} onChange={handleChange} className='border-1 outline-0 px-2 py-2' />
                  {shopError.price &&
                    <span className='error'>{shopError.price}</span>
                  }
              </div>
              <div className="inputs flex flex-col">
                  <label htmlFor="desc">Description</label>
                  <textarea name='desc' value={product.desc} onChange={handleChange} className='border-1 outline-0 px-2 py-2' ></textarea>
                  {shopError.desc &&
                    <span className='error'>{shopError.desc}</span>
                  }
              </div>
              <div className="inputs flex flex-col">
                  <label htmlFor="preview">Preview</label>
                  <img src={product.image} alt="imagePreview" className='productImg'/>
                  {/* {shopError.image &&
                    <span className='error'>{shopError.image}</span>
                  } */}
              </div>
              <div className="inputs flex flex-col">
                  <label htmlFor="file">Picture Image</label>
                  <input type="file" name='image' onChange={handleFileChange} className='border-1 outline-0 px-2 py-2' />
                  {shopError.image &&
                    <span className='error'>{shopError.image}</span>
                  }
              </div>
            </div>
            <div className="flex mt-5 mb-5">
              <button className='add bg-purple-600 text-white text-[1rem] border-0 rounded-full px-4 py-2 transition-all duration-300 hover:bg-purple-700 m-auto'>Add Product</button>
            </div>
        </form>
        }

        <div className="gallery w-full mt-6 flex justify-center flex-wrap gap-y-5 mb-[40px]">
            {
              allProducts.map((prod, index) => (
                <div className="product mr-[10px] ml-[10px] border-2 rounded-lg w-[250px] px-4 py-5 text-center" key={index}>
                    <div className="img-container">
                      <img className='h-[150px] object-cover w-full' src={prod.image} alt="product-Image" />
                    </div>
                    <h3 className="prodTitle font-bold text-xl mt-2">{prod.title}</h3>
                    <div className="side mt-[10px] mb-[20px] flex justify-between items-center">
                      <p>N{prod.price}</p>
                      <button className='p-2 bg-purple-600 text-white text-[1rem] border-0 rounded-full transition-all duration-300 hover:bg-purple-700 text-sm cursor-pointer'>
                        Add to Cart
                      </button>
                    </div>
                    <div className="prodDesc">
                      <p className='break-words overflow-hidden text-ellipsis'>{prod.desc}</p>
                    </div>
                </div>
              ))
            }

        </div>
      </div>
    </div>
  )
}

export default Shop
