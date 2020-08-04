import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LazyWrapperComponent } from './lazy-wrapper.component';

const routes: Routes = [{ path: '', component: LazyWrapperComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LazyRoutingModule {}
