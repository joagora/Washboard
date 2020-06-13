import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { faVolumeMute, faVolumeUp, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements AfterViewInit {
  constructor() { }
  soundIcon = faVolumeMute;
  playIcon = faPause;
  videoMuted = true;
  isPlaying = true;
  isVisible = false;
  @ViewChild('videoplayer') videoPlayer: ElementRef;
  @ViewChild('videoControls') videoControls: ElementRef;
  ngAfterViewInit(){
    this.muteSound(true);
    this.playSound(true);
    this.videoPlayer.nativeElement.addEventListener('mousemove', () => {
      console.log('yo');
      
      this.videoControls.nativeElement.classList.remove('fade-out');
      this.videoControls.nativeElement.classList.remove('hidden')
      void this.videoControls.nativeElement.offsetWidth;
      this.videoControls.nativeElement.classList.add('fade-out');
    })
  }

  muteSound(shouldMute: boolean) {
    this.videoPlayer.nativeElement.muted = shouldMute;
    this.videoMuted = shouldMute;
  }

  toggleSound() {
    this.muteSound(!this.videoPlayer.nativeElement.muted);
    this.soundIcon = this.videoMuted ? faVolumeUp : faVolumeMute;
  }

  togglePlay() {
    this.playSound(!this.isPlaying)
    this.playIcon = this.isPlaying ? faPause : faPlay;
  }
 
  playSound(shouldPlay) {
    shouldPlay ? this.videoPlayer.nativeElement.play() : this.videoPlayer.nativeElement.pause();
    this.isPlaying = shouldPlay;
  }


  onVideoHover() {
    console.log('hovered');
    
  }
}
