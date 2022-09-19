import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"]
})
export class PhotosComponent {
  url = "https://jsonplaceholder.typicode.com/photos";
  photos: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe((res: any[]) => {
      console.log("print res: ", res);
      this.photos = res;
    });
  }
}
