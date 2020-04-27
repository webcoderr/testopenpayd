import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap } from "rxjs/operators";
import { LaunchDetailsGQL } from "../services/spacexGraphql.service";

@Component({
  selector: "app-launch-details",
  templateUrl: "./launch-details.component.html",
  styleUrls: ["./launch-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent {
  imageIndex: number;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly launchDetailsService: LaunchDetailsGQL
  ) {
    this.imageIndex = 0;
  }

  launchDetails$ = this.route.paramMap.pipe(
    map(params => params.get("id") as string),
    switchMap(id => this.launchDetailsService.fetch({ id })),
    map(res => res.data.launch)
  );

  changeImage(index: number): void {
    this.imageIndex = index;
  }

  slideImage(index: number, position: string): void {
    if (position === 'forward') {
      if(index < 2) this.imageIndex++;
    } else {
      if(index > 0) this.imageIndex--;
    }
  }

}
