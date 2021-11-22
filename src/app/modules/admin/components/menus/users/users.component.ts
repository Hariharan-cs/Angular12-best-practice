import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IUser } from 'src/app/models/user.interface';
import { GetUsers } from 'src/app/store/actions/user.actions';
import { selectUserList } from 'src/app/store/selectors/user.selector';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$ = this._store.pipe(select(selectUserList));

  constructor(private _store: Store<IAppState>, private _router: Router) {}
  displayedColumns: string[] = ['id', 'name', 'cardNumber', 'cardType'];

  ngOnInit() {
    console.log('/admin/menus/users tiggered')
    this._store.dispatch(new GetUsers());
    console.log('users$', this.users$)
  }

  navigateToUser(id: number) {
    this._router.navigate(['admin/menus/user', id]);
  }

}
