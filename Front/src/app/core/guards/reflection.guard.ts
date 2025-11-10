import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ReflectionService } from '../services/reflection.service';

export const reflectionGuard: CanActivateFn = () => {
  const reflectionService = inject(ReflectionService);
  const router = inject(Router);

  const count = reflectionService.getCount();

  console.log('ReflectionGuard — contador actual:', count);

  if (count >= 20) {
    alert('Acceso bloqueado: el contador superó el límite (20).');
    router.navigate(['/']);
    return false;
  }

  return true;
};
