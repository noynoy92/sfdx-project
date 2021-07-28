import { LightningElement } from 'lwc';
import strUserId from '@salesforce/user/Id';
import uname from '@salesforce/user/Username';
export default class ShowUserDetail extends LightningElement {
    userId = strUserId;
    username=uname;

    
}
