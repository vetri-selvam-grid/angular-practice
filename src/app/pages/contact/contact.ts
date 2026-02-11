import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.submitted = true;
    
    // Reset form after 3 seconds
    setTimeout(() => {
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
      this.submitted = false;
    }, 3000);
  }
}
