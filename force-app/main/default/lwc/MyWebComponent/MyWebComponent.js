import { LightningElement, track } from 'lwc';
export default class HelloWorld extends LightningElement {
    @track greeting = 'World1231213213';
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}