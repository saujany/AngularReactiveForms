import { Component, OnInit } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';

import { Myservice } from './Services/myservice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit
{
  

  
  constructor(private myservice:Myservice)
  {
  }
  
  ngOnInit(): void {
    
  }


}



