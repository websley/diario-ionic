import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private fireStore: AngularFirestore) { }

  createCategory(category: any){
    let name: string = category.name.toLowerCase();
    delete category.name;
    return this.fireStore.collection(name).add(category);
  }

  addCategory(category: string){
    console.log(category);
    let data: any = {name: category.toLowerCase()};
    return this.fireStore.collection('categorias').add(data);
  }

  getCategorias(){
    return this.fireStore.collection('categorias').valueChanges();
  }
}
