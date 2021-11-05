const playerInstance = jwplayer("player").setup({
  controls: true,
  displaytitle: false,
  fullscreen: "true",
  primary: "html5",
  stretching: "uniform",
  aspectratio: "16:9",
  renderCaptionsNatively: false,
  autostart: false,
  abouttext: "Creator Website",
  aboutlink: "https://www.facebook.com/Sickboy.LoL",

  skin: {
    name: "netflix"
  },

  logo: {
    file: "#"
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      image:
        "maxresdefault.jpg",
      sources: [
        {
          file:
            "Video.mp4",
          label: "1080p FHD",
          default: true
        },
        {
          file:
            "Video.mp4",
          label: "720p HD"
        },
      ],
      captions: [
        {
          file:
            "https://raw.githubusercontent.com/hioihia123/Video/main/Lyrics.vtt",
          label: "English",
          kind: "captions",
          default: true
        },
      ]
    }
  ]
});

playerInstance.on("ready", function () {
  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);
});
