function downloadVideo() {

    const url = document.getElementById("videoURL").value;
    const message = document.getElementById("message");

    if (!url) {
        message.textContent = "Please enter a video URL.";
        return;
    }

    message.textContent = "Starting download...";

    const link = document.createElement("a");

    link.href = url;
    link.download = "video";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    message.textContent = "Download requested.";
}
