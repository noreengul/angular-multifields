import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  public addresses: any = [{
    address: '',
  }];

  public address_error :any = false;

  public formSubmitted: any =false;

  public id:any;

  public success:any = false;

  constructor(private http :HttpClient, private usersService:UserService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.router.params.subscribe(paramsId => {
      this.id = paramsId['id'];
      console.log(this.id);
    });

    this.http.get(environment.API_URL + 'address/'+this.id).subscribe(res => {
      this.addresses=res;
      console.log(res);
    });
 
  }

  addAddress() {
 
    this.addresses.push({
      user_id:this.id,
      address: '',
    });
  }

  removeAddress(i: number) {
    
    this.addresses.splice(i, 1);
  }

  logValue() {

    this.formSubmitted = true;
    
    for(let address of this.addresses){
        if(!address.address){
            this.address_error=true;
        }
    }

    if(!this.address_error){
      
      this.http.delete(environment.API_URL + 'address/'+this.id).subscribe(res => {
        this.addresses=res;
        console.log(res);
      });
 
      this.http.post(environment.API_URL + 'address/'+this.id,this.addresses).subscribe(res => {
        this.addresses=res;
        console.log(res);
      });

       this.usersService.addUserAddress(this.id,this.addresses);
       this.success= true;
    }
    

    console.log(this.addresses);
  }

}
