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
  private name_item: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private item: ItemService
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  cadastrarCategoria(f: NgForm){
    console.log(f.value.name);
    this.name_item = f.value.name;

    this.item.createCategory(f.value).then( (res) => {

      this.item.addCategory(this.name_item).then( (res) => {

        console.log('Item cadastrado');
      }).catch((error) => {
        console.log('Erro ao cadastrar o item');
      }).finally( () => {});

    })
    .catch( (error) => {
      console.error(error);
    })
  }

  addRegisterCategory(f: NgForm, category){
    let data: any = f.value;
    data['date'] = new Date();
    this.item.addRegisterCategory(data, category).then( res => {

    }).catch( (error) => {
      console.error(error);
    })
  }


}
