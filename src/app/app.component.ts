import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { AppService } from './app.service';
import { ARTIST_QUERY } from './graphql/artistQuery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['cover', 'title', 'date', 'status'];
  artist: any;
  loading = true;
  error: any;
  searchForm: FormGroup;
  searchText = new FormControl('', Validators.required);

  constructor(
    private apollo: Apollo,
    private fb: FormBuilder,
    private appService: AppService,
  ) {
    this.searchForm = fb.group({
      searchText: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Pre-populate table with my personal favourite artist...
    this.getData('Matt Corby');
  }

  onSearch() {
    this.loading = true;
    this.getData(this.searchForm.value.searchText);
  }

  getData(artistName: String) {
    this.apollo
      .watchQuery({
        query: ARTIST_QUERY,
        variables: {
          name: artistName,
        },
      })
      .valueChanges.subscribe((result: any) => {
        try {
          this.appService.emitData(
            result.data && result.data.search.artists.edges[0].node,
          );
          this.loading = result.loading;
          this.error = result.error;
        } catch (e) {
          this.error = 'Error retrieving data!';
        }
      });
  }
}
