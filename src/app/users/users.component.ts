import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  
   users:any=[];

  constructor(private http :HttpClient, private usersService:UserService) { }

  ngOnInit(): void {
 
      this.http.get(environment.API_URL + 'user').subscribe(res => {
        this.users=res;
        console.log(res);
      });
      
  }

  
}
