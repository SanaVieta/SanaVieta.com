export function handleCheckout(): void {
    const STRIPE_CHECKOUT_URL = 'https://buy.stripe.com/test_00w5kE14vdOI8wU4Sbak000';
    window.open(STRIPE_CHECKOUT_URL, '_blank');
};
