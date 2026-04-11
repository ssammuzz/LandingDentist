import { Component, signal, computed, inject } from '@angular/core';
import { ClinicConfig } from '../../models/clinic-config.model';
import { DentalService } from '../../models/dental-service.model';
import { Testimonial } from '../../models/testimonial.model';
import { WhatsappService } from '../../services/whatsapp.service';

// Importación de componentes hijos
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Services } from '../../components/services/services';
import { Testimonials } from '../../components/testimonials/testimonials';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Hero, About, Services, Testimonials, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private readonly whatsappService = inject(WhatsappService);

  protected readonly config = signal<ClinicConfig>({
    brand: {
      name: 'Consultorio Dental',
      doctor: 'Dra. Eydi Zabala',
      fullName: 'Dra. Eydi Zabala Vargas'
    },
    contact: {
      phone: '+591 70016141',
      whatsapp: '59170016141',
      email: 'contacto@eydizabala.com',
      address: 'Santa Cruz de la Sierra, Bolivia'
    },
    schedule: {
      weekdays: '8:00 AM – 18:00 PM',
      saturdays: '9:00 AM – 13:00 PM'
    }
  });

  protected readonly services = signal<DentalService[]>([
    { id: 'endo', title: 'ENDODONCIA', description: 'Tratamientos de conductos avanzados para salvar piezas dentales dañadas.', iconType: 'microscope', image: 'endodoncia.png' },
    { id: 'orto', title: 'ORTODONCIA', description: 'Alineación dental estética y funcional para niños y adultos.', iconType: 'ruler', image: 'ortodoncia.png' },
    { id: 'perio', title: 'PERIODONCIA', description: 'Cuidado especializado de las encías y los tejidos de soporte.', iconType: 'gum', image: 'periodoncia.png' },
    { id: 'extrac', title: 'EXTRACCIONES DENTALES', description: 'Procedimientos quirúrgicos seguros y mínimamente invasivos.', iconType: 'tooth-out', image: 'extraccionesdentales.png' },
    { id: 'profi', title: 'PROFILAXIS DENTAL', description: 'Limpieza profunda profesional para una salud oral óptima.', iconType: 'sparkle', image: 'profilaxisdental.png' },
    { id: 'pediatria', title: 'ODONTOPEDIATRÍA', description: 'Atención dental integral para los más pequeños.', iconType: 'child', image: 'odontopediatria.png' },
    { id: 'implantes', title: 'IMPLANTES', description: 'Reposición de dientes perdidos con tecnología de titanio.', iconType: 'implant', image: 'IMPLANTES.png' },
    { id: 'protesis', title: 'PRÓTESIS FIJA Y REMOVIBLE', description: 'Rehabilitación oral mediante puentes y coronas personalizadas.', iconType: 'bridge', image: 'protesisfijayremovible.png' },
    { id: 'blanquea', title: 'BLANQUEAMIENTO', description: 'Tratamientos aclaradores para una sonrisa radiante.', iconType: 'star', image: 'BLANQUEAMIENTO.png' },
    { id: 'carillas', title: 'CARILLAS DE PORCELANA Y RESINA', description: 'Diseño de sonrisa personalizado para resultados estéticos.', iconType: 'veneer', image: 'CARILLASDEPORCELANAYRESINA.png' }
  ]);

  protected readonly testimonials = signal<Testimonial[]>([
    { name: 'Ricardo Mendez', comment: 'La atención de la Dra. Eydi es excepcional. Me devolvió la confianza al sonreír.', rating: 5 },
    { name: 'Claudia Justiniano', comment: 'Excelente profesional y un trato humano increíble. El ambiente es impecable.', rating: 5 },
    { name: 'Jorge Vaca', comment: 'Mis hijos están encantados con la Dra. Eydi. La mejor odontóloga de Santa Cruz.', rating: 5 }
  ]);

  protected readonly waLink = computed(() => this.whatsappService.getLink());
}
