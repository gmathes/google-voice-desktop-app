
(function() {
    const { ipcRenderer, remote } = require('electron');

    console.log(remote);
    const currentWindow = remote.getCurrentWindow();
    const prefs = currentWindow.prefs || {};
    const currentTheme = prefs.theme || 'default';
    const currentTray = prefs.tray || 'off';

    const themePicker = document.getElementById("theme");
    themePicker.addEventListener('change', (e) => {
        const theme = e.target.value;
        ipcRenderer.send('pref-change', theme);
    });

    themePicker.value = currentTheme;

    const trayOnlySwitch = document.getElementById("trayOnlySwitch");
    trayOnlySwitch.addEventListener('change', (e) => {
        const trayOnly = e.target.value;
        ipcRenderer.send('tray-change', trayOnly);
    });

    trayOnlySwitch.value = currentTray;

})();