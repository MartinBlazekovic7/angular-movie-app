import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/modules/shared/other/services/loader.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  constructor(private loaderService: LoaderService) {}
  ngOnInit(): void {
    this.loaderService.show();
    setInterval(() => {
      this.loaderService.hide();
    }, 1200);
  }
}
