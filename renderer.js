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
}

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
    console.log("Rootkit scan:", rootkitEnabled ? "ACTIVE" : "INACTIVE");
    window.api.saveLog(`Rootkit scan ${rootkitEnabled ? "ACTIVE" : "INACTIVE"}`);
}

function toggleSpyware() {
    spywareKilled = !spywareKilled;
    console.log("Spyware:", spywareKilled ? "TERMINATED" : "RUNNING");
    window.api.saveLog(`Spyware ${spywareKilled ? "KILLED" : "ALLOWED"}`);
}

function toggleFullscreen() {
    window.api.toggleFullscreen();
}

function gamingMode() {
    console.log("Gaming mode ON: stänger bakgrundsprocesser");
    window.api.saveLog("Gaming Mode ON");
    // Här kan du lägga till riktig kod som stänger specifika processer
}

window.onload = () => {
    updateStats();
    setInterval(updateStats, 1000); // uppdatera varje sekund
};
