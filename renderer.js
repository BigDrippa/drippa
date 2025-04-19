
let fpsVisible = true;
function updateStats() {
  window.api.getStats().then(({ cpu, ram }) => {
    document.getElementById('cpu').textContent = cpu;
    document.getElementById('ram').textContent = ram;
  });
}
function toggleFPS() {
  fpsVisible = !fpsVisible;
  document.getElementById('fps').style.display = fpsVisible ? 'block' : 'none';
}
function saveLog() {
  window.api.saveLog();
}
function reset() {
    let telemetryEnabled = false;
    let antivirusEnabled = false;
    let rootkitEnabled = false;
    let spywareKilled = false;

    function toggleTelemetry() {
        telemetryEnabled = !telemetryEnabled;
        console.log("Telemetry:", telemetryEnabled ? "BLOCKED" : "UNBLOCKED");
        window.api.saveLog(`Telemetry ${telemetryEnabled ? "BLOCKED" : "UNBLOCKED"}`);
    }

    function toggleAntivirus() {
        antivirusEnabled = !antivirusEnabled;
        console.log("Antivirus:", antivirusEnabled ? "SCANNING" : "OFF");
        window.api.saveLog(`Antivirus ${antivirusEnabled ? "SCAN STARTED" : "SCAN STOPPED"}`);
    }

    function toggleRootkit() {
        rootkitEnabled = !rootkitEnabled;
        console.log("Rootkit Scan:", rootkitEnabled ? "ON" : "OFF");
        window.api.saveLog(`Rootkit Scan ${rootkitEnabled ? "ENABLED" : "DISABLED"}`);
    }

    function toggleSpyware() {
        spywareKilled = !spywareKilled;
        console.log("Spyware:", spywareKilled ? "KILLED" : "SAFE");
        window.api.saveLog(`Spyware ${spywareKilled ? "KILLED" : "NO ACTION"}`);
    }

    function toggleFullscreen() {
        const win = require('electron').remote.getCurrentWindow();
        win.setFullScreen(!win.isFullScreen());
    }

  fpsVisible = true;
  document.getElementById('fps').style.display = 'block';
}
setInterval(updateStats, 2000);
function updateStats() {
    window.api.getStats().then(({ cpu, ram }) => {
        document.getElementById('cpu').textContent = cpu + "%";
        document.getElementById('ram').textContent = ram + "%";
    });
}

setInterval(updateStats, 1000);

function saveLog() {
    window.api.saveLog();
}
