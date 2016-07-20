export interface IAppCtrl {
	showDiv: boolean;
};

export class AppCtrl implements IAppCtrl{	
	showDiv: boolean;

	constructor(){
		this.showDiv= true;
	}
}