import { Component, inject, OnInit, signal } from '@angular/core';
import { Contributor, ContributorsService } from './contributors.service';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-contributors',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './contributors.component.html',
})
export class ContributorsComponent implements OnInit {

  private readonly contributorsService = inject(ContributorsService);
  contributors = signal<Contributor[]>([]);
  isLoadingContributors = signal(true);
  contributorsLoadFailed = signal(false);

  ngOnInit(): void {
    this.getContributors();
  }

  getContributors(): void {
    this.isLoadingContributors.set(true);
    // Reset the error state before attempting a new request.
    this.contributorsLoadFailed.set(false);

    this.contributorsService.getContributors().subscribe({
      next: (contributors) => {
        this.contributors.set(contributors);
        this.isLoadingContributors.set(false);
      },
      error: () => {
        // Display an empty list so the UI doesn't show stale data after a failed request.
        this.contributors.set([]);
        this.isLoadingContributors.set(false);
        this.contributorsLoadFailed.set(true);
      },
    });
  }
}
