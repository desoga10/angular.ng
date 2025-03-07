import { Component, OnInit } from '@angular/core';
import { blogService } from '../blogService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    TablerIconsModule,
    MatDividerModule,
    MatFormFieldModule, MatInputModule, MatButtonModule
  ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class AppBlogDetailsComponent implements OnInit {
  title: any;
  blogDetail: any = null;

  istoggleReply = true;

  toggleReply() {
    this.istoggleReply = !this.istoggleReply;
  }
  activeRoute: any = this.router.url.split('/').pop();

  constructor(
    public router: Router,
    activatedRouter: ActivatedRoute,
    public blogService: blogService
  ) {
    this.title = activatedRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if (this.blogService.blogPosts.length === 0) {
      this.blogService
        .getBlog()
        .subscribe((d: any) => (this.blogService.blogPosts = d));
    }

    this.blogDetail = this.blogService.blogPosts.filter(
      (x) => x.title === this.title
    );
    console.log(this.blogDetail);
  }
}
