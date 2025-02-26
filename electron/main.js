const { app, BrowserWindow } = require('electron');
const path = require('path');

// Detectar si estamos en modo desarrollo
const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
    watch: path.join(__dirname, '../frontend/dist') // Monitorea los cambios en el frontend
  });
}

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false, // Deshabilita integración con Node.js por seguridad
      contextIsolation: true
    }
  });

  if (isDev) {
    // En desarrollo: Cargar Vite en caliente (localhost:5173)
    win.loadURL('http://localhost:5173');
  } else {
    // En producción: Cargar el frontend compilado en la carpeta `dist`
    win.loadFile(path.join(__dirname, '../frontend/dist/index.html'));
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
