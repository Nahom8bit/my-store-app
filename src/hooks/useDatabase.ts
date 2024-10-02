import { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import { sqlite } from '../services/sqliteClient';

export function useDatabase() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [db, setDb] = useState(isOnline ? supabase : sqlite);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setDb(supabase);
    };
    const handleOffline = () => {
      setIsOnline(false);
      setDb(sqlite);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return { db, isOnline };
}