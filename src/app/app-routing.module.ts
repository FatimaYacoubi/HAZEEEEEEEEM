import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarudGuard } from './garud/garud.guard';
import { UsergarudGuard } from './garud/usergarud.guard';
import { NotuserGuard } from './garud/notuser.guard';
import { UserpassgarudGuard } from './garud/userpassgarud.guard';

const routes: Routes = [
{path:"",redirectTo:"/",pathMatch:"full"},
{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
{ path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) ,canActivate:[UsergarudGuard]},
{ path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),canActivate:[UserpassgarudGuard] },
{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) ,canActivate:[UsergarudGuard]},
{ path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule),canActivate:[GarudGuard] },


{path:"departement",loadChildren:()=>import("./departement/departement.module").then(m=>m.DepartementModule),
},
{path:"user",loadChildren:()=>import("./user/user.module").then(m=>m.UserModule),
},
{path:"contrat",loadChildren:()=>import("./contrat/contrat.module").then(m=>m.ContratModule),
},
{path:"entreprise",loadChildren:()=>import("./entreprise/entreprise.module").then(m=>m.EntrepriseModule),
},
{path:"professeur",loadChildren:()=>import("./professeur/professeur.module").then(m=>m.ProfesseurModule),
},
{ path: 'equipe', loadChildren: () => import('./Equipe/equipe.module').then(m => m.EquipeModule) },
{ path: 'DetailEquipe', loadChildren: () => import('./detail-equipe/detail-equipe.module').then(m => m.DetailEquipeModule) },

{ path: 'projet', loadChildren: () => import('./projet/projet-.module').then(m => m.ProjetModule) },
{ path: 'projetdetail', loadChildren: () => import('./projectdetails/projectdetails.module').then(m => m.ProjectdetailsModule) }
,{path:"offre",loadChildren:()=>import("./offre/offre.module").then(m=>m.OffreModule),},
{path:"universite",loadChildren:()=>import("./universite/universite.module").then(m=>m.UniversiteModule),}
,{path:"partenaire",loadChildren:()=>import("./partenaire/partenaire.module").then(m=>m.PartenaireModule),},

{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
