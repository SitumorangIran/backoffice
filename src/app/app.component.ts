import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class AppComponent {
  username: string = '';
  password: string = '';
  currentRoute: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }

  onSubmit() {
    if (this.username === 'admin' && this.password === 'admin') {
      alert('Login successful!');
      this.router.navigate(['/home']);
    } else {
      alert('Invalid username or password');
      this.username = '';
      this.password = '';
    }
  }
}
