import { createContext, useMemo, useState } from 'react';

interface Tarjeta {
  id: number;
  roman_name: string;
  filename: string;
  type: string;
}

interface PeticionContextType {
  tarjetas: Tarjeta[];
  error: boolean;
  getTarjetas: () => Promise<void>;
}

interface PeticionProviderProps {
  readonly children: React.ReactNode;
}

const PeticionContext = createContext<PeticionContextType | undefined>(
  undefined
);

function PeticionProviderWrapper({ children }: PeticionProviderProps) {
  const [tarjetas, setTarjetas] = useState<Tarjeta[]>([]);
  const [error, setError] = useState(false);

  const url = 'https://api.api-onepiece.com/v2/fruits/en';

  const getTarjetas = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTarjetas(data);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const value = useMemo(
    () => ({ getTarjetas, tarjetas, error }),
    [tarjetas, error]
  );

  return (
    <PeticionContext.Provider value={value}>
      {children}
    </PeticionContext.Provider>
  );
}

export { PeticionContext, PeticionProviderWrapper };
