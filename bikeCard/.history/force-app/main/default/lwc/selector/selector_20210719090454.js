import { LightningElement } from 'lwc';
import NAME_FIELD from '@salesforce/schema/User.Name';
export default class Selector extends LightningElement {
    selectedProductId;

    handleProductSelected(evt) {
        this.selectedProductId = evt.detail;
    }
}
