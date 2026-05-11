export interface Promotion {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  originalPrice: number;
  finalPrice: number;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaWhatsappMessage: string;
}
