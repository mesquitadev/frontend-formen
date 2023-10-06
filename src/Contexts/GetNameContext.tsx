import { createContext, ReactNode, useMemo, useState } from 'react';

export type LoadingContextData = {
  pageName: string;
  setPageName: (value: string) => void;
};

export const GetPageNameContext = createContext({} as LoadingContextData);

type AuthContextProps = {
  children: ReactNode;
};

export function GetNameProvider({ children }: AuthContextProps) {
  const [pageName, setPageName] = useState('');

  const updatedValue = useMemo(
    () => ({
      pageName,
      setPageName,
    }),
    [pageName],
  );
  return (
    <GetPageNameContext.Provider value={updatedValue}>
      {children}
    </GetPageNameContext.Provider>
  );
}
