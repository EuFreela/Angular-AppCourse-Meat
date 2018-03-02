import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import {NgModel} from '@angular/forms'

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string
  @Input() errorMessage :string
  input: any

  @ContentChild(NgModel) model: NgModel

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.model
    if(this.input === undefined){
      throw new Error('Esse content precisa ser usado com uma ngmodel')
    }
  }

  hasSuccess(): boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean{
    return !this.input.valid && (this.input.dirty || this.input.touched)
  }

}
