import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { blogService } from './blogService.service';
import { MatCardModule } from '@angular/material/card';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [MatCardModule, TablerIconsModule, MatChipsModule],
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class AppBlogsComponent implements OnInit {
  constructor(public router: Router, public blogService: blogService) {}
  selectBlog(b: string) {
    this.blogService.detailId = b;
    this.router.navigate(['apps/blog/detail', b]);
  }

  ngOnInit(): void {
    if (this.blogService.blogPosts.length === 0) {
      this.blogService
        .getBlog()
        .subscribe((d: any) => (this.blogService.blogPosts = d));
    }
  }
  // filterFeaturedPost = this.blogPosts.filter(function (item) {
  //   return item.featuredPost == true;
  // });
  // filterBasicPost = this.blogPosts.filter(function (item) {
  //   return item.featuredPost == false;
  // });
}
