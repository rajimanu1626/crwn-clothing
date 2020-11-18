import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51HomVIGIl2Iu2g6Qaz3V8QYmEMGbvi7ikn7LGkHZyUJEdF5KpCzFBKslmPXcv2Xy3bpp4wS9szpjqY90zLn88h07004xzkYVuM';
    
    const onToken=token=>{
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image ='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;