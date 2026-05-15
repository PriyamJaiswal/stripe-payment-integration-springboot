package com.gateways.payment.controller;

import com.gateways.payment.dto.ProductReq;
import com.gateways.payment.dto.StripeResponse;
import com.gateways.payment.service.StripeService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product/v1")
public class CheckoutController {

    private final StripeService stripeService;

    public CheckoutController(StripeService stripeService) {
        this.stripeService = stripeService;
    }

    @PostMapping("/checkout")
    public ResponseEntity<StripeResponse> checkoutProducts(@Valid @RequestBody ProductReq productReq) {
        StripeResponse stripeResponse = stripeService.checkoutProducts(productReq);
        if ("FAILED".equals(stripeResponse.getStatus())) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(stripeResponse);
        }
        return ResponseEntity.ok(stripeResponse);
    }
}
