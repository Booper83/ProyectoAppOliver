const { app, BrowserWindow } = require('electron');
const path = require('path');

// Configuración de recarga automática en desarrollo
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Por seguridad, evita integrar Node.js en el contexto del frontend si no es necesario
      nodeIntegration: false,
      contextIsolation: true
    }
  });
  
  // Durante desarrollo: carga el servidor de desarrollo del frontend (por ejemplo, Vite en localhost:3000)
  // win.loadURL('http://localhost:3000');

  // En producción: carga los archivos compilados del frontend
    // win.loadFile(path.join(__dirname, '../frontend/index.html'));
    win.loadURL('http://localhost:5173/');
}

app.whenReady().then(createWindow);

// Cierra la aplicación en plataformas que no sean macOS cuando se cierren todas las ventanas
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// En macOS, vuelve a crear una ventana cuando la app es activada y no hay ninguna abierta
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
