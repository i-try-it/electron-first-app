var electron = require('electron');

var BrowserWindow = electron.BrowserWindow;
var app = electron.app;

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
        frame: false,
        show: false
    });
    infoWindow.loadURL('file: //' + __dirname + '/info.html')

    appWindow.once('ready-to-show', () =>{
        appWindow.show();
        setTimeout(()=> {
            infoWindow.show();
            setTimeout(()=> {
                infoWindow.hide();
            }, 3000)

        }, 1000)

    })
})