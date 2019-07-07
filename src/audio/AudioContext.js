var audioContext;

const getAudioContext = function() {
  if (audioContext) {
    return audioContext;
  }

  var constructor;
  if ('AudioContext' in window) {
    // Firefox, Chrome
    constructor = window.AudioContext;
  } else if ('webkitAudioContext' in window) {
    // Safari
    constructor = window.webkitAudioContext;
  } else {
    return null;
  }

  audioContext = new constructor();
  return audioContext;
};

export { getAudioContext };
