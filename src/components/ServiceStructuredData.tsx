import { CONTACT_INFO, SERVICE_AREAS, SITE_INFO } from '@/content';
import type { ServiceDetail, FaqItem } from '@/types';

interface ServiceStructuredDataProps {
  service: ServiceDetail;
  faqs: FaqItem[];
}

export function ServiceStructuredData({ service, faqs }: ServiceStructuredDataProps) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: SITE_INFO.name,
      telephone: CONTACT_INFO.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '710 Parker St',
        addressLocality: 'Langhorne',
        addressRegion: 'PA',
        postalCode: '19047',
        addressCountry: 'US',
      },
    },
    areaServed: SERVICE_AREAS.slice(0, -1).map((area) => ({
      '@type': 'City',
      name: area,
    })),
    url: `https://scottromconstruction.com/services/${service.id}`,
  };

  const faqSchema =
    faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
