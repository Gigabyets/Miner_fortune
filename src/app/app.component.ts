import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component'; 
import { FeaturesComponent } from './features/features.component'; 
import { HeroComponent } from './hero/hero.component'; 
import { HeaderComponent } from './header/header.component'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,FeaturesComponent,HeroComponent,HeaderComponent],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
