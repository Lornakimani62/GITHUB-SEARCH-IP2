import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Users} from '../users';
import {Repositories} from '../repositories';
import {FinderRequestService} from '../finder-http/finder-request.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers:[FinderRequestService],
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:Users;
  // apiUrl:string = environment.apiUrl
  constructor(private finderRequestService:FinderRequestService) { }


  ngOnInit() {
    this.finderRequestService.usersRequest("Lornakimani62")
    this.users=this.finderRequestService.usersRequest("Lornakimani62")
    console.log(this.users)
  }

}
