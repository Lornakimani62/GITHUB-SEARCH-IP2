import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Users} from '../users';
import {Repositories} from '../repositories'
import { resolve, reject } from '../../../node_modules/@types/q';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class FinderRequestService {
  // Giving the properties their type
  private username:string;
  private clientid='7c6b97c25474dbd23644';
  private clientsecret='6872d0cba38ccc1436477bcbdf34c714b561789b'; 
  // users:Users;
  

  constructor(private http:HttpClient) { 
    this.username='Lornakimani62';
  }
  // A method to get user's request 

  usersRequest(name){
    let users = new Users("","","","","")
    interface ApiResponse{
      login:string;
      email:string;
      location:string;
      avatar_url: any;
      html_url: any;
    }
    let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/"+ name+"?client_id=" + this.clientid +"&client_secret=" + this.clientsecret).toPromise().then(response=>{
        users.login=response["login"]
        users.email=response["email"]
        users.location=response["location"]
        users.avatar_url=response["avatar_url"]
        users.html_url=response["html_url"]

          resolve()
      },
      error=>{
        console.log("Error")
              reject(error)
          }
      )
  })

  return users
}
reposRequest(name){
  let repos:Repositories[] = []
  interface ApiResponse{
    name:string;
    description:string;
    repos_url:any;
  }
  let promise =new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>('https://api.github.com/users/' + name + '/repos?access_token=284a70214412bb8997800d2a05b0635cf59d5e71').toPromise().then(response=>{
      for(let i = 0; i < response["length"];i++) {
        let repositories = new Repositories("","","")
        repositories.name = response[i]["name"];
        repositories.description = response[i]["description"]
        repositories.repos_url = response[i]["html_url"]
        repos.push(repositories)

      }
      

        resolve()
    },
    error=>{
      console.log("repositories")
            reject(error)
        }
    )
})

return repos
}


}