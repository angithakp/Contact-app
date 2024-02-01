import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ContactSchema } from 'src/model/contactSchema';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  
  allGroups:any=[]
  contact:ContactSchema={}

  constructor(private editRoute:ActivatedRoute,private api:ApiService){}
  ngOnInit(): void {
    // get parameter from url
    this.editRoute.params.subscribe({
      next:(parameter:any)=>{
        
       // destructure 
        const{id}=parameter
        console.log(id);
       
      // make a call to service to get contact  

      this.api.viewContact(id).subscribe({
        next:(res:any)=>{
          console.log(res);
          
        }
      })

      // make a call to service to get all groups

      this.api.getGroups().subscribe({
        next:(res:any)=>{
          console.log(res);
          this.allGroups=res
          
        }
      })
        
      }
    })
  }

}
