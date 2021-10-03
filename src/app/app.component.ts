import { Component } from '@angular/core';

export interface element {
  id: number;
  name: string;
}

const ELEMENT_DATA: element[] = [
  {id: 1, name: 'Hans'},
  {id: 2, name: 'Peter'},
  {id: 3, name: 'Susi'},
  {id: 4, name: 'Maria'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'data-table';
  displayedColumns:string[] = ["id", "name"];

  dataSource = ELEMENT_DATA;
  


}
