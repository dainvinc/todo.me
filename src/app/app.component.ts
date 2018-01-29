import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //Trying out the code with the Input
  // private todoText: string;
  // private todos: Todo[];
  // private nextId: number;
  
  constructor(public dialog: MatDialog) {
    // this.todos = [
    //   new Todo(0, "How are you?")
    // ]
    
    // this.nextId = 1;
    // this.todoText = '';
    
  }
  
  ngOnInit() {
    // this.checkMe = false;
  }
  
  // private addTodo(): void {
  //   console.log("Hello: "+this.todoText);
  //   let todo = new Todo(this.nextId, this.todoText);
  //   this.todos.push(todo);
  //   this.nextId++;
  //   this.todoText = '';
  // }
  
  public openDialog() {
    this.dialog.open(MyDialogComponent, {});
  }

}

//To create a new Todo
// class Todo {
//     id: number;
//     text: string;
    
//     constructor(id: number, text: string) {
//       this.id = id;
//       this.text = text;
//     }
//   }
  
