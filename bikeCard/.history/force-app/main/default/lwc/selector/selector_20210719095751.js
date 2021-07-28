import { LightningElement, wire } from 'lwc';
import getUserInfo from '@salesforce/apex/UserDetails.getUserInfo'; /* Apex method*/
import Id from '@salesforce/user/Id';

export default class LwcUserDetail extends LightningElement {

    @wire(getUserInfo, { userId: Id })  // call Apex method and pass User id
    userData;
}