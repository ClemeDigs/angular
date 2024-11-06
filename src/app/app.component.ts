import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { Component, signal, computed, effect, model } from '@angular/core';
import { Monster } from './models/monster.model';
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  monsters!: Monster[];
  search = model('');

  filteredMonsters = computed(() => {
    return this.monsters.filter((monster) =>
      monster.name.includes(this.search())
    );
  });

  constructor() {
    this.monsters = [];

    const monster1 = new Monster();
    monster1.name = 'Pikachu';
    monster1.hp = 40;
    monster1.figureCaption = 'N025 Pikachu';
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.name = 'Carapuce';
    monster2.image = '/assets/img/cara.png';
    monster2.type = MonsterType.WATER;
    monster2.hp = 50;
    monster2.figureCaption = 'N004 Carapuce';
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.name = 'Salamèche';
    monster3.image = '/assets/img/sala.png';
    monster3.type = MonsterType.FIRE;
    monster3.hp = 50;
    monster3.figureCaption = 'N007 Salamèche';
    this.monsters.push(monster3);

    const monster4 = new Monster();
    monster4.name = 'Bulbizarre';
    monster4.image = '/assets/img/bulbi.png';
    monster4.type = MonsterType.PLANT;
    monster4.hp = 50;
    monster4.figureCaption = 'N001 Bulbizarre';
    this.monsters.push(monster4);
  }
}
