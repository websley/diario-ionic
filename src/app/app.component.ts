import { ItemService } from './services/item.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages: any = [];

  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(private item: ItemService) {
    this.getCategories();
  }

  getCategories(){
    this.item.getCategorias().subscribe( res => {
      this.initiateMenuArray();
      res.forEach((iten: any) => {
        this.appPages.push({title: this.firstLetterUperCase(iten.name), url: `/folder/${iten.name}`, icon: 'add'});
      });
    })
  }

  firstLetterUperCase($word){
    return $word.charAt(0).toUpperCase() + $word.slice(1);
  }

  initiateMenuArray(){
    this.appPages = [];
    this.appPages.push({title: this.firstLetterUperCase('Add Categorias'), url: `/folder/Nova`, icon: 'add'})
  }
}
