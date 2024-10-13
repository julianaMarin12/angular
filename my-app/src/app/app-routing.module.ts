import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component'; // Asegúrate de importar el componente
import { LoginComponent } from './login/login.component'; // Importar el componente de login
import { RegisterComponent } from './register/register.component'; // Importar el componente de registro

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent }, // Ruta para "Sobre Nosotros"
  { path: 'login', component: LoginComponent }, // Ruta para el login
  { path: 'register', component: RegisterComponent }, // Ruta para el registro
  { path: '**', redirectTo: 'about-us', pathMatch: 'full' } // Redirección si no existe la ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
