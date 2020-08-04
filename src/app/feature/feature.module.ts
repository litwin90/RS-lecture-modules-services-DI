import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChildModule } from '../child/child.module';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { Child3Component } from './components/child3/child3.component';
import { ParentComponent } from './components/parent/parent.component';
import { FeatureRoutingModule } from './feature-routing.module';

@NgModule({
    declarations: [
        ParentComponent,
        Child1Component,
        Child2Component,
        Child3Component,
    ],
    imports: [CommonModule, ChildModule, FeatureRoutingModule],
    exports: [ParentComponent],
})
export class FeatureModule {}
