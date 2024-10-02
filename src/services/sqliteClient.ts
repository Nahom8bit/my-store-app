// This is a mock implementation. In a real app, you'd use a library like sql.js or absurd-sql.
class MockSQLite {
  private data: { [key: string]: any[] } = {};

  async getUnsyncedChanges(): Promise<{ table: string; data: any[] }[]> {
    // Mock implementation
    return [];
  }

  async upsert(table: string, data: any[]): Promise<void> {
    this.data[table] = [...(this.data[table] || []), ...data];
  }

  async markChangesSynced(): Promise<void> {
    // Mock implementation
  }
}

export const sqlite = new MockSQLite();