import { Component } from '@angular/core';

@Component({
    selector: 'app-child1',
    templateUrl: './child1.component.html',
    styleUrls: ['./child1.component.sass'],
})
export class Child1Component {
    // constructor(private service: FeatureService) {}
    // // tslint:disable-next-line:use-lifecycle-interface
    // ngOnInit(): void {
    //     this.service.logToConsole('Child1Component:');
    //     this.service.logServiceId();
    // }
}
