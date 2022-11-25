import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-beer',
  templateUrl: './card-beer.component.html',
  styleUrls: ['./card-beer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardBeerComponent {
  @Input() id!: number
  @Input() title!: string;
  @Input() description!: string;
  @Input() img!: string;
}
