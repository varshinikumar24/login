import { Component, OnInit, ViewChildren } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChildren('f') loginForm:NgForm;
  title="login Page";
  user$:Object;
  id='';
  email='';
   user={
       id:'',
       email:''
   }
  submitted=false;
  constructor(private data:DataService,private router: Router,private route:ActivatedRoute){
    //this.route.params.subscribe( params => this.user$ = params.id );
  }
   ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data => this.user$ = data 
    
    );
  }
  
   onSubmit(){
    // console.log(form.value.id+" "+ form.value.email);
     this.submitted=true;
        //this.user.id=this.loginForm.value.id;
        
    }
  }

