import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Blog } from './types/blog';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  http = inject(HttpClient)

  constructor() {

   }

   getFeaturedBlogs(){
      return this.http.get<Blog[]>("https://localhost:44366/api/Blog")
   }

   getAllblogs(){
    return this.http.get<Blog[]>("https://localhost:44366/api/Blog")
   }

   getAllblogsbyid(id:number){
    return this.http.get<Blog>("https://localhost:44366/api/Blog/"+ id)
   }

   deleteBlog(id:number){
    return this.http.delete("https://localhost:44366/api/Blog/"+ id)
   }

   addblog(blog:Blog){
    return this.http.post("https://localhost:44366/api/Blog",blog)
   }

   updateblog(id:number,blog:Blog){
    return this.http.put("https://localhost:44366/api/Blog/"+id,blog)
   }
}

