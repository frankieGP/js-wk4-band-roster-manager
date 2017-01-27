import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [MemberService]
})
export class WelcomeComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  instrumentFilter: string = "";
  currentRoute: string = this.router.url;

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }
  onChange(optionFromMenu) {
    this.instrumentFilter = optionFromMenu;
  }
  goToDetailPage(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  };
}
