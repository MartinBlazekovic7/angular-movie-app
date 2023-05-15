import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchResults } from 'src/app/modules/shared/other/model/search.model';
import { SearchService } from 'src/app/modules/shared/other/services/search.service';
import { LoaderService } from 'src/app/modules/shared/other/services/loader.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  query: string = '';
  results: SearchResults[] = [];

  constructor(
    private searchService: SearchService,
    private loaderService: LoaderService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loaderService.show();
    this.route.queryParams.subscribe((params) => {
      const searchParam = params['search'];
      if (searchParam) {
        this.searchForm = new FormGroup({
          searchTerm: new FormControl(searchParam, null),
        });
        this.searchResultsTyping();
      } else {
        this.searchForm = new FormGroup({
          searchTerm: new FormControl('', null),
        });
      }
    });
    setInterval(() => {
      this.loaderService.hide();
    }, 1200);
  }

  searchResults() {
    this.query = this.searchForm.value.searchTerm.replace(' ', '%');
    console.log(this.query);
    this.searchService.getResults(this.query).subscribe((response) => {
      this.results = response.results;
      console.log(this.results);
    });
  }

  searchResultsTyping() {
    if (this.searchForm.value.searchTerm.length >= 3) {
      this.searchService
        .getResults(this.searchForm.value.searchTerm.replace(' ', '%'))
        .subscribe((response) => {
          this.results = response.results;
          const queryParams = { search: this.searchForm.value.searchTerm };
          this.router.navigate([], {
            queryParams,
            queryParamsHandling: 'merge',
          });
        });
    } else {
      this.results = [];
    }
  }
}
