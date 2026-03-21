import { SERVICE_DETAILS, FAQ_ITEMS } from '@/content';
import type { ServiceDetail, FaqItem } from '@/types';

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICE_DETAILS.find((s) => s.id === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICE_DETAILS.map((s) => s.id);
}

export function getFaqsForService(serviceId: string): FaqItem[] {
  return FAQ_ITEMS.filter((item) => item.serviceId === serviceId);
}
