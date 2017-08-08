const {app, BrowserWindow} = require('electron'),
  path = require('path'),
  url = require('url');

// init win
let win;

function createWindow() {
  win = new BrowserWindow({width:1000, height:900, icon: __dirname+'/img/system.png'});


  // load index.html
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open devtools
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

// Run create window function
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});