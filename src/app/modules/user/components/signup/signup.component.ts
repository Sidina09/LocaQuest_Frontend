import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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
