import { supabase } from './supabaseClient';
import { sqlite } from './sqliteClient';

export async function syncData() {
  // Fetch local changes
  const localChanges = await sqlite.getUnsyncedChanges();

  // Push local changes to Supabase
  for (const change of localChanges) {
    await supabase.from(change.table).upsert(change.data);
  }

  // Fetch latest data from Supabase
  const tables = ['products', 'sales', 'customers']; // Add all your tables
  for (const table of tables) {
    const { data, error } = await supabase.from(table).select('*');
    if (data && !error) {
      await sqlite.upsert(table, data);
    }
  }

  // Mark local changes as synced
  await sqlite.markChangesSynced();
}