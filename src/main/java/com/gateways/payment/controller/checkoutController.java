package com.gateways.payment.controller;

import com.gateways.payment.dto.ProductReq;
import com.gateways.payment.dto.StripeResponse;
import com.gateways.payment.service.stripeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product/v1")
public class checkoutController {

    @Autowired
    private stripeService stripeService;

    @PostMapping("/checkout")
    public ResponseEntity<StripeResponse> checkoutProducts(@RequestBody ProductReq productReq){
        StripeResponse stripeResponse = stripeService.checkoutProducts(productReq);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(stripeResponse);
    }
}
