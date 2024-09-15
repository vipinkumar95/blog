import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Blog } from '../../types/blog';

@Component({
  selector: 'app-blogcard',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,RouterLink],
  templateUrl: './blogcard.component.html',
  styleUrl: './blogcard.component.css'
})
export class BlogcardComponent {
  @Input()blog!:Blog;
}
