import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  contact:any=[]
  errorMsg:string=''
  group:string=''
  


  constructor(private api:ApiService,private viewRouter:ActivatedRoute){}
  ngOnInit(): void {

    // get contact id from its url
    this.viewRouter.params.subscribe((data:any)=>{
      console.log(data);

      // data={id:"ca1"}
      
      
      // destructuring object

      const{id}=data
      console.log(id);

      // api call to get particular contact details
      this.api.viewContact(id).subscribe({
        next:(response:any)=>{
          console.log(response);
          const{groupId}=response //destructure cheyyunna step
          console.log(groupId);
          

          this.api.getGroup(groupId).subscribe((data:any)=>{

            console.log(data);

            const{name}=data
            console.log(name);
            this.group=name
            
            
          })

          this.contact=response
          
        },
        error:(err:any)=>{
          console.log(err);
          this.errorMsg=err.message
          
        }
      })
      
    })
    

        

        
  }

}
