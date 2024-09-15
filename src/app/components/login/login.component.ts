import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule,MatInputModule,MatButtonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:string;
  password:string;
authservice = inject(AuthService);
router = inject(Router);

login(){
  if(this.email && this.password){
    this.authservice.login(this.email,this.password).subscribe(res=>{
      console.log(res);
      localStorage.setItem("token",res.accessToken);
      this.router.navigateByUrl("/admin/blogs");
    })
  }else{
    alert("Please enter email id and password");
  }
}
}
