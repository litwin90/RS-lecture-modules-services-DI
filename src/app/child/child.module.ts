import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FeatureService } from '../feature/services/feature.service';
import { Child4Component } from './components/child4/child4.component';
import { Child5Component } from './components/child5/child5.component';

@NgModule({
    declarations: [Child4Component, Child5Component],
    exports: [Child4Component, Child5Component],
    imports: [CommonModule],
    providers: [FeatureService],
})
export class ChildModule {}
