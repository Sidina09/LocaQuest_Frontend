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
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm!: FormGroup;
  
  constructor(private userService:UserService,private fb: FormBuilder,
    private messageService:MessageService, private route:Router) {}


    ngOnInit(): void {
      this.signinForm = this.fb.group({
        email: new FormControl('', Validators.required),
        password_digest: new FormControl('', Validators.required),
       
      
      })
    }
    signIn(): void {

      const formData = this.signinForm.value;
    
      this.userService.getUsers().subscribe( (response:any )=>{
        console.log('res', response)

        for(let i=0;i<response.length;i++){
          if(formData.email === response[i].email && formData.password_digest === response[i].password_digest){
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred during login!' });
            this.route.navigate(['/list-questions'])
            this.signinForm.reset();
          }
         
        }
       
  
      }, (error) =>{
  
      }) 
     
    }
   

}
