import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule, } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { InventoryComponent } from './Components/inventory/inventory.component';
import { ArmylistComponent } from './Components/armylist/armylist.component';
import { CampaignComponent } from './Components/campaign/campaign.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AdminComponent } from './Components/admin/admin.component';
import { UnitComponent } from './Components/admin/unit/unit.component';
import { ArmyComponent } from './Components/admin/army/army.component';
import { KeywordComponent } from './Components/admin/keyword/keyword.component';
import { WeaponTypeComponent } from './Components/admin/weapon-type/weapon-type.component';
import { UnitTypeComponent } from './Components/admin/unit-type/unit-type.component';
import { SoldierComponent } from './Components/admin/soldier/soldier.component';
import { EquipementComponent } from './Components/admin/equipement/equipement.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    InventoryComponent,
    ArmylistComponent,
    CampaignComponent,
    SignupComponent,
    AdminComponent,
    UnitComponent,
    ArmyComponent,
    KeywordComponent,
    WeaponTypeComponent,
    UnitTypeComponent,
    SoldierComponent,
    EquipementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
