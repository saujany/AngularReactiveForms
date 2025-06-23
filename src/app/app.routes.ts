import { Routes } from '@angular/router';
import { Home } from './home/home';
import { User } from './user/user';
import { Userlist } from './userlist/userlist';
import { UsedAddEdit } from './used-add-edit/used-add-edit';

export const routes: Routes = [

    {path:'home',component:Home},
    {path:'user',component:User,children:
        [
            {path:'',component:Userlist},
            {path:'add',component:UsedAddEdit},
            {path:'edit/:id',component:UsedAddEdit}
        ]
    },
    
];
