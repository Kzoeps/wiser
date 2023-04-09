 
export const DBConfig = {
  name: 'WiserDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'conversations',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'messages', keypath: 'messages', options: { unique: false } }
      ]
    }
  ]
};