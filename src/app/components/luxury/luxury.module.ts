import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LuxuryComponent} from './luxury.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [LuxuryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [{path: '', component: LuxuryComponent}]
    )
  ]
})
export default class LuxuryModule {
}
