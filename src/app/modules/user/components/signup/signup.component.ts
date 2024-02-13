import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  signupForm!: FormGroup;
  
  constructor(private userService:UserService,private fb: FormBuilder,
    private messageService:MessageService, private route:Router) {}


    ngOnInit(): void {
      this.signupForm = this.fb.group({
        email: new FormControl('', Validators.required),
        password_digest: new FormControl('', Validators.required),
    
      });
    }
  
  signUp(): void {

    const formData = this.signupForm.value;
    var userData = {
      email: formData.email,
      password_digest: formData.password_digest,
    
    };
  
    this.userService.postUsers(userData).subscribe( (response:any )=>{
      console.log('data', userData)
      console.log(' this is response data', response);
  
      this.messageService.add({severity:'success', summary:'Success', detail:'User signed up successfully!'});
      this.route.navigate(['/signin'])
      this.signupForm.reset();

    }, (error) =>{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred during sign up!' });
    }) 
   
  }
 
  

}
