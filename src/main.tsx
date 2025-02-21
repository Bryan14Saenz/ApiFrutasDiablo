import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { PeticionProviderWrapper } from './context/Peticion.context.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PeticionProviderWrapper>
      <App />
    </PeticionProviderWrapper>
  </StrictMode>
);
