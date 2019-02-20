import { Component, ViewChild } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


import "ag-grid-enterprise";
import { Options } from "selenium-webdriver";

@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private autoGroupColumnDef;
  private defaultColDef;
  private rowSelection;
  private rowGroupPanelShow;
  private pivotPanelShow;
  private paginationPageSize;
  private paginationNumberFormatter;
  private rowData: any;
  private overlayLoadingTemplate="";
  private overlayNoRowsTemplate="";
private URL="";

  constructor(private http: HttpClient) {
    this.overlayLoadingTemplate ='<span class="ag-overlay-loading-center">Please wait while your rows are loading</span>';
  this.overlayNoRowsTemplate = "<span style=\"padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;\">This is a custom 'no rows' overlay</span>";

  
    this.columnDefs = [
      {
        headerName: "Movie Title",
        field: "movie_title",
        filter: 'agTextColumnFilter',
             
      },
      {
        headerName: "Director Name",
        field: "director_name",
        width: 120,
       filter: 'agTextColumnFilter',
      },
      {
        headerName: "Actor Name1",
        field: "actor_1_name",
        width: 120,
       filter: 'agTextColumnFilter',
      },
      {
        headerName: "Actor Name2",
        field: "actor_2_name",
        width: 120,
       filter: 'agTextColumnFilter',
      },
      {
        headerName: "Genres",
        field: "genres",
        width: 150,
       filter: 'agTextColumnFilter',
      },
      {
        headerName: "Language",
        field: "language",
        width: 100,
       filter: 'agTextColumnFilter',
      },
      {
        headerName: "Country",
        field: "country",
        width: 90,
       filter: 'agTextColumnFilter',
      },
      {
        headerName: "Rating",
        field: "content_rating",
        width: 80,
       filter: 'agTextColumnFilter',
      },
      {
        headerName: "Budget",
        field: "budget",
        width: 90,
       filter: 'agTextColumnFilter',
      },
      {
        headerName: "Year",
        field: "title_year",
        width: 80,
       filter: 'agTextColumnFilter',
      },
      {
        headerName: "Keywords",
        field: "plot_keywords",
        width: 120,
       filter: 'agTextColumnFilter',
      },
      {
        headerName: "Link",
        field: "movie_imdb_link",
        width: 80,
       filter: 'agTextColumnFilter',
       
      }

    ];
    this.autoGroupColumnDef = {
      headerName: "Group",
      width: 200,
      field: "athlete",
      valueGetter: function(params) {
        if (params.node.group) {
          return params.node.key;
        } else {
          return params.data[params.colDef.field];
        }
      },
      headerCheckboxSelection: true,
      cellRenderer: "agGroupCellRenderer",
      cellRendererParams: { checkbox: true }
    };
    this.defaultColDef = {
      //editable: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: true,
      filter: true
    };
    //this.rowSelection = "multiple";
    this.rowGroupPanelShow = "always";
    this.pivotPanelShow = "always";
    this.paginationPageSize = 10;
    this.paginationNumberFormatter = function(params) {
      return "[" + params.value.toLocaleString() + "]";
    };
  }

  onPageSizeChanged(newPageSize) {
    
    this.gridApi.paginationSetPageSize(Number(this.paginationPageSize));
  }

  

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    //this.URL="http://starlord.hackerearth.com/movies";
    this.URL="/api";
    
    this.http.get(this.URL,{
        headers: {'Content-Type':'application/json; charset=utf-8','Access-Control-Allow-Origin':'*'}})
      .subscribe(data => {
        this.rowData = data;
        params.api.paginationGoToPage(4);
      });
  }
}
