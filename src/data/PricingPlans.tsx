export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  features: string[];
  highlighted: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$29/month',
    features: ['1 User Access', 'Daily Backups', 'Email Support'],
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$59/month',
    features: ['5 User Access', 'Priority Support', 'Cloud Storage', 'Custom Domains'],
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    features: ['Unlimited Users', 'Dedicated Server', '24/7 Support', 'Custom Integrations'],
    highlighted: false,
  },
];

export default pricingPlans;
