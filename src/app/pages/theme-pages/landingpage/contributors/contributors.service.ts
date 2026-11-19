
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';

interface GitHubContributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export interface Contributor {
  id: number;
  name: string;
  imgSrc: string;
  profileUrl: string;
  contributions: number;
}

@Injectable({
  providedIn: 'root',
})
export class ContributorsService {
  private http = inject(HttpClient);
  private readonly CONTRIBUTORS_URL =
    'https://api.github.com/repos/desoga10/angular.ng/contributors';

  private contributors$ = this.http.get<GitHubContributor[]>(this.CONTRIBUTORS_URL).pipe(
    map(contributors =>
      contributors.map(contributor => ({
        id: contributor.id,
        name: contributor.login,
        imgSrc: contributor.avatar_url,
        profileUrl: contributor.html_url,
        contributions: contributor.contributions,
      }))
    ),
    shareReplay({
      bufferSize: 1,
      refCount: false
    })
  )

  getContributors(): Observable<Contributor[]> {
    return this.contributors$;
  }
}
