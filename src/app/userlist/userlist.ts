import { NgFor } from '@angular/common';
import {  Component, OnInit } from '@angular/core';
import { Myservice } from '../Services/myservice';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-userlist',
  imports: [NgFor,RouterOutlet,RouterModule],
  templateUrl: './userlist.html',
  styleUrl: './userlist.css'
})
export class Userlist implements OnInit{

  data:any;

  constructor(private myservice:Myservice)
  {
    this.getUserdata();
    
  }
 
  
  ngOnInit(): void {
    
  }
   
  
getUserdata()
{
  this.myservice.getdata().subscribe((result)=>
  {
    console.log(result);
this.data=result;
console.log(this.data);
  })

}

delete(id:any)
{
  if(confirm("do you want to remove?"))
  {
  this.myservice.deletedata(id).subscribe(result=>

{
   
     
  this.getUserdata();
    
  })

}


}
}

