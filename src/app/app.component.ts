import { Component } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  // url = "https://jsonplaceholder.typicode.com/photos";
  // photos: any[] = [];
  // constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   this.http.get(this.url).subscribe((res: any[]) => {
  //     console.log("print res: ", res);
  //     this.photos = res;
  //   });
  // }
}
