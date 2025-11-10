import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ReflectionService {
  private _counter = signal(0);
  counter = this._counter.asReadonly();

  increment() {
    const current = this._counter();
    this._counter.set(current + 1);
    console.log('Reflection visits:', this._counter());
  }

  getCount(): number {
    return this._counter();
  }
}
