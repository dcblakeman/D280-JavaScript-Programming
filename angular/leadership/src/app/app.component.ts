import { Component } from '@angular/core';
import { PeopleService } from 'src/app/shared/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  peopleArray: any;
  
  constructor(private peopleService: PeopleService) { }

  getPeople(){
    this.peopleService.getPeople().subscribe((people: any) => {
        this.peopleArray = people
    });
  }

  ngOnInit() {
    this.getPeople();
  }
}
