import { Component,ViewChild, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { QuestionService } from '../services/question.service';
import { MessageService } from 'primeng/api';
import { UserService } from '../../user/user.service';


@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnInit {

question: any;
Qform!: FormGroup;
Aform!: FormGroup;
listQuestions:any
question_id:any
user_id:any



constructor(private modalService: NgbModal,private fb: FormBuilder,
  private questionService:QuestionService,private messageService:MessageService,private userService:UserService) {
}



  ngOnInit(): void {

    this.Qform = this.fb.group({
      title: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),

    });
    this.Aform = this.fb.group({
      content: new FormControl('', Validators.required),

    });

    this.getQuestions();
    this.getUsers();

  }

  getUsers(){
    this.userService.getUsers().subscribe( (response:any) =>{
          for(let i=0;i<response.length;i++){ this.user_id = response[i]._id.$oid
          }
           console.log('id',this.user_id)

    }, (error) =>{

    })
  }
  getQuestions(){
    this.questionService.getQuestions().subscribe( (response:any) =>{
          this.listQuestions = response;
          for(let i=0;i<response.length;i++){ this.question_id = response[i]._id.$oid
          }
           console.log('id',this.question_id)
          console.log('data', response)
          console.log('list: ',this.listQuestions)
    }, (error) =>{

    })
  }

  saveQuestion(){
    const formData = this.Qform.value;
    var questionData = {
      title: formData.title,
      location: formData.location,
      content: formData.content,
    };
  
    this.questionService.postQuestions(questionData).subscribe( (response:any )=>{
      console.log('data', questionData)
      this.getQuestions();
      console.log(' this is response data', response);

  
      this.messageService.add({severity:'success', summary:'Success', detail:'Question posted successfully!'});
            
      this.Qform.reset();

    }, (error) =>{

    }) 
  }
  saveAnswer(){
    const formData = this.Aform.value;
    var answerData = {
      content: formData.content,
      question_id:this.question_id,
      user_id:this.user_id
    };
  
    this.questionService.postAnswers(answerData).subscribe( (response:any )=>{
      console.log('data', answerData)
      console.log(' this is response data', response);

  
      this.messageService.add({severity:'success', summary:'Success', detail:'Answer saved successfully!'});
            
      this.Qform.reset();

    }, (error) =>{

    }) 
  }



  public open(modal: any): void {
    this.modalService.open(modal);
  }
  

}
