package com.gateways.payment.service;

import com.gateways.payment.dto.ProductReq;
import com.gateways.payment.dto.StripeResponse;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class StripeService {

        private static final Logger log = LoggerFactory.getLogger(StripeService.class);

        @Value("${stripe.secretKey}")
        private String secretKey;

        @Value("${app.baseUrl}")
        private String baseUrl;

        public StripeResponse checkoutProducts(ProductReq productRequest) {
                Stripe.apiKey = secretKey;

                SessionCreateParams.LineItem.PriceData.ProductData productData = SessionCreateParams.LineItem.PriceData.ProductData
                                .builder()
                                .setName(productRequest.getName())
                                .build();

                SessionCreateParams.LineItem.PriceData priceData = SessionCreateParams.LineItem.PriceData.builder()
                                .setCurrency(productRequest.getCurrency() == null ? "usd"
                                                : productRequest.getCurrency())
                                .setUnitAmount(productRequest.getAmount())
                                .setProductData(productData)
                                .build();

                // Build line item
                SessionCreateParams.LineItem lineItem = SessionCreateParams.LineItem.builder()
                                .setQuantity(productRequest.getQuantity())
                                .setPriceData(priceData)
                                .build();

                // Build checkout session with dynamic URLs
                SessionCreateParams params = SessionCreateParams.builder()
                                .setMode(SessionCreateParams.Mode.PAYMENT)
                                .setSuccessUrl(baseUrl + "/success")
                                .setCancelUrl(baseUrl + "/cancel")
                                .addLineItem(lineItem)
                                .build();

                Session session;
                try {
                        session = Session.create(params);
                        log.info("Stripe session created successfully: {}", session.getId());
                } catch (StripeException ex) {
                        log.error("Stripe session creation failed: {}", ex.getMessage(), ex);
                        return StripeResponse.builder()
                                        .status("FAILED")
                                        .message("Payment session creation failed: " + ex.getMessage())
                                        .build();
                }

                return StripeResponse.builder()
                                .status("SUCCESS")
                                .message("Payment session created successfully")
                                .sessionId(session.getId())
                                .sessionUrl(session.getUrl())
                                .build();
        }
}
