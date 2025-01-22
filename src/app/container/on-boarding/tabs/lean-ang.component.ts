import { Component, OnDestroy } from '@angular/core';

import { take, takeWhile } from 'rxjs/operators';


@Component({
  selector: 'app-learn',
  template: `
    <div class="container" >
  <div class=" square" ><span>flex item 1</span></div>
  <div class=" square" ><span>flex item 2</span></div>
  <div class=" square" ><span>flex item 3</span></div>
  </div>
  <div class="grid-container">
    
  <div class="grid-item flex-container" >
  <div class=" flex-item flex-item1" >flex item 1</div>
  <div class=" flex-item flex-item2" >flex item 2</div>
  <div class=" flex-item flex-item3" >flex item 3</div>
  </div>



    <div class="grid-item">Grid item 2</div>
    <div class="grid-item">Grid item 3</div>
    <div class="grid-item">Grid item 4</div>
  </div>
  `,
  styles: [`

.container{
    display:flex;
    width:1000px;
    margin: 0 auto;
    background-color:lightgrey;
    border:2px solid #264653;
   }
.square{
    display:flex;
    width:200px;
    height:200px;
    /* flex-basis:auto; */
    flex-grow:1;
    
   }
   .square span{
    margin:auto;
    font-size:2rem;
   }

   .square:nth-of-type(1){
    flex-basis:300px;
     background-color: #2a9d8f;
   }
   .square:nth-of-type(2){
    flex-basis:300px;
     background-color: #e9c46a;
   }
   .square:nth-of-type(3){
    flex-basis:300px;
     background-color: #e76f51;
   }



   .grid-container{
    max-width:1000px;
    height:650px;
    margin: 0 auto;
    display:grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 3fr 1fr;
    gap:10px
   }
   .grid-item{
    background-color:lightgrey;
   }
   .flex-container{
    display:flex;
    flex-wrap: wrap;
   }
 
   .flex-item{
    flex:1;
   }
   .flex-item1{
     background-color:#2a9d8f;
    flex:100%;
   }
   .flex-item2{
    background-color:#e9c46a;
    
   }
   .flex-item3{
    background-color:#e76f51;
   }
  `]
})

export class LearnComponent {



}
