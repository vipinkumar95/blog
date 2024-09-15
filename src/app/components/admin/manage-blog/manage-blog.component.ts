import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Blog } from '../../../types/blog';
import { BlogService } from '../../../blog.service';
import { Category } from '../../../types/Category';
import {MatButtonModule} from '@angular/material/button';
import { CategoryService } from '../../../category.service';

@Component({
  selector: 'app-manage-blog',
  standalone: true,
  imports: [MatTableModule,RouterLink,MatPaginator,MatSort,MatInputModule,MatButtonModule,RouterLink],
  templateUrl: './manage-blog.component.html',
  styleUrl: './manage-blog.component.css'
})
export class ManageBlogComponent {
  displayedColumns: string[] = ['title', 'categoryId','action'];
  dataSource: MatTableDataSource<Blog>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
     this.dataSource = new MatTableDataSource(this.blogs);
  }

  blogs:Blog[]=[];
  blogService = inject(BlogService);
  categoryService = inject(CategoryService);
  categoryList:Category[]=[];
  ngOnInit(){
    this.blogService.getAllblogs().subscribe(res =>{
      this.blogs =res;
      this.dataSource.data=this.blogs;
    });
    this.categoryService.getCategoryList().subscribe(res=>{
      this.categoryList = res;
    })
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getCategoryName(data:Blog){
    return this.categoryList.find(x =>x.id == data.categoryId)?.name;
  }

  deleteBlog(data:Blog){
    console.log(data.id);
    this.blogService.deleteBlog(data.id).subscribe(()=>{
      this.dataSource.data=this.blogs.filter(x=>x.id!=data.id);
    })
  }
}
