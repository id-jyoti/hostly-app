import { useSearchParams } from 'react-router-dom';

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const selectedPlan = searchParams.get('plan'); // 'basic' or 'pro'

  return (
    <section className="py-16 px-4 max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-primary mb-6">
        Checkout — {selectedPlan ? selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1) : ''}
      </h1>
      <p className="text-gray-700">
        You selected the <strong>{selectedPlan}</strong> plan.
      </p>
      {/* Add form fields or payment integration here */}
    </section>
  );
};

export default Checkout;
