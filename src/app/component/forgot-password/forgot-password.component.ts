import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/component/Services/userServices/user.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordFrom!: FormGroup;
    submitted = false;
    

    constructor(private formBuilder: FormBuilder,private userdata:UserService ) { }

    ngOnInit() {
        this.forgotPasswordFrom = this.formBuilder.group({
           
            
            email: ['', [Validators.required, Validators.email]],
            
           
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.forgotPasswordFrom.controls; }

    onSubmit() {
        this.submitted = true;
        console.log("forgot success",this.forgotPasswordFrom.value)

        // stop here if form is invalid
        if (this.forgotPasswordFrom.valid) {
            console.log("forgot success");
           let data={
            
            email:this.forgotPasswordFrom.value.email,
          
            
            
        }
        this.userdata.forgot(data).subscribe((response:any)=> {
            console.log(response);
        })
    }

        // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgotPasswordFrom.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.forgotPasswordFrom.reset();
    }
}

