const downloadForm = document.getElementById("download-form");
const videoUrlInput = document.getElementById("video-url");
const videoFormatSelect = document.getElementById("video-format");
const loaderTo = document.getElementById("loader-to");
const iframe = loaderTo.querySelector("iframe");
const downloadButton = document.getElementById("download-button");

function updateIframeSource() {
    const videoUrl = videoUrlInput.value;
    const videoFormat = videoFormatSelect.value;
    const loaderToUrl = `https://loader.to/api/button/?url=${videoUrl}&f=${videoFormat}&color=3b82f6&linkUrl=https://www.mahbadgroup.ir`;
    iframe.src = loaderToUrl;
}

videoUrlInput.addEventListener("input", updateIframeSource);
videoFormatSelect.addEventListener("change", updateIframeSource);

downloadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    loaderTo.classList.remove("hidden");
    downloadButton.classList.add("hidden");
});