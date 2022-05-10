import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/component/Services/userServices/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFrom!: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,private userdata:UserService) { }

    ngOnInit() {
        this.loginFrom = this.formBuilder.group({
            
            
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            // confirmPassword: ['', Validators.required],
            service:"advance"

           
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginFrom.controls; }

    onSubmit() {
        this.submitted = true;
        console.log("login success"+this.loginFrom.value)

        // stop here if form is invalid
        if (this.loginFrom.valid) {
            console.log("log success");
           let data={
            
            email:this.loginFrom.value.email,
            password:this.loginFrom.value.password,
             service:this.loginFrom.value.service
           }
           this.userdata.login(data).subscribe((response:any)=> {
               console.log(response);
               localStorage.setItem("token",response.id)
           })
               
        }

        // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginFrom.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.loginFrom.reset();
    }
}


