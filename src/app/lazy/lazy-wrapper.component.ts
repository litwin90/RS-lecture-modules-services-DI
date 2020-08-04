import { Component } from '@angular/core';

@Component({
    selector: 'app-lazy-wrapper',
    templateUrl: './lazy-wrapper.component.html',
    styleUrls: ['./lazy-wrapper.component.sass'],
})
export class LazyWrapperComponent {
    // constructor(private service: FeatureService) {}
    // // tslint:disable-next-line:use-lifecycle-interface
    // ngOnInit(): void {
    //     this.service.logToConsole('LazyWrapperComponent:');
    //     this.service.logServiceId();
    // }
}
