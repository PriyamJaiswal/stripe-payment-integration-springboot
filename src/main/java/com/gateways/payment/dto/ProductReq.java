package com.gateways.payment.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductReq {

    private long amount;
    private long quantity;
    private String name;
    private String currency;
}
