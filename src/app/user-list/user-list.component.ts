import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  template: `
    <table class="table">
      <thead>
        <tr>
          <th>No.</th>
          <th>ID</th>
          <th>Name</th>
          <th>Role</th>
          <!-- 추가 -->
          <th>Action</th>
        </tr>
      </thead>
    <tbody>
      <tr *ngFor="let user of _users; let i=index">
        <td>{{ i }}</td>
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.role }}</td>
        <!-- 추가 -->
        <td>
          <button type="button" class="btn btn-danger btn-sm" (click)="remove.emit(user)">
            <span class="glyphicon glyphicon-remove"></span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="panel panel-default">
    <div class="panel-body">
      <p>Admin: {{ cntAdmin }}</p>
      <p>Developer: {{ cntDeveloper }}</p>
      <p>Designer: {{ cntDesigner }}</p>
    </div>
  </div>
  `,
  styles: []
})
export class UserListComponent implements OnInit {

  // _users는 내부에서만 사용할 private 프로퍼티.
  private _users: User[];

  // 역할별 사용자 카운터
  cntAdmin: number;
  cntDeveloper: number;
  cntDesigner: number;

  // 부모 컴포넌트가 전달한 정보에서 필요한 정보를 추출하여 컴포넌트 프로퍼티에 바인딩한다.
  @Input()
  set users(users: User[]) {
    if (!users) { return; }

    this.cntAdmin = users.filter(({ role }) => role === 'Administrator').length;
    this.cntDeveloper = users.filter(({ role }) => role === 'Developer').length;
    this.cntDesigner = users.filter(({ role }) => role === 'Designer').length;
    this._users = users;
  }

  @Output() remove = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

}
