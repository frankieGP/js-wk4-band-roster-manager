import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Pipe({
  name: 'instrumentType',
  pure: false
})
export class InstrumentTypePipe implements PipeTransform {

  transform(input: any[], instrumentType: string) {
    var output: Member[] = [];
    if (input != null) {
    if (instrumentType != "") {
        for (var i= 0; i < input.length; i++) {
          if (input[i].instrument === instrumentType) {
            output.push(input[i]);
          }
        };
        return output;
      };
      return input;
    }
  }
}
