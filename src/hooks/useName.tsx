import { useContext } from 'react';
import { GetPageNameContext } from '@/Contexts/GetNameContext';

export function useName() {
  const context = useContext(GetPageNameContext);
  if (!context) {
    throw new Error('useName must be used within LoadingProvider');
  }
  return context;
}
