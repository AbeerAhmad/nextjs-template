"use client";
import { Metadata } from "next";
import {
  Card,
  Column,
  Flex,
  Grid,
  Heading,
  Icon,
  Line,
  Text,
  Button,
  Textarea,
  Input,
  RevealFx,
} from "@/once-ui/components";
import { useState } from "react";
import { z } from "zod";

import { contact, person } from "@/app/resources/content";
import "./contact.css";

// Define validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// export function generateMetadata(): Metadata {
//   return {
//     title: contact.title || "Contact Us",
//     description: contact.description,
//     openGraph: {
//       title: contact.title || "Contact Us",
//       description: contact.description,
//     }
//   };
// }

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error when user starts typing
    if (errors[id as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [id]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus({});
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }
      
      // Reset form on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully!'
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : 'An unexpected error occurred'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      {/* Hero Section with Angled Design */}
      <div className="contact-hero">
        <div className="hero-content">
          <RevealFx>
            <Heading variant="display-strong-xl" className="hero-title">{contact.title || "Get in Touch"}</Heading>
          </RevealFx>
          {contact.intro.display && (
            <RevealFx delay={0.1}>
              <Text variant="body-default-l" className="hero-description">{contact.intro.description}</Text>
            </RevealFx>
          )}
        </div>
        <div className="hero-shape"></div>
      </div>

      {/* Main Content */}
      <div className="contact-main">
        {/* Left Side - Contact Form */}
        <div className="contact-form-container">
          <RevealFx delay={0.1}>
            <Card padding="xl" shadow="l" border="neutral-weak" radius="l" className="contact-card">
              <form onSubmit={handleSubmit}>
                <Column gap="l">
                  <Heading variant="display-strong-m" className="section-title" color="neutral-strong">Send Us a Message</Heading>
                  
                  {submitStatus.message && (
                    <div className={`status-message ${submitStatus.success ? 'success' : 'error'}`}>
                      <Text color={submitStatus.success ? "success" : "error"}>
                        {submitStatus.message}
                      </Text>
                    </div>
                  )}
                  
                  <div className="form-grid">
                    <div className="form-group">
                      <Input
                        id="name"
                        label="Name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        error={errors.name}
                      />
                    </div>
                    <div className="form-group">
                      <Input
                        id="email"
                        label="Email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        error={errors.email}
                      />
                    </div>
                  </div>
                  
                  <Input
                    id="subject"
                    label="Subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    error={errors.subject}
                  />
                  
                  <Textarea
                    id="message"
                    label="Message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    error={errors.message}
                  />
                  
                  <Button 
                    variant="primary" 
                    size="l" 
                    className="submit-button"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <Flex gap="s" vertical="center">
                      {isSubmitting ? (
                        <>
                          <Icon name="loader" size="s" onBackground="brand-strong" />
                          <Text>Sending...</Text>
                        </>
                      ) : (
                        <>
                          <Icon name="send" size="s" onBackground="brand-strong" />
                          <Text>Send Message</Text>
                        </>
                      )}
                    </Flex>
                  </Button>
                </Column>
              </form>
            </Card>
          </RevealFx>
        </div>
        
        {/* Right Side - Contact Info & Map */}
        <div className="contact-info-container">
          <RevealFx delay={0.2}>
            {/* Contact Quick Info */}
            <div className="contact-info-grid">
              <div className="info-card">
                <Flex gap="m" align="start">
                  <Icon name="mail" size="l" color="brand-strong" />
                  <div className="info-content">
                    <Text variant="heading-strong-s" color="neutral-strong">Email Us</Text>
                    <a href={`mailto:${contact.contactInfo.email}`} className="contact-link">
                      {contact.contactInfo.email}
                    </a>
                  </div>
                </Flex>
              </div>
              
              <div className="info-card">
                <Flex gap="m" align="start">
                  <Icon name="phone" size="l" color="brand-strong" />
                  <div className="info-content">
                    <Text variant="heading-strong-s" color="neutral-strong">Call Us</Text>
                    <a href={`tel:${contact.contactInfo.phone}`} className="contact-link">
                      {contact.contactInfo.phone}
                    </a>
                  </div>
                </Flex>
              </div>
              
              <div className="info-card">
                <Flex gap="m" align="start">
                  <Icon name="map-pin" size="l" color="brand-strong" />
                  <div className="info-content">
                    <Text variant="heading-strong-s" color="neutral-strong">Visit Us</Text>
                    <Text variant="body-default-m" color="neutral-strong">{contact.contactInfo.address}</Text>
                  </div>
                </Flex>
              </div>
              
              <div className="info-card">
                <Flex gap="m" align="start">
                  <Icon name="clock" size="l" color="brand-strong" />
                  <div className="info-content">
                    <Text variant="heading-strong-s" color="neutral-strong">Business Hours</Text>
                    <Text variant="body-default-m" color="neutral-strong">{contact.contactInfo.hours}</Text>
                  </div>
                </Flex>
              </div>
            </div>
            
            {/* Map Placeholder - Removed */}
            
            {/* Social Links */}
            <div className="social-section">
              <Text variant="heading-strong-s" color="neutral-strong" align="center">Connect With Us</Text>
              <div className="social-links">
                <a href="#" className="social-link-circle">
                  <Icon name="linkedin" size="m" color="brand-strong" />
                </a>
                <a href="#" className="social-link-circle">
                  <Icon name="github" size="m" color="brand-strong" />
                </a>
                <a href="#" className="social-link-circle">
                  <Icon name="x" size="m" color="brand-strong" />
                </a>
              </div>
            </div>
          </RevealFx>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="faq-section">
        <RevealFx delay={0.3}>
          <Heading variant="display-strong-l" className="faq-title">Frequently Asked Questions</Heading>
          <div className="faq-grid">
            <div className="faq-item">
              <Heading variant="heading-strong-m">How quickly do you respond to inquiries?</Heading>
              <Text variant="body-default-m">We typically respond to all inquiries within 24 business hours. For urgent matters, please call us directly.</Text>
            </div>
            <div className="faq-item">
              <Heading variant="heading-strong-m">Do you offer remote services?</Heading>
              <Text variant="body-default-m">Yes, we provide remote software development and consulting services to clients worldwide, with teams that can work in your time zone.</Text>
            </div>
            <div className="faq-item">
              <Heading variant="heading-strong-m">What industries do you specialize in?</Heading>
              <Text variant="body-default-m">We have expertise across multiple industries including fintech, healthcare, e-commerce, and enterprise solutions.</Text>
            </div>
            <div className="faq-item">
              <Heading variant="heading-strong-m">How do you handle project pricing?</Heading>
              <Text variant="body-default-m">We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team arrangements based on your needs.</Text>
            </div>
          </div>
        </RevealFx>
      </div>
    </div>
  );
} 