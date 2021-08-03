import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'Movie Maniacs';
  sayHelloId = 'sayHelloId';
  fontColor = 'red';
  canEdit = false;

  random_rgba(): string {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }
    return color;
  }

  ngOnInit(){
  }

  onEditClick(){
    this.canEdit = !this.canEdit;
  }

  sayMessage() {
    this.fontColor = this.random_rgba();
}
}
