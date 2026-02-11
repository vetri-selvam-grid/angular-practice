import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },       // default route
  { path: 'about', component: About },
  { path: 'contact', component: Contact },

  // Wildcard route (for 404)
  { path: '**', redirectTo: '' }
];