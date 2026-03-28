# 💳 Payment Gateway — Stripe Integration

<p align="center">
  <img src="https://img.shields.io/badge/Java-21-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"/>
  <img src="https://img.shields.io/badge/Spring_Boot-3.5.7-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"/>
  <img src="https://img.shields.io/badge/Stripe-API-635BFF?style=for-the-badge&logo=stripe&logoColor=white"/>
  <img src="https://img.shields.io/badge/Maven-Build-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white"/>
  <img src="https://img.shields.io/badge/Lombok-enabled-red?style=for-the-badge"/>
</p>

<p align="center">
  A clean, production-ready <strong>Stripe Checkout</strong> integration built with <strong>Spring Boot 3</strong>.
  Accepts product details via a REST API, creates a Stripe Checkout Session, and returns a redirect URL — ready for any frontend to consume.
</p>

---

## ✨ Features

- 🔐 **Secure Stripe Checkout** — server-side session creation using the official Stripe Java SDK
- 🌐 **RESTful API** — single POST endpoint to initiate a payment session
- 🏗️ **Clean Architecture** — Controller → Service → DTO layered structure
- ⚙️ **Environment-safe config** — secret key injected via `application.properties` (never hardcoded)
- 💡 **Lombok powered** — zero-boilerplate DTOs with `@Data`, `@Builder` annotations
- 🔀 **CORS ready** — cross-origin configuration for seamless frontend integration

---

## 🗂️ Project Structure

```
payment-proj/
├── src/
│   └── main/
│       ├── java/com/gateways/payment/
│       │   ├── PaymentDemoApplication.java     # App entry point
│       │   ├── config/
│       │   │   └── webConfig.java              # CORS configuration
│       │   ├── controller/
│       │   │   ├── HomeController.java         # Landing page controller
│       │   │   └── checkoutController.java     # POST /product/v1/checkout
│       │   ├── dto/
│       │   │   ├── ProductReq.java             # Request payload
│       │   │   └── StripeResponse.java         # Response payload
│       │   └── service/
│       │       └── stripeService.java          # Stripe session logic
│       └── resources/
│           └── application.properties
├── pom.xml
└── mvnw
```

---

## 🚀 Getting Started

### Prerequisites

| Tool | Version |
|------|---------|
| Java | 21+ |
| Maven | 3.8+ |
| Stripe Account | Any (test mode works) |

### 1. Clone the repository

```bash
git clone https://github.com/your-username/payment-proj.git
cd payment-proj
```

### 2. Configure your Stripe secret key

Open `src/main/resources/application.properties` and add your key:

```properties
spring.application.name=payment-proj
server.port=9091

stripe.secretKey=sk_test_YOUR_STRIPE_SECRET_KEY
```

> ⚠️ **Never commit your real secret key.** Use environment variables or a `.env` file in production.

### 3. Run the application

```bash
./mvnw spring-boot:run
```

The server starts on **`http://localhost:9091`**

---

## 📡 API Reference

### `POST /product/v1/checkout`

Initiates a Stripe Checkout Session for a product.

**Request Body**

```json
{
  "name": "Premium Headphones",
  "amount": 4999,
  "quantity": 1,
  "currency": "usd"
}
```

| Field | Type | Description |
|-------|------|-------------|
| `name` | `String` | Product display name shown on Stripe's checkout page |
| `amount` | `long` | Price in **smallest currency unit** (e.g., cents for USD) |
| `quantity` | `long` | Number of units |
| `currency` | `String` | ISO 4217 currency code (defaults to `usd` if omitted) |

**Response**

```json
{
  "status": "200 & SUCCESS",
  "message": "Payment session created successfully",
  "sessionId": "cs_test_a1b2c3...",
  "sessionUrl": "https://checkout.stripe.com/pay/cs_test_a1b2c3..."
}
```

> Redirect the user to `sessionUrl` to complete payment on Stripe's hosted page.

---

## 🧪 Testing with cURL

```bash
curl -X POST http://localhost:9091/product/v1/checkout \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Product",
    "amount": 1999,
    "quantity": 2,
    "currency": "usd"
  }'
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Language | Java 21 |
| Framework | Spring Boot 3.5.7 |
| Payment SDK | Stripe Java SDK 24.6.0 |
| Templating | Thymeleaf |
| Build Tool | Apache Maven |
| Boilerplate reduction | Lombok |

---

## 🔮 Roadmap

- [ ] Webhook handler for payment confirmation events
- [ ] Order persistence with Spring Data JPA + PostgreSQL
- [ ] JWT-based authentication for checkout endpoint
- [ ] Docker + Docker Compose support
- [ ] Support for subscription / recurring payments

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ using <strong>Spring Boot</strong> & <strong>Stripe</strong>
</p>
