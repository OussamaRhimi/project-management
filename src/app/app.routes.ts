import { Routes } from '@angular/router';
import { ProjectsPageComponent } from './projects-page/projects-page';
import { ContactFormComponent } from './contact-form/contact-form';

export const routes: Routes = [
  { path: '', component: ProjectsPageComponent },
  { path: 'contact', component: ContactFormComponent },
];
