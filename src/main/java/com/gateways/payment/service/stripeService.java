package com.gateways.payment.service;

import com.gateways.payment.dto.ProductReq;
import com.gateways.payment.dto.StripeResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import com.stripe.Stripe;




@Service
public class stripeService {

    @Value("${stripe.secretKey}")
    private String secretKey;

    public StripeResponse checkoutProducts(ProductReq productRequest) {
        Stripe.apiKey = secretKey;  //Set your secret key. Remember to switch to your live secret key in production!


        //  Create a PaymentIntent with the order amount and currency
        SessionCreateParams.LineItem.PriceData.ProductData productData =
                SessionCreateParams.LineItem.PriceData.ProductData.builder()
                        .setName(productRequest.getName())
                        .build();

        // Create new line item with the above product data and associated price
        SessionCreateParams.LineItem.PriceData priceData =
                SessionCreateParams.LineItem.PriceData.builder()
                        .setCurrency(productRequest.getCurrency()==null ? "usd" : productRequest.getCurrency())
                        .setUnitAmount(productRequest.getAmount())
                        .setProductData(productData)
                        .build();

        // Create new line item with the above price data
        SessionCreateParams.LineItem lineItem =
                SessionCreateParams.LineItem.builder()
                        .setQuantity(productRequest.getQuantity())
                        .setPriceData(priceData)
                        .build();

        // Create new session with the line items
        SessionCreateParams params =
                SessionCreateParams.builder()
                        .setMode(SessionCreateParams.Mode.PAYMENT)
                        .setSuccessUrl("http://localhost:9090/success")
                        .setCancelUrl("http://localhost:9090/cancel")
                        .addLineItem(lineItem)
                        .build();

        Session session = null;
        try {
            session = Session.create(params);
        } catch (StripeException ex) {
            //log
            System.out.println("Stripe exception: " + ex.getMessage());
        }

        return StripeResponse
                .builder()
                .status("200 & SUCCESS")
                .message("Payment session created successfully")
                .sessionId(session != null ? session.getId() : null)
                .sessionUrl(session != null ? session.getUrl() : null)
                .build();

    }
}