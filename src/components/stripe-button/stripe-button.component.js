import React from 'react'
import StripeCheckout from "react-stripe-checkout";
const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey =  "pk_test_51I4sbVDoSfRpnWPQbwMh7jEjrjwF9uYWmTHCV4i3LPUtHpxQ5glmEoTIKOzQQ6Mb38YKwx0k0dWCOPyyp9fe2g7600BJVa9EYT";
  
    const onToken = (token) => {
        console.log(token);
        alert('Payment Success');
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clowing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/Cuz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        token={onToken}
        stripeKey ={publishableKey}
        >
        
        </StripeCheckout>
    )
}

export default StripeCheckoutButton
