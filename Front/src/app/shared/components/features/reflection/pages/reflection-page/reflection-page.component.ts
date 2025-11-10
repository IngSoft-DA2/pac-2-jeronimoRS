import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReflectionService } from '../../../../../../core/services/reflection.service';
@Component({
  selector: 'app-reflection-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reflection-page.component.html',
  styleUrl: './reflection-page.component.css'
})
export class ReflectionPageComponent {
  constructor(private reflectionService: ReflectionService) {}

  ngOnInit(): void {
    this.reflectionService.increment();
  }
}
