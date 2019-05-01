import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { PanelComponent } from './components/panel/panel.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, PanelComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule.forRoot()
  ]
})
export class HomeModule { }
