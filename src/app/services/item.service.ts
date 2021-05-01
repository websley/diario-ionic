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

  getCaregories(){
    return this.fireStore.collection('categories').doc('ativos').valueChanges();
  }

  getCategorias(){
    return this.fireStore.collection('categorias').valueChanges();
  }
}
