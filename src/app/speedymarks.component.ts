import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {NgFor} from '@angular/common';
import {FormsModule} from '@angular/forms';

export class Quicknotes {
  title: String="";
  content: String="";
  todo: String="";
}

@Component({
  selector: 'app-speedymarks',
  imports: [NgFor,MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatCardModule, FormsModule],
  standalone: true,
  templateUrl: './speedymarks.component.html',
  styleUrls: ['./speedymarks.component.css']
})

export class SpeedymarksComponent implements OnInit {
  titleModel: String;
  contentModel: String;
  todoModel: String;
  quicknotes: Quicknotes[];

  constructor() {
    this.titleModel = '';
    this.contentModel = '';
    this.todoModel = '';

    const defaultQuicknotes: Quicknotes = {
      title: 'тестова нотатка',
      content: 'звичайна тестова нотатка',
      todo: ' поле 2 тестової нотатки'
    };
    //перша ініціація
    this.quicknotes = [defaultQuicknotes];
  }
  ngOnInit() {
  }
  //додавання
  createQuicknotes() {
    const newQuicknotes: Quicknotes = {
      title: this.titleModel,
      content: this.contentModel,
      todo: this.todoModel
    };
    this.quicknotes.push(newQuicknotes);
    // set the model values to '' again
    this.titleModel = this.todoModel = this.contentModel = '';
  }
  //видалення
  deleteQuicknotes(item:Quicknotes){
    let index = this.quicknotes.indexOf(item);
    if (index > -1) { // only splice array when item is found
      this.quicknotes.splice(index, 1); // 2nd parameter means remove one item only
    }
    return this.quicknotes;
  }

}
