import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReflectionService } from '../../../../../../core/services/reflection.service';
import {ReflectionApiService} from '../../../../../../core/services/reflection-api.service';
@Component({
  selector: 'app-reflection-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reflection-page.component.html',
  styleUrl: './reflection-page.component.css'
})
export class ReflectionPageComponent implements OnInit {
  constructor(private reflectionService: ReflectionService, public api: ReflectionApiService) {}

  ngOnInit(): void {
    this.reflectionService.increment();
  }

  onLoadImporters() {
    this.api.loadImporters();
  }
}
