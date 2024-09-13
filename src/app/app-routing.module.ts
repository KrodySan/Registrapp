import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'alumno',
    loadChildren: () => import('./pages/alumno/alumno.module').then( m => m.AlumnoPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule)
  },

  {
    path: 'conectar-disp',
    loadChildren: () => import('./pages/conectar-disp/conectar-disp.module').then( m => m.ConectarDISPPageModule)
  },
  {
    path: 'mostrar-qr',
    loadChildren: () => import('./pages/mostrar-qr/mostrar-qr.module').then( m => m.MostrarQRPageModule)
  },
  {
    path: 'user-profesor',
    loadChildren: () => import('./pages/user-profesor/user-profesor.module').then( m => m.UserProfesorPageModule)

  },
  {
    path: 'olvidar',
    loadChildren: () => import('./pages/olvidar/olvidar.module').then( m => m.OlvidarPageModule)
  },
  {
    path: 'loginprofesor',
    loadChildren: () => import('./pages/loginprofesor/loginprofesor.module').then( m => m.LoginprofesorPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  
  },   {
    path: 'qrasistencia',
    loadChildren: () => import('./pages/qrasistencia/qrasistencia.module').then( m => m.QRAsistenciaPageModule)
  },
  {
    path: 'registerprofe',
    loadChildren: () => import('./pages/registerprofe/registerprofe.module').then(m => m.RegisterprofePageModule)
  },
  {
    path: 'menuprofe',
    loadChildren: () => import('./pages/menuprofe/menuprofe.module').then( m => m.MenuprofePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
