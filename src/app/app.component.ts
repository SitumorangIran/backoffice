import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AppComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    if (this.username === 'admin' && this.password === 'password') {
      alert('Login successful!');
    } else {
      alert('Invalid username or password');
    }
  }
}
