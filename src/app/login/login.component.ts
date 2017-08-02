import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, URLSearchParams } from '@angular/http';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    errorsmsg: boolean = false;
    invalidsmsg: boolean = false;

    constructor(public router: Router, private http: Http) { }

    ngOnInit() { }

    loginSubmit(f: NgForm) {

        //console.log(f.value); // form object
        //console.log('email : ' + f.value.email);
        //console.log('pwd : ' + f.value.password);
        //console.log(f.valid);  // returns true or false

        if(f.valid){

            if( f.value.email === "ambaledath" && f.value.password === "ambaledath" ){
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('currentUser', f.value.email);
                this.router.navigate(['/dashboard']);
            }else{
                this.errorsmsg = true;
                setTimeout(function() {
                    this.errorsmsg = false;
                }.bind(this), 3000);
            }

            // on real scenario
            /*
            let data = new URLSearchParams();
            data.append('usr', f.value.email);
            data.append('pwd', f.value.password);
            
            this.http.post('http://api-codrsource.rhcloud.com/login', data).subscribe(data => {
                let res  = data.json();
                if( res.msg == "success" ){
                    localStorage.setItem('isLoggedin', 'true');
                    this.router.navigate(['/dashboard']);
                }else{
                    this.errorsmsg = true;
                    setTimeout(function() {
                        this.errorsmsg = false;
                    }.bind(this), 3000);
                }
            }, error => {
                console.log(error.json());
            });
            */

        }else{
            this.invalidsmsg = true;
            setTimeout(function() {
                this.invalidsmsg = false;
            }.bind(this), 3000);
        }

    }

}
