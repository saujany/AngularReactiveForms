import {OnInit, Component, AfterViewInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Myservice } from '../Services/myservice';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-used-add-edit',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './used-add-edit.html',
  styleUrl: './used-add-edit.css'
})
export class UsedAddEdit implements OnInit,AfterViewInit{


   //myfrm:FormGroup
  EditData: any;
  EmpId: any;
  mydynamicformarray!: FormArray<any>;
  states: any;
  selectedcountry!: string;

  //isSubmitted:boolean=false;

  constructor(private myservice:Myservice,private route:ActivatedRoute)
  {
  
 
  }
  ngAfterViewInit(): void {
     this.EmpId=this.route.snapshot.paramMap.get('id');
if(this.EmpId!=null && this.EmpId!=0)
{
  this.updatedata(this.EmpId);
}
   
  }
  ngOnInit(): void {

   
  }

 

onsubmit()
{
 // debugger;
  
  console.log(this.myfrm.value);
  console.log(this.myfrm.valid);

  this.myservice.postdata(this.myfrm.value).subscribe((result)=>
  {
    alert('data submitted succesfully');

  })
 // this.isSubmitted=true;
}

Reset()
{
  this.myfrm=new FormGroup(
    {
      id:new FormControl("",[Validators.required]),
      name:new FormControl("",[Validators.required]),
      username:new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.required]),
      address:new FormArray([])

    })
}

updatedata(id:any)
{
this.myservice.geteditdatabyId(id).subscribe(result=>
{
  this.EditData=result;
  console.log(this.EditData);

  //if(this.EditData!=null)
    //{
//debugger;

//this.myfrm.patchValue(this.EditData);
this.myfrm.setValue(this.EditData);

    //this.myfrm=new FormGroup(
     //{
       // id:new FormControl(this.EditData.id),
        //name:new FormControl(this.EditData.name),
        //username:new FormControl(this.EditData.username),
        //email:new FormControl(this.EditData.email),
        //address:new FormArray([this.EditData.address])
       

    // });
})
}

 myfrm=new FormGroup(
    {
      id:new FormControl("",[Validators.required]),
      name:new FormControl("",[Validators.required]),
      username:new FormControl("",[Validators.required,Validators.minLength(5)]),
      email:new FormControl("",[Validators.required,Validators.email]),
       address:new FormArray([])

    }
  )

 
getstatebycountry(event:Event)
{

  this.selectedcountry=(event.target as HTMLInputElement).value;
  
  console.log(this.selectedcountry);
  this.myservice.getstatebycountry(this.selectedcountry).subscribe(data=>
  {
    this.states=data;
  }
  )
}

 get getdynamiccontrols()
 {
  
  return this.myfrm.get("address") as FormArray;

 }
  generaterow()
  {
    
    this.mydynamicformarray=this.myfrm.get('address') as FormArray;
    this.mydynamicformarray.push(this.createformrow());

  }
  createformrow()
  {
    debugger;
    return new FormGroup(
      {
        street:new FormControl(),
        country:new FormControl(),
        state:new FormControl(),
        

      }
    )
  }

OnSubmit()
{
 // console.log(this.myfrm.value);
  //console.log(this.myfrm.valid);

  //this.myservice.postdata(this.myfrm.value).subscribe((result)=>
  //{
    //alert('data submitted succesfully');

  //})

  //this.isSubmitted=true;
}
}
