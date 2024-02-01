import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactSchema } from 'src/model/contactSchema';

@Injectable({
  providedIn: 'root'
})

// rxjs is a library
    // it is an extension for javascript
    // it handle one or more apis at a time 
    // rxjs ---- reactive extension for javascript
export class ApiService {


  BASE_URL='http://localhost:3000'

  constructor(private http:HttpClient) { }


  handleError(error:HttpErrorResponse){

    let errorMsg:string=''

    if(error.error){
     // client
     errorMsg=`Error:${error.message}`
    }
    else{
      errorMsg=`status:${error.status}
      Error:${error.message}`
    }

  }



  getAllContact(){
    // api call  url:http://localhost:3000/contacts  reg:get

  return this.http.get(`${this.BASE_URL}/contacts`)
  }

    viewContact(id:any){

      // api call for view contact

      // api call url:http://localhost:3000/contacts/id  reg:get

  return this.http.get(`${this.BASE_URL}/contacts/${id}`)

    }


    // api call for particular group

    getGroup(id:any){
  return this.http.get(`${this.BASE_URL}/groups/${id}`)
    }


   // get all group
   getGroups(){
  return this.http.get(`${this.BASE_URL}/groups`)
   } 


   // add contact

   addContact(contact:ContactSchema){

  return this.http.post(`${this.BASE_URL}/contacts`,contact)

   }

   // delete contact

   deleteContact(id:any){
    //api call to server
    
  return this.http.delete(`${this.BASE_URL}/contacts/${id}`)

   }
  


}
