import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  private readonly phoneNumber = '59170016141';
  private readonly defaultMessage = 'Hola, quisiera agendar una cita. ¿Qué horarios tiene disponibles?';

  getLink(customMessage?: string): string {
    const message = customMessage || this.defaultMessage;
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(message)}`;
  }
}
