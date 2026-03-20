import type { ComparisonPoint, ReviewTheme, Testimonial } from '@/types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      "Scott is without a doubt the best all around contractor I've come across from framing to finish work, masonry the list goes on. Many contractors claim to treat your house like their own but Scott truly does treat every house like it's his own.",
    author: 'Josh Sharpe',
    location: 'Facebook Recommendation',
    stars: 5,
    highlight: 'Treats every home like his own',
    concern: 'For homeowners worried about workmanship and trust inside their home.',
    sourceLabel: 'Facebook Recommendation',
    sourceDetail:
      'Public recommendation highlighting craftsmanship, trust, and respect for the home.',
  },
  {
    id: 't2',
    quote: "Love Scott's work!",
    author: 'Tom Aquilone',
    location: 'Facebook Recommendation',
    stars: 5,
    highlight: 'Work that stands out right away',
    concern: 'A quick endorsement of the finished result and overall quality.',
    sourceLabel: 'Facebook Recommendation',
    sourceDetail:
      'Short public recommendation focused on the visible quality of the finished work.',
  },
  {
    id: 't3',
    quote: 'I know who to call when I do my master bath!',
    author: 'Kelley Graff McConnell',
    location: 'Facebook Recommendation',
    stars: 5,
    highlight: 'The kind of work people remember for their own project',
    concern: 'Signals confidence strong enough to earn future renovation calls.',
    sourceLabel: 'Facebook Recommendation',
    sourceDetail:
      'A recommendation that shows the work is strong enough to drive future project interest.',
  },
  {
    id: 't4',
    quote: 'Beautiful work. Wow!',
    author: 'Maria Anderson',
    location: 'Facebook Recommendation',
    stars: 5,
    highlight: 'Beautiful finished spaces',
    concern: 'Reinforces the visual impact homeowners want from a remodel.',
    sourceLabel: 'Facebook Recommendation',
    sourceDetail:
      'Public recommendation centered on the finished look and homeowner reaction.',
  },
];

export const WHY_HOMEOWNERS_CHOOSE_SCOTT: ComparisonPoint[] = [
  {
    id: 'owner-involved',
    title: 'Owner involvement',
    scottApproach:
      'The same person estimating the work stays connected through the job and final walkthrough.',
    homeownerConcern: 'Homeowners often worry about being handed off after the first call.',
  },
  {
    id: 'clear-fit',
    title: 'Project fit upfront',
    scottApproach:
      'Town, timing, and budget expectations are discussed early so both sides can move forward clearly.',
    homeownerConcern:
      'Many estimate requests drag on before anyone confirms whether the project is a fit.',
  },
  {
    id: 'craftsmanship-trust',
    title: 'Craftsmanship you can feel confident in',
    scottApproach:
      'Recommendations repeatedly point to detail-oriented work and respect for the home.',
    homeownerConcern:
      'Homeowners want more than promises when inviting a contractor into lived-in spaces.',
  },
];

export const REVIEW_THEMES: ReviewTheme[] = [
  {
    id: 'trust',
    title: 'Trust inside the home',
    description:
      'The strongest recommendation specifically says Scott treats each home like his own, which addresses one of the biggest homeowner concerns before a remodel starts.',
  },
  {
    id: 'craftsmanship',
    title: 'Visible craftsmanship',
    description:
      'Multiple recommendations react to the finished work itself, which helps confirm that the quality is noticeable, not just promised in the estimate stage.',
  },
  {
    id: 'future-intent',
    title: 'Work that earns future calls',
    description:
      'One recommendation is effectively a future booking signal, showing the kind of confidence that makes homeowners keep Scott in mind for their next project.',
  },
];
