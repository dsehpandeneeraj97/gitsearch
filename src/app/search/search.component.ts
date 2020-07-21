import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchQuery:string;
  constructor(private api:ApiService,private router:RouterService) { }

  ngOnInit(): void {
  }
  searchRepo(){
    this.api.getSearchApi(this.searchQuery).subscribe(
      (res)=>{
        this.api.searchResult=res;
        this.router.routeToSearchView();
        console.log(res);
      }
    );
  }

}
