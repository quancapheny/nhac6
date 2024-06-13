document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("quanpham");
  const volumeSlider = document.getElementById("volume-slider");
  const volumeValue = document.getElementById("volume-value");

  volumeSlider.addEventListener("input", function () {
    const volume = volumeSlider.value;
    audioPlayer.volume = volume / 100;
    volumeValue.textContent = volume;
  });
});
