
const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const os = require('os');
const fs = require('fs');

function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true
    }
  });

  win.loadFile('index.html');
  Menu.setApplicationMenu(null);
}

ipcMain.handle('save-log', () => {
  const content = `[${new Date().toLocaleTimeString()}] LOGGAD AV STEALTHSHIELD`;
  fs.appendFileSync('drippa_log.txt', content + '\n');
});
ipcMain.handle('get-stats', async () => {
    const cpuUsage = Math.floor(Math.random() * 100);
    const ramUsage = Math.floor(Math.random() * 100);
    return { cpu: cpuUsage, ram: ramUsage };
});

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
const si = require('systeminformation');

ipcMain.handle('get-stats', async () => {
    const cpuData = await si.currentLoad();
    const memData = await si.mem();

    const cpu = Math.round(cpuData.currentload);
    const ram = Math.round((memData.used / memData.total) * 100);

    return { cpu, ram };
});
const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const si = require('systeminformation'); // ← denna är ny

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true
        }
    });

    win.loadFile('index.html');
    Menu.setApplicationMenu(null);
}

// Hanterar riktig CPU/RAM info
ipcMain.handle('get-stats', async () => {
    const cpuData = await si.currentLoad();
    const memData = await si.mem();
    const cpu = Math.round(cpuData.currentload);
    const ram = Math.round((memData.used / memData.total) * 100);
    return { cpu, ram };
});

// Loggar
ipcMain.handle('save-log', () => {
    const content = `[${new Date().toLocaleTimeString()}] LOGGAD AV STEALTHSHIELD`;
    fs.appendFileSync('drippa_log.txt', content + '\n');
});

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
