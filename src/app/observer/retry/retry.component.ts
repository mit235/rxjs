import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, retry, retryWhen, scan, tap } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css'],
})
export class RetryComponent {
  person: any;
  loading: boolean = false;
  userNo: any = 1;
  status: string = 'No Data';
  constructor(private http: HttpClient) {}

  fetchData() {
    this.loading = true;
    this.http
      .get(`https://dummyjson.com/users/${this.userNo}`)
      .pipe(
        // retry(5)
        retryWhen((error) =>
          error.pipe(
            delay(3000),
            scan((retryCount:any) => {
              if (retryCount > 5) {
                throw error;
              } else {
                retryCount=retryCount+1;
                console.log('retry count=>',retryCount);
                this.status='attemp-'+retryCount
                return retryCount;
              }
            },0)
          )
        )
      )
      .subscribe(
        (res) => {
          this.person = res;
          console.warn(this.person);
          this.loading = false;
          this.status = 'Data fetched successfully';
          this.userNo++;
        },
        (error) => {
          console.warn('error', error);
          this.loading = false;
          this.status = 'problem Occured';
        }
      );
  }
}
