import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2'


@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css'],
  providers: [MemberService]

})
export class BandComponent implements OnInit{
  members: FirebaseListObservable<any[]>;


  constructor(private router: Router, private memberService: MemberService){}

  ngOnInit(){
    this.members = this.memberService.getMembers();
  }

  goToDetailPage(clickedMember: Member) {
    this.router.navigate(['members', clickedMember.id]);
  };

}
