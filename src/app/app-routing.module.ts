import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "/home" },
    { path: "home", component: HomeComponent },
    { path: "contactus", component: ContactusComponent },
    { path: "settings", component: SettingsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [HomeComponent, ContactusComponent, SettingsComponent];