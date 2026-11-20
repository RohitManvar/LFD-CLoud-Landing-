/**
 * Central Configuration for LFD Cloud Pricing Plans
 * Single source of truth for all tiers, features, limits, and notes.
 */

export const PRICING_CONFIG = {
  annualDiscountPercent: 20,
  taxNotice: 'All prices are proposed monthly subscription prices in USD. Applicable taxes and commercial terms may vary.',
  consultantNotice: 'Consultant-led activities in Steps 6, 7, 8 and 10B are available through separately scoped consulting engagements for standard plans. Enterprise consulting is agreed as part of the project scope.',
  
  currencies: {
    USD: { symbol: '$', code: 'USD' },
    INR: { symbol: '₹', code: 'INR' }
  },

  plans: [
    {
      id: 'free',
      name: 'Free',
      badge: null,
      description: 'For exploring LFD Cloud and Lean Transformation.',
      monthlyPrice: 0,
      annualPriceMonthly: 0,
      pricing: {
        USD: { monthly: 0, annualMonthly: 0 },
        INR: { monthly: 0, annualMonthly: 0 }
      },
      isCustom: false,
      popular: false,
      ctaText: 'Start for Free',
      ctaVariant: 'secondary',
      limits: {
        users: '1 user',
        projects: '1 active transformation project',
        aiAllowance: '5 AI credits/month',
        exports: 'Standard PDF export'
      },
      features: [
        '1 user',
        '1 active transformation project',
        'Basic PPQ',
        'Basic Value Stream Identification',
        'AI-powered Current State VSM',
        'Basic Flow Management',
        'Basic FSPlanner',
        '5 AI credits/month',
        'Project Plan',
        'Standard PDF export'
      ]
    },
    {
      id: 'small-business',
      name: 'Small Business',
      badge: null,
      description: 'For small manufacturing businesses starting Lean Transformation.',
      monthlyPrice: 99,
      annualPriceMonthly: 79,
      pricing: {
        USD: { monthly: 99, annualMonthly: 79 },
        INR: { monthly: 7999, annualMonthly: 6399 }
      },
      isCustom: false,
      popular: false,
      ctaText: 'Choose Small Business',
      ctaVariant: 'secondary',
      limits: {
        users: 'Up to 3 users',
        projects: '2 active transformation projects',
        aiAllowance: '100 AI credits/month',
        exports: 'PDF and Excel exports'
      },
      features: [
        'Up to 3 users',
        '2 active transformation projects',
        'Complete PPQ',
        'AI Value Stream Identification',
        'Value Stream Mapping',
        'Flow Management (Spaghetti)',
        'Supply Chain Design',
        'Flow Supermarket Design',
        'Material Handling Design',
        'Layout Design',
        'Visual Management Guidelines',
        'Risk Assessment',
        'Project Plan',
        '100 AI credits/month',
        'PDF and Excel exports',
        'Standard support'
      ]
    },
    {
      id: 'mid-size',
      name: 'Mid-Size Business',
      badge: 'Recommended',
      description: 'For growing manufacturing companies managing multiple transformation projects.',
      monthlyPrice: 249,
      annualPriceMonthly: 199,
      pricing: {
        USD: { monthly: 249, annualMonthly: 199 },
        INR: { monthly: 19999, annualMonthly: 15999 }
      },
      isCustom: false,
      popular: true,
      ctaText: 'Choose Mid-Size Business',
      ctaVariant: 'primary',
      limits: {
        users: 'Up to 10 users',
        projects: '3 active transformation projects',
        aiAllowance: '500 AI credits/month',
        exports: 'Reports and presentations'
      },
      features: [
        'Up to 10 users',
        '3 active transformation projects',
        'Everything in Small Business',
        '500 AI credits/month',
        'Advanced AI analysis and recommendations',
        'AI improvement refinement',
        'All 11 software-enabled steps',
        'Team collaboration',
        'Shared improvement plans',
        'Project tracking',
        'Reports and presentations',
        'Organization dashboard',
        'Role-based access control'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      badge: null,
      description: 'For large organizations seeking complete Lean Transformation.',
      monthlyPrice: null,
      annualPriceMonthly: null,
      isCustom: true,
      customPriceLabel: 'Custom Pricing',
      popular: false,
      ctaText: 'Contact Sales',
      ctaVariant: 'outline',
      limits: {
        users: 'Custom user allocation',
        projects: 'Unlimited or custom limits',
        aiAllowance: 'Custom AI allocation',
        exports: 'Enterprise support and SLA'
      },
      features: [
        'Custom user allocation',
        'Unlimited or custom project limits',
        'Custom AI credit allocation',
        'All 11 software-enabled steps',
        'All 15 Lean Transformation steps',
        'Dedicated Faber Infinite consultant',
        'Capacity Planning and Ramp-up Plan',
        'Equipment Planning Guidelines',
        'Manpower Planning Guidelines',
        'Line Side Design',
        'Multi-site transformation management',
        'Dedicated onboarding and training',
        'Enterprise support and SLA'
      ]
    }
  ]
};

export const formatPrice = (price, currency = 'USD') => {
  if (price === 0) return '0';
  if (!price && price !== 0) return '';
  if (currency === 'INR') {
    return price.toLocaleString('en-IN');
  }
  return price.toLocaleString('en-US');
};

export const getCurrencySymbol = (currency = 'USD') => {
  return currency === 'INR' ? '₹' : '$';
};
