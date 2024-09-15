import { Component, inject } from '@angular/core';
import { BlogService } from '../../blog.service';
import { Blog } from '../../types/blog';
import { RouterLink } from '@angular/router';
import { BlogcardComponent } from '../blogcard/blogcard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,BlogcardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  blogservice = inject(BlogService);
  featuredBlogs!:Blog[];
  ngOnInit(){
    this.blogservice.getFeaturedBlogs().subscribe((res)=>{
      this.featuredBlogs = res;
    })
  }
}
