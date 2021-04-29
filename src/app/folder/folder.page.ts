import { ItemService } from './../services/item.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private item: ItemService
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  cadastrarCategoria(f: NgForm){
    console.log(f.value);
    this.item.createCategory(f.value).then( () => {
      console.log('Item cadastrado')
    })
    .catch( (error) => {
      console.error(error);
    })
  }

}
