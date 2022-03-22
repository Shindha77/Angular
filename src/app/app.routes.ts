import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const ROUTES: Routes = [
  { path: 'user', component: UserProfileComponent},
  { path: 'signup', component: SignupComponent},
  { path: '', component: UserProfileComponent},
];

export { ROUTES };
