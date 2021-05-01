import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private fireStore: AngularFirestore) { }

  createCategory(data: any){
    let name: string = data.name.toLowerCase();
    delete data.name;
    data['date'] = new Date();
    return this.fireStore.collection(name).add(data);
  }

  addCategory(category: string){
    console.log(category);
    let data: any = {name: category.toLowerCase()};
    return this.fireStore.collection('categorias').add(data);
  }

  getCategorias(){
    return this.fireStore.collection('categorias').valueChanges();
  }

  addRegisterCategory(data: any, category){
    console.log(data, category);
    return this.fireStore.collection(category).add(data);
  }
}
