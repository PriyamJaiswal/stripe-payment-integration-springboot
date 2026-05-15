package com.gateways.payment.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductReq {

    @Min(value = 1, message = "Amount must be at least 1 cent")
    private long amount;

    @Min(value = 1, message = "Quantity must be at least 1")
    private long quantity;

    @NotBlank(message = "Product name is required")
    private String name;

    private String currency;
}
