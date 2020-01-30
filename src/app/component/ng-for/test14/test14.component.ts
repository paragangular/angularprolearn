import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test14',
  templateUrl: './test14.component.html',
  styleUrls: ['./test14.component.css']
})
export class Test14Component implements OnInit {

            
  public persons: Person[];
  public names: string[];

  constructor() {
    this.names =['parag','phatowali','mrinal','shyam','bhargab','gogoi','sanjib','gogoi'];
    this.persons = [ {'fname':'parag','lname':'phatowali','age':30},
                    {'fname':'sanjib','lname':'gogoi','age':30},
                    {'fname':'bhargab','lname':'gogoi','age':28},
                    {'fname':'mrinal','lname':'shyam','age':25}];
  }

  ngOnInit() {
  }

}

interface Person{
  fname: string;
  lname: string;
  age: number;
}