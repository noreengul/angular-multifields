import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  users= [
    {
      'id':1,
      'name':'John',
      'email':'John@example.com',
      'gender':'Male',
      'address':[{
            address:'test address',
      }
    ]
    },
    {
      'id':2,
      'name':'Mary',
      'email':'Mary@example.com',
      'gender':'female',
      'address':[{
        address:'test address',
      }]
    },
    {
      'id':3,
      'name':'Ron',
      'email':'Ron@example.com',
      'gender':'Male',
      'address':[{
        address:'test address',
      }]
    },
    {
      'id':4,
      'name':'William',
      'email':'Wiliam@example.com',
      'gender':'Male',
      'address':[{
        address:'test address',
      }]
    
    }

  ];

  getUsers(){

    console.log(this.users);
    return this.users.slice();
  }

  getUserAddress(id:any){

    let user= this.users.find(x=>x.id == id);
    console.log(user?.address);
    return (user?.address);
  }

  addUserAddress(id:any,data:any){
    console.log('service');
    console.log(this.users);
    this.users[id-1].address=data;
    console.log(this.users);
    return this.users[id-1].address;
  }


}
