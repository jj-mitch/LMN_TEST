const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Add any IPC methods here if needed
});

console.log('Preload script loaded');
