import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated=new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated=new EventEmitter<{serverName: string, serverContent: string}>();
  
// # ngModel
  // newServerName:string = '';
  // newServerContent:string = '';

  // onAddServer() {
  //  this.serverCreated.emit({serverName:this.newServerName, serverContent:this.newServerContent})
  // }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({serverName:this.newServerName, serverContent:this.newServerContent})
  // }
  //--------------------------------------------

  // # Local Variable
  // onAddServer(nameInput: HTMLInputElement,contentInput: HTMLInputElement) {
  //   console.log(nameInput.value,contentInput.value);
  //  this.serverCreated.emit({serverName:nameInput.value, serverContent:contentInput.value})
  // }

  // onAddBlueprint(nameInput: HTMLInputElement,contentInput: HTMLInputElement) {
  //   console.log(nameInput.value, contentInput.value)
  //   this.blueprintCreated.emit({serverName:nameInput.value, serverContent:contentInput.value})
  // }
  //---------------------------------------------

// # @ViewChild()
@ViewChild(CockpitComponent) serverNameInput!: ElementRef;
@ViewChild(CockpitComponent) serverContentInput!: ElementRef;

  onAddServer() {
    this.serverCreated.emit({serverName:this.serverNameInput.nativeElement.value, serverContent:this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName:this.serverNameInput.nativeElement.value, serverContent:this.serverContentInput.nativeElement.value});
  }




}
