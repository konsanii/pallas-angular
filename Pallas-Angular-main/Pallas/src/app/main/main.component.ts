import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { HomeMainComponent } from '../home-main/home-main.component';
import { EquipeComponent } from '../equipe/equipe.component';
import { GamesComponent } from '../games/games.component';
import { RecursosComponent } from '../recursos/recursos.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, FooterComponent, HomeMainComponent, EquipeComponent, GamesComponent, RecursosComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
