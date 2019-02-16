import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  users: User[];
  
  constructor() {
    this.users = [
      new User(1, 'Lee', 'Administrator'),
      new User(2, 'Baek', 'Developer'),
      new User(3, 'Seo', 'Designer')
    ];
  }

  // 사용자 추가
  addUser(name: string, role: string) {
    if (name && role) {
      this.users = [...this.users, new User(this.getNextId(), name, role)];
    }
  }

  // 해당 사용자 제거
  /**
   * 
   * @param user 
   * 자식 컴포넌트로 부터 emit을 통해 받은 상태 값 
   */
  removeUser(user: User) {
    this.users = this.users.filter(({ id }) => id !== user.id);
  }

  // 새로운 사용자 아이디 취득
  getNextId(): number {
    return this.users.length ? Math.max(...this.users.map(({ id}) => id)) + 1 : 1;
  }
  name = 'Angular';
}
