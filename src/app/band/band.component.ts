import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent {

  constructor(private router: Router){}
  
  members: Member[] =[
    new Member("Stu Mackenzie", "Vocals", 1),
    new Member("Ambrose Kenny Smith", "Keyboards", 2),
    new Member("Cook Craig", "Guitar", 3),
    new Member("Joey Walker", "Guitar", 4),
    new Member("Lucas Skinner", "Bass", 5),
    new Member("Eric Moore", "Drums", 6),
    new Member("Michael Cavanagh", "Drums", 7)
  ];

  goToDetailPage(clickedMember: Member) {
    this.router.navigate(['members', clickedMember.id]);
  };

}
