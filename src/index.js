//import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Sreedhar from './Sreedhar.js';

import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const Home = () => {
const [data, setData] = useState(null);

useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/todos")
.then((res) => res.json())
.then((data) => setData(data));
}, []);

return (
<>
{data &&
data.map((item) => {
return <p key={item.id}>{item.title}</p>;
})}
</>
);
};

createRoot(document.getElementById('root')).render(
<Home />
);

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Sreedhar />);
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
