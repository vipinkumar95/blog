import { Component, inject } from '@angular/core';
import { BlogService } from '../../blog.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../types/blog';
import { CategoryService } from '../../category.service';
import { Category } from '../../types/Category';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
blogService = inject(BlogService);
categoryService = inject(CategoryService);
route = inject(ActivatedRoute);
blog!:Blog;
categoryList:Category[]=[];


ngOnInit(){
  let id = this.route.snapshot.params['id'];
  console.log(id);
  this.blogService.getAllblogsbyid(id).subscribe(res =>{
    this.blog = res;
  });
  this.categoryService.getCategoryList().subscribe(res =>{
    this.categoryList = res;
  })
}
  getCategoryName(){
    return this.categoryList.find(x=>x.id == this.blog?.categoryId)?.name
  }
}
