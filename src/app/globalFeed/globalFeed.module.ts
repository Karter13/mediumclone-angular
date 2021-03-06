import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {GlobalFeedComponent} from './components/globalFeed/globalFeed.component';
import {FeedModule} from '../shared/modules/feed/feed.module';

const routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FeedModule],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {
}
