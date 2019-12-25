import { Component, OnInit, ViewChildren } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { NgForm ,FormsModule} from '@angular/forms';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
@ViewChildren('f') loginForm:NgForm;
  user$: Object;
 
  user={
    id:'',
    email:''
  }
  constructor(private route: ActivatedRoute, private data: DataService) { 
     this.route.params.subscribe( params => this.user$ = params.id );
  }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data => this.user$ = data 
      
    );
  }
  dataSubmit(){
    this.user.id=this.loginForm.value.id;
  }
  

}
