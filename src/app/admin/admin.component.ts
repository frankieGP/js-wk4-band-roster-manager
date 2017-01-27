import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { MemberService } from '../member.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]

})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(name: string, instrument: string, bio: string) {
    var newMember: Member = new Member(name, instrument, bio);
    this.memberService.addMember(newMember);
  }
}
