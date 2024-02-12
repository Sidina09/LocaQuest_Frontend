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


@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnInit {
question: any;
Qform!: FormGroup;
listQuestions:any


constructor(private modalService: NgbModal,private fb: FormBuilder,
  private questionService:QuestionService,private messageService:MessageService) {
}



  ngOnInit(): void {

    this.Qform = this.fb.group({
      title: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),

    });

    this.getQuestions();

  }

  getQuestions(){
    this.questionService.getQuestions().subscribe( (response:any) =>{
          this.listQuestions = response;
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



  public open(modal: any): void {
    this.modalService.open(modal);
  }
  

}
