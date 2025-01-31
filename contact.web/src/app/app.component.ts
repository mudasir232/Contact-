import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    AsyncPipe,
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  contacts$: Observable<Contact[]>;

  // Contact form model
  contactForm: Contact = {
    name: '',
    email: undefined, 
    phone: '',
    favorite: false,
    id: ''
  };

  constructor(private http: HttpClient) {
    this.contacts$ = this.getContacts();
  }

  private getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('https://localhost:7145/api/Contacts');
  }

  // Submit method
  onSubmit() {
    const payload = {
      ...this.contactForm,
      email: this.contactForm.email?.trim() || null
    };

    this.http.post<Contact>('https://localhost:7145/api/Contacts', payload)
      .subscribe({
        next: (response) => {
          console.log('Submission successful', response);
          this.contactForm = { name: '', email: undefined, phone: '', favorite: false, id: '' };
          this.refreshContacts();
        },
        error: (error) => {
          console.error('Submission failed', error);
        }
      });
  }

  // Delete function
  onDelete(id: string) {
    this.http.delete(`https://localhost:7145/api/Contacts/${id}`)
      .subscribe({
        next: () => {
          alert('Contact deleted successfully');
          this.refreshContacts();
        },
        error: (err) => {
          console.error('Error deleting contact:', err);
        }
      });
  }

  // Helper method to refresh contacts list
  refreshContacts() {
    this.contacts$ = this.getContacts();
  }

  trackByIndex(index: number, item: Contact): number {
    return index;
  }
}
