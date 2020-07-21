import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchview',
  templateUrl: './searchview.component.html',
  styleUrls: ['./searchview.component.css']
})
export class SearchviewComponent implements OnInit {
  repoList;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.repoList=this.api.searchResult;
  }

}
