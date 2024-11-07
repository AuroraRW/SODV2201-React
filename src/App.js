import { BrowserRouter, Routes, Route,Link, useParams, useNavigate, Outlet, Navigate } from "react-router-dom";
const Home =()=> <h2>Home Page</h2>
const About =()=> <h2>About Page</h2>
const Contact =()=> <h2>Contact Page</h2>
const ProductList = ()=>{
  return (
    <div>
      <h2>All Products</h2>
      <ul>
        <li><Link to="/products/1">Product 1</Link></li>
        <li><Link to="/products/2">Product 2</Link></li>
      </ul>
      <Link to="/products/new">Create New Product</Link>
    </div>
  )}
const ProductDetail = ()=>{
  const {id} = useParams()
  return <h2>Product Detail for Product ID: {id}</h2>
}
const NewProduct = ()=>{
  const navigate = useNavigate()
  const handleSubmit = ()=>{
    // add your logic
    navigate('/products')
  }
  return(
    <div>
      <h2>Create a New Product</h2>
      <button onClick = {handleSubmit}>Submit New Product</button>
    </div>
  )}
const Products = ()=>{
  return(
    <div>
      <Link to="/products">Products</Link>
      <Outlet />
    </div>
  )}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element = {<Products />}>
          <Route index element={<ProductList />}/>
          <Route path=":id" element={<ProductDetail />}/>
          <Route path="new" element={<NewProduct />}/>
        </Route>

        <Route path="/" element={<Navigate to="/products"/>}/>

      </Routes>

     {/* <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
     </ul> */}
      {/* <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes> */}
    
    </BrowserRouter>
  );
}

export default App;
