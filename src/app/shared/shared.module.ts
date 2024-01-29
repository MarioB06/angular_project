import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleAComponent } from './example-a/example-a.component';



@NgModule({
  declarations: [ExampleAComponent],
  imports: [
    CommonModule
  ],
  exports: [ExampleAComponent]
})
export class SharedModule { }
