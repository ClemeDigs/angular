import { MonsterTypeProperties } from './../../utils/monster.utils';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  computed,
  input,
} from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css',
})
export class PlayingCardComponent {
  monster = input(new Monster());
  monsterTypeIcon = computed(() => {
    return MonsterTypeProperties[this.monster().type].imageUrl;
  });
  backgroundColor = computed(() => {
    return MonsterTypeProperties[this.monster().type].color;
  });
}
