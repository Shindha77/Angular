import { Routes } from '@angular/router';
import { CreateDonkeyComponent } from './create-donkey/create-donkey.component';
import { ListDonkeyComponent } from './list-donkey/list-donkey.component';


const ROUTES: Routes = [
  { path: 'create-donkey', component: CreateDonkeyComponent },
];

export { ROUTES };
