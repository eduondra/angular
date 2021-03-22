import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username = '';
  password = '';
  url = 'api/users/register';

  constructor(private http: HttpClient, private router: Router) {}

  submit(): void{
    const body = {
      username: this.username,
      password: this.password
    };

    if (this.password === this.password) {
      this.http.post(this.url, body, {observe: 'response'}).subscribe((data: any) => {
        console.log(data.body);
        this.router.navigate(['/login']);
      });
    } else {
      console.log('mm>faceit, smrt>ops');
    }
  }

  ngOnInit(): void {
  }

}
