import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.sass'],
})
export class ParentComponent {
    // constructor(private service: FeatureService) {}
    // // tslint:disable-next-line:use-lifecycle-interface
    // ngOnInit(): void {
    //     this.service.logToConsole('ParentComponent:');
    //     this.service.logServiceId();
    // }
}

// inject in constructor
// @Component({
//     selector: 'app-parent',
//     templateUrl: './parent.component.html',
//     styleUrls: ['./parent.component.sass'],
// })
// export class ParentComponent implements OnInit {
//     constructor(private featureService: FeatureService) {}

//     ngOnInit(): void {
//         this.featureService.logToConsole('Parent component initialized');
//     }
// }

// inject using injector
// @Component({
//     selector: 'app-parent',
//     templateUrl: './parent.component.html',
//     styleUrls: ['./parent.component.sass'],
// })
// export class ParentComponent implements OnInit {
//     constructor(private injector: Injector) {}

//     ngOnInit(): void {
//         const featureService = this.injector.get(FeatureService);

//         featureService.logToConsole('Parent component initialized');
//     }
// }

// useClass
// @Injectable()
// export class Service1 {
//     constructor() {}

//     getServiceName() {
//         return 'Service1';
//     }
// }

// @Injectable()
// export class Service2 {
//     constructor() {}

//     getServiceName() {
//         return 'Service2';
//     }
// }

// @Component({
//     selector: 'app-parent',
//     templateUrl: './parent.component.html',
//     styleUrls: ['./parent.component.sass'],
//     providers: [{ provide: Service1, useClass: Service2 }],
// })
// export class ParentComponent implements OnInit {
//     constructor(private service: Service1) {}

//     ngOnInit(): void {
//         console.log(this.service.getServiceName());
//     }
// }

// useValue
// @Component({
//     selector: 'app-parent',
//     templateUrl: './parent.component.html',
//     styleUrls: ['./parent.component.sass'],
//     providers: [{ provide: Animal, useValue: dog }],
// })
// export class ParentComponent implements OnInit {
//     constructor(private animal: Animal) {}

//     ngOnInit(): void {
//         this.animal.logName();
//     }
// }

// useValue + token
// const TOKEN = new InjectionToken<string>('someString');

// @Component({
//     selector: 'app-parent',
//     templateUrl: './parent.component.html',
//     styleUrls: ['./parent.component.sass'],
//     providers: [{ provide: TOKEN, useValue: 'InjectedString' }],
// })
// export class ParentComponent implements OnInit {
//     constructor(@Inject(TOKEN) private injectedString: string) {}

//     ngOnInit(): void {
//         console.log(this.injectedString);
//     }
// }
