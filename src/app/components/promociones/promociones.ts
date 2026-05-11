import { Component, Input, signal } from '@angular/core';
import { Promotion } from '../../models/promotion.model';

@Component({
  selector: 'app-promociones',
  standalone: true,
  templateUrl: './promociones.html',
  styleUrl: './promociones.css'
})
export class Promociones {
  @Input() waLink!: string;

  /**
   * ESTRATEGIA DE PRECIOS: EFECTO SEÑUELO
   * Se presentan dos opciones donde la Opción 2 ofrece un valor significativamente 
   * superior (incluye limpieza) por una diferencia de precio mínima (solo 30 Bs más), 
   * haciendo que la Opción 1 actúe como "señuelo" para empujar al usuario hacia la más rentable.
   */
  protected readonly promotions = signal<Promotion[]>([
    {
      id: 'solo-eval',
      title: 'Solo Evaluación',
      subtitle: 'Opción 1',
      description: 'Valoración de ortodoncia con diagnóstico personalizado.',
      originalPrice: 250,
      finalPrice: 120,
      features: [
        'Revisión de alineación dental y mordida',
        'Orientación profesional sobre el tratamiento ideal',
        'Diagnóstico personalizado'
      ],
      isPopular: false,
      ctaText: 'Quiero la evaluación por 120 Bs',
      ctaWhatsappMessage: 'Hola, vengo de la web. Quiero agendar la EVALUACIÓN DE ORTODONCIA por 120 Bs (Opción 1).'
    },
    {
      id: 'eval-limpieza',
      title: 'Evaluación + Limpieza 🦷',
      subtitle: 'MÁS POPULAR',
      description: 'Todo lo de la evaluación más una limpieza dental profesional. Empiezas con una boca impecable.',
      originalPrice: 420,
      finalPrice: 150,
      features: [
        'Evaluación completa de ortodoncia',
        'Revisión de alineación y mordida',
        'Orientación profesional sobre tu tratamiento',
        'Limpieza dental preventiva profesional'
      ],
      isPopular: true,
      ctaText: 'Quiero el combo completo',
      ctaWhatsappMessage: 'Hola, vengo de la web. Quiero agendar el COMBO EVALUACIÓN + LIMPIEZA por 150 Bs (Opción 2).'
    }
  ]);

  goToWhatsApp(promo: Promotion): void {
    // Extraemos el número base del waLink (asumiendo formato https://wa.me/NUMBER?...)
    const phoneMatch = this.waLink.match(/wa\.me\/(\d+)/);
    const phone = phoneMatch ? phoneMatch[1] : '59170016141';
    const message = encodeURIComponent(promo.ctaWhatsappMessage);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  }
}
