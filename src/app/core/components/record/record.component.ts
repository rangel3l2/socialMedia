import {   Component,  ViewChild,  OnInit,  ElementRef} from '@angular/core';
declare var MediaRecorder: any;

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
    
    videoElement: HTMLVideoElement | null = null;
    recordVideoElement: HTMLVideoElement | null = null;
    mediaVideoRecorder?: any;
    videoRecordedBlobs!: Blob[];
    isRecording: boolean = false;
    downloadVideoUrl?: string;
    showRecordedVideo: boolean | null = null;
    stream?: MediaStream;
    @ViewChild('recordedVideo') recordVideoElementRef!: ElementRef;
    @ViewChild('liveVideo') videoElementRef!: ElementRef;
    @ViewChild('startRecording') btn_start_recording!: ElementRef
    constructor() {}
    async ngOnInit() {       

       
        navigator.mediaDevices.getUserMedia({
            video: {
                width: 300
            }
        }).then(stream => {
        
            this.videoElement = this.videoElementRef.nativeElement;      
            
            this.stream = stream;
            if(this.videoElement){
                this.videoElement.srcObject = this.stream;
            }
            

        });
        
    }
    startVideoRecording() {
        this.showRecordedVideo = false
        this.videoRecordedBlobs = [];
        let options: any = {
            mimeType: 'video/webm'
        };
        try {
            this.mediaVideoRecorder = new MediaRecorder(this.stream, options);
        } catch (err) {
            console.log(err);
        }
        this.mediaVideoRecorder.start();
        this.isRecording = !this.isRecording;
        this.onDataAvailableVideoEvent();
        this.onStopVideoRecordingEvent();
        if(this.recordVideoElement){
            console.log(this.recordVideoElement)
        }
        console.log(this.showRecordedVideo)
       
    }
   
    stopVideoRecording() {
        if (this.btn_start_recording) {
            this.btn_start_recording.nativeElement.style.width = '50%';
          }
        
          // Exiba o vídeo gravado
          this.showRecordedVideo = true
          if (this.mediaVideoRecorder) {
           
          this.mediaVideoRecorder.stop();
          this.isRecording = false;
         
        
          // Defina o elemento recordVideoElement para o elemento nativo
         
      
          // Crie um objeto Blob a partir dos dados gravados
          const videoBuffer = new Blob(this.videoRecordedBlobs, {
            type: 'video/webm'
          });
      
          // Crie uma URL para o Blob e atribua ao src do elemento de vídeo gravado
          this.downloadVideoUrl = window.URL.createObjectURL(videoBuffer);
        
          
        
        }
      }
      
  playRecording() {
    if (!this.videoRecordedBlobs || !this.videoRecordedBlobs.length) {
      return;
    }
    if(this.recordVideoElement){
        this.recordVideoElement.play();
    }
   
  }
    onDataAvailableVideoEvent() {
        try {
            this.mediaVideoRecorder.ondataavailable = (event: any) => {
                if (event.data && event.data.size > 0) {
                    this.videoRecordedBlobs.push(event.data);
                }
            };
        } catch (error) {
            console.log(error);
        }
    }
    onStopVideoRecordingEvent() {
        try {
            this.mediaVideoRecorder.onstop = (event: Event) => {
                const videoBuffer = new Blob(this.videoRecordedBlobs, {
                    type: 'video/webm'
                });
                this.downloadVideoUrl = window.URL.createObjectURL(videoBuffer);
               
             
                this.recordVideoElement = this.recordVideoElementRef.nativeElement
                if(this.recordVideoElement){
                    this.recordVideoElement.src = this.downloadVideoUrl;
                }
              
                
                    
              
                              
            };
        } catch (error) {
            console.log(error);
        }
    }
  }

