import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { CharacterDetailsComponent } from './components/index/character-details/character-details.component';
const routes: Routes = [

  {
    path: '', component: IndexComponent,
    data: { animationState: 'Index' }
  },

  {
    path: 'index', component: IndexComponent,
    data: { animationState: 'Index' }
  },


  {
    path: 'character-details/:id', component: CharacterDetailsComponent,
    data: { animationState: 'CharacterDetails' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
