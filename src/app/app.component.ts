import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Article {
  id: number;
  title: string;
  source: string;
  date: string;
  selected: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[] = [
    { id: 1, title: 'Mayor Adams Proposes $112B Budget With Cuts to Social Services', source: 'The City', date: '2026-02-09', selected: false },
    { id: 2, title: 'City Council Pushes Back on Zoning Reform Package', source: 'City & State', date: '2026-02-08', selected: false },
    { id: 3, title: 'MTA Capital Plan Faces Federal Funding Uncertainty', source: 'The City', date: '2026-02-07', selected: false },
    { id: 4, title: 'Comptroller Report Flags Delays in Affordable Housing Pipeline', source: 'City & State', date: '2026-02-06', selected: false },
    { id: 5, title: 'NYPD Oversight Board Recommends Expanded Use-of-Force Reporting', source: 'The City', date: '2026-02-05', selected: false },
    { id: 6, title: 'NYC Seeks Vendors for Citywide IT Modernization Initiative', source: 'City & State', date: '2026-02-04', selected: false },
    { id: 7, title: 'Congestion Pricing Revenue Falls Short of Projections in First Month', source: 'The City', date: '2026-02-03', selected: false },
    { id: 8, title: 'City Launches Major Technology Modernization Program Across Agencies', source: 'City & State', date: '2026-02-02', selected: false },
    { id: 9, title: 'Council Hearing Examines Technology Gaps in Public Housing Management', source: 'The City', date: '2026-02-01', selected: false },
    { id: 10, title: 'OTI Chief Outlines Modernization Roadmap for City Technology Systems', source: 'City & State', date: '2026-01-30', selected: false }
  ];

  keywords: string[] = [];

  get selectedCount(): number {
    return this.articles.filter(a => a.selected).length;
  }

  toggleArticle(article: Article): void {
    article.selected = !article.selected;
    this.updateKeywords();
  }

  private updateKeywords(): void {
    const selectedArticles = this.articles.filter(a => a.selected);

    // Extract keywords from selected articles (simple keyword extraction)
    const allKeywords = new Set<string>();
    selectedArticles.forEach(article => {
      const words = article.title.toLowerCase().split(' ');
      words.forEach(word => {
        if (word.length > 5 && !['social', 'services', 'report'].includes(word)) {
          allKeywords.add(word);
        }
      });
    });

    this.keywords = Array.from(allKeywords).slice(0, 10);
  }
}
