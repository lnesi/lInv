import { Component } from '@angular/core';

@Component({
	selector:'topNav',
	templateUrl:'./topnav.component.html',

})

export class TopNavComponent{
	isCollapsed: boolean = true;
	toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
   }

}
