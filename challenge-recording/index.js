const startBtn = document.querySelector(".startBtn");
const audio = document.querySelector(".preview");

let stream;
let recorder;
let audioFile;

const handleDownload = () => {
  const a = document.createElement("a");
  a.href = audioFile;
  a.download = "Myrecording.webm";
  document.body.appendChild(a);
  a.click();
};

const handleStop = () => {
  startBtn.innerText = "Download Recording";
  startBtn.removeEventListener("click", handleStop);
  startBtn.addEventListener("click", handleDownload);
  recorder.stop();
};

const handleStart = () => {
  startBtn.innerText = "Stop Recording";
  startBtn.removeEventListener("click", handleStart);
  startBtn.addEventListener("click", handleStop);

  recorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
  recorder.ondataavailable = (e) => {
    audioFile = URL.createObjectURL(e.data);
    audio.srcObject = null;
    audio.src = audioFile;
    audio.loop = true;
    audio.play();
  };
  recorder.start();
  setTimeout(() => {
    handleStop();
  }, 5000);
};

const init = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: false,
  });

  audio.srcObject = stream;
  audio.play();
};

init();
startBtn.addEventListener("click", handleStart);
