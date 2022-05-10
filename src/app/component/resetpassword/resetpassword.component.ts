import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/component/Services/userServices/user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  resetFrom!: FormGroup;
    submitted = false;
    token:any;

    constructor(private formBuilder: FormBuilder,private userdata:UserService,private activeRoute: ActivatedRoute) { }

    ngOnInit() {
        
        this.resetFrom = this.formBuilder.group({
            
            
         password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
           
        });
        this.token = this.activeRoute.snapshot.paramMap.get('token');   
        
    }
    // convenience getter for easy access to form fields
    get f() { return this.resetFrom.controls; }

    onSubmit() {
        this.submitted = true;
        console.log("reset success",this.resetFrom.value)
        console.log(this.token);
        // stop here if form is invalid
        if (this.resetFrom.valid) {
            console.log("reset success");
            let data={
             

             
             newPassword:this.resetFrom.value.password,
            // confirmPassword:this.resetFrom.value.confirmPassword,
            //   service:this.resetFrom.value.service
            }
            this.userdata.reset(data,this.token).subscribe((response:any)=> {
                console.log(response);
                
            })
            
        }

        
    }

    onReset() {
        this.submitted = false;
        this.resetFrom.reset();
    }
}

