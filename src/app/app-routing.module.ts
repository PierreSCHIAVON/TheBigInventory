import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { InventoryComponent } from './Components/inventory/inventory.component';
import { ArmylistComponent } from './Components/armylist/armylist.component';
import { CampaignComponent } from './Components/campaign/campaign.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AdminComponent } from './Components/admin/admin.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'inventory', component:InventoryComponent},
  {path: 'armylist', component:ArmylistComponent},
  {path: 'campaign', component:CampaignComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'signup', component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
