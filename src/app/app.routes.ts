import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { ManageBlogComponent } from './components/admin/manage-blog/manage-blog.component';
import { BlogFormComponent } from './components/admin/blog-form/blog-form.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"blog-detail",
        component:BlogDetailComponent
    },
    {
        path:"blog/:id",
        component:BlogComponent
    },
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"admin/blogs",
        component:ManageBlogComponent
    },
    {
        path:"admin/blog/create",
        component:BlogFormComponent

    },
    {
        path:"admin/blog/update/:id",
        component:BlogFormComponent
    },
    {
        path:"login",
        component:LoginComponent
    }
];
