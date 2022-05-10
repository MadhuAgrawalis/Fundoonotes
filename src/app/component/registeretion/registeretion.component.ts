import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/component/Services/userServices/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeretion',
  templateUrl: './registeretion.component.html',
  styleUrls: ['./registeretion.component.scss']
})
export class RegisteretionComponent implements OnInit {
  
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private userdata:UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
     
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      
      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      console.log("register success"+this.registerForm.value)

      // stop here if form is invalid
      if (this.registerForm.valid) {
         console.log("res success");
         let data={
          firstName:this.registerForm.value.firstName,
          lastName:this.registerForm.value.lastName,
          email:this.registerForm.value.email,
          password:this.registerForm.value.password,
          service:"advance"
         }
         this.userdata.Registration(data).subscribe((response:any)=> {
             console.log(response);
             
         })
      }

      // display form values on success
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}

