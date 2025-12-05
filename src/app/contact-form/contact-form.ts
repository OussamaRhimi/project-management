import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.css']
})
export class ContactFormComponent implements OnInit {
  form!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      nom: new FormControl('', [Validators.required, Validators.minLength(2)]),
      prenom: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email2: new FormControl('', [Validators.required, Validators.email]),
      telephone: new FormControl('', [Validators.pattern(/^0[1-9][0-9]{8}$/)]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  // Getters pour faciliter l'accès aux contrôles dans le template
  get email() {
    return this.form.get('email');
  }

  get nom() {
    return this.form.get('nom');
  }

  get prenom() {
    return this.form.get('prenom');
  }

  get email2() {
    return this.form.get('email2');
  }

  get telephone() {
    return this.form.get('telephone');
  }

  get message() {
    return this.form.get('message');
  }

  // Méthode pour soumettre le formulaire
  onSubmit(): void {
    if (this.form.valid) {
      console.log('Formulaire soumis:', this.form.value);
    }
  }
}
