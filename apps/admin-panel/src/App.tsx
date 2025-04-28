import { useState } from 'react';
import { apiClient } from '@super-app/api-client';
import type { ExampleType } from '@super-app/types';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const example: ExampleType = 'Panel de Administración';

  return (
    <div className="app">
      <header className="app-header">
        <h1>Super-App Delivery</h1>
        <p>Panel de Administración</p>
      </header>
      
      <main>
        <div className="card">
          <h2>Panel de Administración</h2>
          <p>Esta es la aplicación para administradores de Super-App Delivery.</p>
          <button onClick={() => setCount((count) => count + 1)}>
            Contador: {count}
          </button>
          <p>
            API Client cargado: {apiClient ? '✅' : '❌'}
          </p>
          <p>
            Ejemplo de tipo: {example}
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
