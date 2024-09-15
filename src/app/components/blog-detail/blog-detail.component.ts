import { Component, inject, Inject } from '@angular/core';
import { BlogcardComponent } from '../blogcard/blogcard.component';
import { Blog } from '../../types/blog';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [BlogcardComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
  allblogs!:Blog[];
  //blogService=inject(BlogService);

  blogService = inject(BlogService);

  ngOnInit(){
    this.blogService.getAllblogs().subscribe(result=>{
      this.allblogs=result;
    })
  }
}
