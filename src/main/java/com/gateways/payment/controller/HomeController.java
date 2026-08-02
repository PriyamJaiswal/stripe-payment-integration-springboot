package com.gateways.payment.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping
    public  String index(){
        return "index";
    }

    @GetMapping("/success")
    public  String success(){
        return "success";
    }

    @GetMapping("/cancel")
    public  String cancel(){
        return "cancel";
    }

    @GetMapping("/product")
    public String product() {
        return "product";
    }

    @GetMapping("/cart")
    public String cart() {
        return "cart";
    }

    @GetMapping("/checkout")
    public String checkout() {
        return "checkout";
    }

    @GetMapping("/orders")
    public String orders() {
        return "orders";
    }

    @GetMapping("/profile")
    public String profile() {
        return "profile";
    }

    @GetMapping("/wishlist")
    public String wishlist() {
        return "wishlist";
    }
}
