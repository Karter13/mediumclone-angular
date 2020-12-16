import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CurrentUserInterface} from '../../../../types/currentUser.interface';
import {select, Store} from '@ngrx/store';
import {currentUserSelector, isAnonymousSelector, isLoggedInSelector} from '../../../../../auth/store/selectors';

@Component({
  selector: 'app-topbar',
  templateUrl: 'topBar.component.html',
  styleUrls: ['topBar.component.scss'],
})
export class TopBarComponent implements OnInit{

  isLoggedIn$!: Observable<boolean>;
  isAnonymous$!: Observable<boolean>;
  currentUser$!: Observable<CurrentUserInterface | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {

    // @ts-ignore
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    // @ts-ignore
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    // @ts-ignore
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}
