import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'fecha'
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return 'Fecha no disponible';

    const date = moment(value);
    const now = moment();
    
    const secondsAgo = now.diff(date, 'seconds');
    const minutesAgo = now.diff(date, 'minutes');
    const hoursAgo = now.diff(date, 'hours');
    const daysAgo = now.diff(date, 'days');

    if (daysAgo >= 1) {
      if (daysAgo === 1) {
        return 'Hace 1 día';
      } else {
        return `Hace ${daysAgo} días`;
      }
    } else if (hoursAgo >= 1) {
      if (hoursAgo === 1) {
        return 'Hace 1 hora';
      } else {
        return `Hace ${hoursAgo} horas`;
      }
    } else if (minutesAgo >= 1) {
      if (minutesAgo === 1) {
        return 'Hace 1 minuto';
      } else {
        return `Hace ${minutesAgo} minutos`;
      }
    } else {
      if (secondsAgo === 1) {
        return 'Hace 1 segundo';
      } else {
        return `Hace ${secondsAgo} segundos`;
      }
    }
  }
}
