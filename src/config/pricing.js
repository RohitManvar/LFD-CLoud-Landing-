/**
 * Central Configuration for LFD Cloud Pricing Plans
 * Single source of truth for all tiers, features, limits, and commercial policies.
 * Aligned with LFD Cloud - Subscription & Commercial Pricing Proposal (Management Review).
 */

export const PRICING_CONFIG = {
  // Billing cycles: monthly, or quarterly (prepaid per quarter at a lower effective rate).
  // Per-year comparison — LFD Core: $1,788 monthly vs $1,700 quarterly; LFD Signature: $4,788 monthly vs $4,596 quarterly.
  taxNotice: 'All prices are in USD. Applicable taxes are additional.',
  consultantNotice: 'Consulting-supported activities in Steps 6, 7, 8 and 10B are available through Faber Infinite consulting as part of LFD Enterprise engagements. LFD Core & LFD Signature plans cover the core 11 software-enabled steps.',
  disclaimer: 'Prices and terms reflect the official LFD Cloud Commercial Pricing Proposal submitted for Management Review & Approval.',

  currencies: {
    USD: { 
      symbol: '$', 
      code: 'USD',
      taxNotice: 'Prices are in USD. Applicable taxes charged separately.'
    },
    INR: { 
      symbol: '₹', 
      code: 'INR',
      taxNotice: 'Prices are in INR. Applicable GST/taxes charged separately.'
    }
  },

  plans: [
    {
      id: 'free',
      name: 'Trial',
      badge: '7-Day Trial',
      targetCustomer: 'New users and small teams exploring the platform',
      primaryPurpose: 'Product discovery',
      description: '7-Day trial for exploring LFD Cloud and understanding its Layout Design capabilities.',
      pricing: {
        USD: { monthly: 0, quarterly: null },
        INR: { monthly: 0, quarterly: null }
      },
      isCustom: false,
      popular: false,
      ctaText: 'Start 7-Day Free Trial',
      ctaVariant: 'secondary',
      limits: {
        access: '7 days trial access',
        users: '1 user account',
        projects: '1 active transformation project',
        aiAllowance: '5 AI credits',
        exports: '—',
        support: 'Self-serve / Community'
      },
      afterTrialPolicy: [
        'Trial expires automatically.',
        'Customer receives expiry reminders.',
        'Customer chooses a paid subscription.',
        'No automatic payment without authorization.',
        'Project data retained for 30 days under the proposed retention policy.'
      ],
      features: [
        '7 days trial access',
        '1 user account',
        '1 active transformation project',
        'PPQ (Product, Process & Quantity)',
        'Value Stream Identification',
        'AI-powered Current State VSM',
        'Flow Management',
        'FSPlanner',
        '5 AI credits included',
        'Project Plan'
      ]
    },
    {
      id: 'small-business',
      name: 'LFD Core',
      badge: '14-Day Free Trial',
      trialDays: 14,
      targetCustomer: 'Small manufacturing businesses',
      primaryPurpose: 'Core Lean Transformation',
      description: 'For small manufacturing businesses starting their Layout Design journey.',
      pricing: {
        USD: { monthly: 149, quarterly: 425 },
        INR: { monthly: 12499, quarterly: 35999 }
      },
      isCustom: false,
      popular: false,
      ctaText: 'Start 14-Day Free Trial',
      secondaryCtaText: 'Contact Sales',
      ctaVariant: 'secondary',
      limits: {
        users: 'Up to 3 user accounts',
        projects: 'Up to 5 active transformation projects',
        aiAllowance: '100 AI credits/month',
        exports: 'PDF and Excel export',
        support: 'Standard support'
      },
      features: [
        'Up to 3 user accounts',
        'Up to 5 active transformation projects',
        'Complete PPQ & Flow Management (Spaghetti)',
        'AI Value Stream Identification & VSM',
        'Supply Chain & Flow Supermarket Design',
        'Material Handling & Factory Layout Design',
        'Visual Management Guidelines & Risk Assessment',
        'Complete FSPlanner & Project Plan',
        '100 AI credits/month (Standard recommendations)',
        'PDF & Excel export with project history',
        'Standard support'
      ]
    },
    {
      id: 'mid-size',
      name: 'LFD Signature',
      badge: 'Recommended',
      targetCustomer: 'Growing manufacturing companies',
      primaryPurpose: 'Multi-project transformation management',
      description: 'For growing manufacturing companies managing multiple layout projects and internal Lean teams.',
      pricing: {
        USD: { monthly: 399, quarterly: 1149 },
        INR: { monthly: 33499, quarterly: 95999 }
      },
      isCustom: false,
      popular: true,
      ctaText: 'Contact Sales',
      ctaMode: 'demo',
      ctaVariant: 'primary',
      limits: {
        users: 'Up to 10 user accounts',
        projects: 'Up to 15 active transformation projects',
        aiAllowance: '500 AI credits/month',
        exports: 'Advanced reports and presentations',
        support: 'Priority support'
      },
      features: [
        'Up to 10 user accounts',
        'Up to 15 active transformation projects',
        'All 11 software-enabled steps (Complete)',
        'Advanced AI Value Stream Identification & VSM',
        '500 AI credits/month (Advanced AI & refinement)',
        'Complete Flow, Supermarket, Material Handling & Layout',
        'Advanced Risk Assessment & Project Plan',
        'Team collaboration & shared improvement plans',
        'Centralized project tracking & Organization dashboard',
        'Role-based access control (RBAC)',
        'Advanced reports, presentations, PDF & Excel export',
        'Priority support'
      ]
    },
    {
      id: 'enterprise',
      name: 'LFD Enterprise',
      badge: null,
      targetCustomer: 'Large organizations, multi-plant groups & consulting firms',
      primaryPurpose: 'Complete organizational transformation',
      description: 'For large organizations, multi-plant manufacturing groups and consulting firms requiring complete Layout Design support.',
      pricing: {
        USD: { monthly: null, quarterly: null },
        INR: { monthly: null, quarterly: null }
      },
      isCustom: true,
      customPriceLabel: 'Custom Pricing',
      popular: false,
      ctaText: 'Contact Sales',
      ctaVariant: 'outline',
      limits: {
        users: 'Custom user allocation',
        projects: 'Custom project limits',
        aiAllowance: 'Custom AI credits allocation',
        exports: 'Enterprise reporting & custom exports',
        support: 'Enterprise support with dedicated consultant & SLA'
      },
      features: [
        'Custom user allocation & project limits',
        'Custom AI credit allocation',
        'All 11 software-enabled steps included',
        'All 15 Lean Framework steps included',
        'Capacity Planning & Ramp-up Plan included',
        'Equipment & Manpower Planning Guidelines included',
        'Line Side Design included',
        'Multi-site transformation management',
        'Organization-level administration & advanced RBAC',
        'Custom integrations as agreed',
        'Dedicated Faber Infinite consultant included',
        'Dedicated onboarding & training with custom SLA'
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
