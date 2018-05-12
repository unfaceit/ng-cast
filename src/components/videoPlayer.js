angular.module('video-player')

.component('videoPlayer', {
  bindings : {
    playback: "<"
  },
  template: `
  <div class="video-player">
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" ng-src="{{'https://www.youtube.com/embed/' + $ctrl.playback.id.videoId}}" allowFullScreen></iframe>
  </div>
  <div class="video-player-details">
    <h3>{{ $ctrl.playback.snippet.title }}</h3>
    <div>{{ $ctrl.playback.snippet.description }}</div>
  </div>
  </div>
  `
});
