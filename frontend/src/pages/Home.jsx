import { useState } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/vite.svg'
import '../App.css';

function Home() {  // 🔹 Cambia el nombre de App a Home
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          {/* ⚠️ Descomentar solo si viteLogo está importado correctamente */}
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='font-bold text-3xl'>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Home;  // 🔹 Exportamos como Home, no como App
