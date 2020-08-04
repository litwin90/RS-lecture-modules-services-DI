import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Child6Component } from './child6/child6.component';
import { Child7Component } from './child7/child7.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { LazyWrapperComponent } from './lazy-wrapper.component';

@NgModule({
    declarations: [Child7Component, Child6Component, LazyWrapperComponent],
    imports: [CommonModule, LazyRoutingModule],
})
export class LazyModule {}
