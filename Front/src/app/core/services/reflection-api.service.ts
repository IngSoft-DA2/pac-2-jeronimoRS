import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ReflectionApiService {
  private apiUrl = 'http://localhost:5248/api/reflection/importers';

  importers = signal<string[]>([]);
  isLoading = signal(false);
  error = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  loadImporters() {
    this.isLoading.set(true);
    this.error.set(null);

    this.http.get<string[]>(this.apiUrl).subscribe({
      next: (dlls) => {
        this.importers.set(dlls);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error al traer importers:', err);
        this.error.set('No se pudieron cargar las DLL.');
        this.isLoading.set(false);
      }
    });
  }
}
