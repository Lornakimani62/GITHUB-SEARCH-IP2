import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Users} from '../users';
import {Repositories} from '../repositories';
import {FinderRequestService} from '../finder-http/finder-request.service'

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repositories:Repositories[] = [];
  // apiUrl:string = environment.apiUrl
  constructor(private finderRequestService:FinderRequestService) { }

  ngOnInit() {
    this.finderRequestService.reposRequest("Lornakimani62")
    this.repositories=this.finderRequestService.reposRequest("Lornakimani62")
    console.log(this.repositories)
  }

}
