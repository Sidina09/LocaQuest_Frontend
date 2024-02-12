import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email: string = '';
  password: string = '';
  
  // constructor(private authService: AuthService) {}

  // signUp(): void {
  //   this.authService.signUp(this.email, this.password).subscribe(response => {
  //     // Handle response
  //   });
  // }

  ngOnInit(): void {
  }

}
