import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'home',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
          }
        ]
      },
      {
        path:'characters',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/characters/characters.module').then( m => m.CharactersPageModule)
          }
        ]
      },
      {
        path:'controls',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/controls/controls.module').then( m => m.ControlsPageModule)
          }
        ]
      },
      {
      path:'',
      redirectTo:'home',
      pathMatch:'full'
      }
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
