import { Component, OnDestroy } from '@angular/core';

import { take, takeWhile } from 'rxjs/operators';


@Component({
  selector: 'app-footer',
  template: `

  <footer>
  <div class="container">
  <div class="footer-main">
    <div class="footer-column">
      <h3 class="footer-heading">Heading one</h3>
      <a href="#" class="footer-link" >Link one</a>
      <a href="#" class="footer-link" >Link two</a>
      <a href="#" class="footer-link" >Link three</a>
    </div>
    
    <div class="footer-column">
      <h3 class="footer-heading">Heading one</h3>
      <a href="#" class="footer-link" >Link one</a>
      <a href="#" class="footer-link" >Link two</a>
      <a href="#" class="footer-link" >Link three</a>
    </div>
    
    <div class="footer-column">
      <h3 class="footer-heading">Heading one</h3>
      <a href="#" class="footer-link" >Link one</a>
      <a href="#" class="footer-link" >Link two</a>
      <a href="#" class="footer-link" >Link three</a>
    </div>
    
  </div>
  <div class="footer-bottom">
    <span class="copyright">&copy; 2021 Company Name </span>
    <a href="#" class="footer-social" ><i class="fa fa-facebook"></i></a>
    <a href="#" class="footer-social" ><i class="fa fa-instagram"></i></a>
    <a href="#" class="footer-social" ><i class="fa fa-youtube"></i></a>
  </div>
  
  </div>
</footer>
  `,
  styles: [`
   footer{
    background-color:#141414;
    color:#ffffff;
    padding:4rem 1rem;
   }

   footer a{   
    color:#ffffff;
    text-decoration:none;
    transition: color 0.3s;
    }

   footer a:hover{   
    color:#cccccc;
    
    }
   
   .container {
    max-width:1000px;
    margin: 0 auto;
   }

   .footer-main{
    display:flex;
    margin-bottom:4rem;    
   }

   .footer-column{
    flex-basis:200px;
    flex-grow:1;
    text-align:center;
   }
   .footer-heading{
    margin-bottom:1rem;
  }

  .footer-link{
    display:block;
    width:max-content;
    padding:5px 10px;
    margin: 0 auto;
  }

   .footer-bottom{
    display: flex;
   }

   .footer-social{
    font-size:20px ;
    margin-left:2rem;
   }
   
   
   .copyright{
    margin-right:auto;
      }

      @media only screen and (max-width:768px){
        .footer-main{
         flex-direction:column;
         }
      }
 
  `]
})

export class FooterComponent {



}
