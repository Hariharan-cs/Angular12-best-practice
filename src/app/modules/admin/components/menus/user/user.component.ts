import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { IAppState } from 'src/app/store/state/app.state';
import { selectSelectedUser } from 'src/app/store/selectors/user.selector';
import { GetUser } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user$ = this._store.pipe(select(selectSelectedUser));

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    if(Object.keys(this.user$).length === 0){
      this._router.navigate(['admin/menus']);
    }
  //  console.log('/admin/menus/user tiggered')
   this._store.dispatch(new GetUser(this._route.snapshot.params.id));
  }
 
  backClick(){
    this._router.navigate(['admin/menus/users']);
  }

}
