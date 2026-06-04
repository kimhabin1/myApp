import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import ProductDetail from './ProductDetail';
import NavBar from './NavBar';
import Home from './Home';
import TodoList from './TodoList';
import TodoViewer from './TodoViewer';
import Error from './Error';

// function Home() {
//     return <h1>Home Page</h1>;
// }
function About() {
    return <h1>About Page</h1>;
}
function Product() {
    const { category, id } = useParams(); // id 파라미터 읽기
    return <h1>Product ID: {id}</h1>;
}
function MyComponent() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home'); // '/home' 경로로 이동
    };
    return (
        <button onClick={handleClick}>홈으로 이동</button>
    );
}
export default function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home </Link>
                <Link to="/todolist">Todolist</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/product/:category/:id" element={<ProductDetail />} /> 
                <Route path="/todolist" element={<TodoList/>} />
                <Route path="/todolist/:id" element={<TodoViewer/>} />
                <Route path="/product/:categoryid" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}
