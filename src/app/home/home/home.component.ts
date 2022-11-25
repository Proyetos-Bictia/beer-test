import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  kindOfBeers = [
    {
      id: 1,
      title: 'PILSNER',
      subtitle: 'It’s a clean and simple pale lager and one of the more popular beer varieties.'
    },
    {
      id: 2,
      title: 'STOUTS',
      subtitle: 'Stouts have an unclear history, yet it’s strongly held by many that they derive from porters.'
    },
    {
      id: 3,
      title: 'PALE ALE',
      subtitle: 'Pale ale is one of the world’s most popular beer styles. It’s made with the use of pale malt.'
    },
    {
      id: 4,
      title: 'BROWN ALE',
      subtitle: 'It’s a very old style beer, whose history dates back to unhopped ales.'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
