# E-DGRMO Website

This is the official website for the Direction Générale des Recettes de la Mongala (E-DGRMO).

## Docker Setup

This project includes Docker configuration for easy deployment and development.

### Building the Docker Image

To build the Docker image, run:

```bash
docker build -t e-dgrmo-website .
```

### Running with Docker

To run the application using Docker:

```bash
docker run -p 3000:3000 e-dgrmo-website
```

### Running Development with Docker Compose

For development with live reloading, use the development Docker Compose file:

```bash
docker-compose up
```

### Running Production with Docker Compose

For production deployment, use the production Docker Compose file:

```bash
docker-compose -f docker-compose.prod.yml up
```

This will start the application on http://localhost:3000

### Stopping Docker Compose

To stop the application:

```bash
docker-compose down
# or for production
docker-compose -f docker-compose.prod.yml down
```

### Environment Variables

You can set environment variables in a `.env.local` file or pass them directly to the Docker container.

## Development

For development instructions, see the main README.
# E-DGRMO Website Frontend Documentation

## Overview

The E-DGRMO website is the public-facing portal of the Direction Générale des Recettes de la Mongala. It provides citizens, businesses, and government officials with secure access to tax information, online payments, electronic receipts, and digital public services.

Support of three language FR, LINGALA and EN. High end institutional design

---

# Design Language

## Style

- Sharp components no radiuses
- Modern Government Portal
- Professional
- Clean and Minimal
- Responsive
- Mobile First
- Accessibility Friendly
- Fast Loading
- Institutional Branding

---

# Primary Colors

| Color          | Hex       | Usage                           |
| -------------- | --------- | ------------------------------- |
| Primary Blue   | `#0056D2` | Buttons, links, primary actions |
| Dark Navy      | `#0B1F3A` | Headers, footer                 |
| Light Blue     | `#EAF4FF` | Background sections             |
| White          | `#FFFFFF` | Cards, forms                    |
| Success Green  | `#16A34A` | Successful payments             |
| Warning Orange | `#F59E0B` | Alerts                          |
| Error Red      | `#DC2626` | Errors                          |
| Gray           | `#6B7280` | Secondary text                  |

---

# Typography

- Font: Inter
- Heading Weight: 700
- Body Weight: 400
- Button Weight: 600

---

# Components

- Navigation Bar
- Mega Menu
- Hero Banner
- Feature Cards
- Statistics Cards
- Search Bar
- Tax Cards
- Payment Cards
- QR Scanner
- Timeline
- FAQ Accordion
- Tables
- Forms
- Dashboard Widgets
- Charts
- Footer

---

# Website Pages

## Home

### Sections

- Hero Banner
- Quick Tax Search
- Online Payment CTA
- Featured Services
- Latest News
- Revenue Statistics
- How It Works
- Mobile App Promotion
- Frequently Asked Questions
- Contact Information

Features

- Animated counters
- Search taxpayer
- Verify receipt
- Quick payment
- Download mobile app
- Latest announcements

---

## About DGRMO

Features

- Organization overview
- Mission
- Vision
- Core values
- Director's message
- Organizational structure
- Provincial mandate
- Strategic objectives

---

## Services

Features

- List of taxes
- Tax descriptions
- Payment procedures
- Required documents
- Fees
- Processing time
- Downloadable forms

---

## Tax Categories

Features

- Search taxes
- Tax calculator
- Tax details
- Payment eligibility
- Legal references

---

## Online Payment

Features

- Tax selection
- Amount calculation
- Mobile Money payment
- Bank payment
- Card payment
- Payment confirmation
- Secure checkout

---

## Receipt Verification

Features

- QR Code Scanner
- Receipt Number Search
- Payment Status
- Receipt Details
- Fraud Detection

---

## Complaints

Features

- Complaint form
- Upload attachments
- Complaint tracking
- Status updates
- Administrator responses

---

## News & Announcements

Features

- News articles
- Press releases
- Public notices
- Events
- Image gallery
- Search articles

---

## Downloads

Features

- Forms
- Official documents
- Guides
- Regulations
- Annual reports
- PDF downloads

---

## Contact

Features

- Contact form
- Office information
- Google Map
- Phone numbers
- Email addresses
- Working hours

---

## Frequently Asked Questions

Features

- Search questions
- Categories
- Expandable answers

---

# Authentication

## Login

Features

- Email login
- Phone login
- Password recovery
- Remember me
- Two-factor authentication

---

## Register

Features

- Individual registration
- Business registration
- Identity verification
- Secure password creation

---

# Footer

Sections

- About
- Services
- Quick Links
- Contact
- Social Media
- Privacy Policy
- Terms of Use
- Copyright

---

# Responsive Design

Supported Devices

- Desktop
- Laptop
- Tablet
- Mobile
- Android POS

---

# Accessibility

- WCAG compliant
- Keyboard navigation
- Screen reader support
- High contrast support
- Accessible forms

---

# Performance

- Server Side Rendering
- Image Optimization
- Lazy Loading
- Code Splitting
- SEO Optimized
- Progressive Web App (PWA)

---

# Technology Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod
- TanStack Query
- Axios
- Recharts
- Leaflet
- QR Code Scanner
- NextAuth
- Strapi CMS API

---

# Key Objectives

- Improve public access to tax services
- Enable secure online payments
- Increase transparency
- Reduce administrative workload
- Enhance taxpayer experience
- Provide real-time revenue monitoring
- Support digital transformation of public finance
