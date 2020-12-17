import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalFeedComponent} from './components/globalFeed/globalFeed.component';
import {RouterModule} from '@angular/router';

const routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {
}
