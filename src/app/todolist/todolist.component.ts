import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
  name:string="";
  list:string[]=[];
  addtask(task:string):void{
   this.list.push(task);
   this.name='';
  }
  removetask(index:number):void{
   this.list.splice(index,1);
  };

}
