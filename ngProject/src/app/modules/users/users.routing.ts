import { RouterModule } from '@angular/router'

import { UsersComponent } from './users.component'

export const UsersRouting = 
RouterModule.forChild([
    { path: 'users', component: UsersComponent}
])