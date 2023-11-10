import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ArmylistComponent } from './armylist/armylist.component';
import { CampaignComponent } from './campaign/campaign.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'inventory', component:InventoryComponent},
  {path: 'armylist', component:ArmylistComponent},
  {path: 'campaign', component:CampaignComponent},
  {path: 'signup', component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
