var electron = require('electron');

var BrowserWindow = electron.BrowserWindow;
var app = electron.app;
var ipc = electron.ipcMain;

app.on('ready', function(){
    var appWindow, infoWindow;
    appWindow = new BrowserWindow({
        show: false
    });
    appWindow.loadURL('http://tut.by');

    infoWindow = new BrowserWindow({
        width: 400,
        height: 300,
        transparent: true,
        show: false
    });
    infoWindow.loadURL('file: //' + __dirname + '/info.html')

    appWindow.once('ready-to-show', () =>{
        appWindow.show();
        setTimeout(()=> {
            infoWindow.show();
        }, 1000)
    });

    ipc.on('closeInfoWindow', (event) => {
        event.returnValue = '';
        infoWindow.hide();
    });
});