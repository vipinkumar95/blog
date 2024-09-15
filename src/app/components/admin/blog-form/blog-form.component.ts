import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Title } from '@angular/platform-browser';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { CategoryService } from '../../../category.service';
import { Category } from '../../../types/Category';
import { BlogService } from '../../../blog.service';
import { Blog } from '../../../types/blog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  standalone: true,
  imports: [ReactiveFormsModule,MatInputModule,MatButtonModule,MatCheckboxModule,MatSelectModule],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css'
})
export class BlogFormComponent {
formBuilder = inject(FormBuilder);
blogform = this.formBuilder.group({
  id:[null],
  categoryId:[null,Validators.required],
  title:['',Validators.required],
  description:['',Validators.required],
  content:['',Validators.required],
  image:['',Validators.required],
  isFeatured:[false,Validators.required]
})

categoryservice = inject(CategoryService);
blogservice = inject(BlogService);
categoryList:Category[]=[];
router = inject(Router);
isEdit = false;
rout = inject(ActivatedRoute);
ngOnInit(){
  let id = this.rout.snapshot.params['id'];
  console.log(id);
  if(id){
    this.isEdit = true;
    this.blogservice.getAllblogsbyid(+id).subscribe(res =>{
      this.blogform.patchValue(res as any);
    })
  }

  this.categoryservice.getCategoryList().subscribe((res =>this.categoryList=res));
}

click(){
  console.log(this.blogform.value);
  let model:any = this.blogform.value;
  this.blogservice.addblog(model as Blog).subscribe(() =>{
    alert("Blog Create successfully");
    this.router.navigateByUrl("/admin/blogs");
  })
}
update(){
  debugger
  console.log(this.blogform.value);
  let model:any = this.blogform.value;
  this.blogservice.updateblog(this.blogform.value.id!,model as Blog).subscribe(() =>{
    alert("Blog update successfully");
    this.router.navigateByUrl("/admin/blogs");
  })
}
}
