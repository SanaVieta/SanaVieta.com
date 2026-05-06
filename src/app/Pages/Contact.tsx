import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic would go here
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            {/* Header Section */}
            <section className="bg-gradient-to-br from-[#E8F5E9] to-white py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-4">
                            Get in Touch
                        </h1>
                        <p className="text-lg text-[#3E5A3E] leading-relaxed">
                            Have questions about our products or need assistance? We're here to help.
                            Reach out to our team and we'll get back to you as soon as possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-6">
                                    Contact Information
                                </h2>
                                <p className="text-[#3E5A3E] mb-8">
                                    Our customer support team is available Monday through Friday, 9 AM to 6 PM EST.
                                    We strive to respond to all inquiries within 24 hours.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <Card className="border-[#D7E5D7]">
                                    <CardContent className="pt-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Phone className="w-6 h-6 text-[#2E7D32]" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-[#1B5E20] mb-1">Phone</h3>
                                                <p className="text-[#3E5A3E]">1-800-SANAVIETA</p>
                                                <p className="text-sm text-[#6B7D6B] mt-1">Mon-Fri, 9 AM - 6 PM EST</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-[#D7E5D7]">
                                    <CardContent className="pt-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Mail className="w-6 h-6 text-[#2E7D32]" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-[#1B5E20] mb-1">Email</h3>
                                                <p className="text-[#3E5A3E]">support@sanavieta.com</p>
                                                <p className="text-sm text-[#6B7D6B] mt-1">We'll respond within 24 hours</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-[#D7E5D7]">
                                    <CardContent className="pt-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-6 h-6 text-[#2E7D32]" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-[#1B5E20] mb-1">Address</h3>
                                                <p className="text-[#3E5A3E]">
                                                    SanaVieta Wellness<br />
                                                    123 Natural Way<br />
                                                    Wellness City, WC 12345<br />
                                                    United States
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="bg-[#E8F5E9] rounded-xl p-6 border border-[#C8E6C9]">
                                <h3 className="font-semibold text-[#1B5E20] mb-2">Have a product question?</h3>
                                <p className="text-sm text-[#3E5A3E] mb-4">
                                    Before purchasing, we recommend consulting with your healthcare provider,
                                    especially if you're taking medications or have existing health conditions.
                                </p>
                                <p className="text-sm text-[#3E5A3E]">
                                    Our team can answer questions about ingredients, dosage, and product details.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <Card className="border-[#D7E5D7] shadow-lg">
                                <CardContent className="pt-6">
                                    <h2 className="text-2xl font-bold text-[#1B5E20] mb-6">Send us a Message</h2>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <Label htmlFor="name" className="text-[#1B5E20]">Full Name *</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="mt-2 border-[#D7E5D7] focus:border-[#4CAF50]"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="email" className="text-[#1B5E20]">Email Address *</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="mt-2 border-[#D7E5D7] focus:border-[#4CAF50]"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="phone" className="text-[#1B5E20]">Phone Number</Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="mt-2 border-[#D7E5D7] focus:border-[#4CAF50]"
                                                placeholder="(555) 123-4567"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="subject" className="text-[#1B5E20]">Subject *</Label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="mt-2 border-[#D7E5D7] focus:border-[#4CAF50]"
                                                placeholder="How can we help?"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="message" className="text-[#1B5E20]">Message *</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                className="mt-2 border-[#D7E5D7] focus:border-[#4CAF50] resize-none"
                                                placeholder="Tell us more about your question or concern..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-[#4CAF50] hover:bg-[#2E7D32] text-white h-12"
                                        >
                                            <Send className="w-4 h-4 mr-2" />
                                            Send Message
                                        </Button>

                                        <p className="text-xs text-[#6B7D6B] text-center">
                                            By submitting this form, you agree to our privacy policy and consent to be contacted.
                                        </p>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Quick Links */}
            <section className="bg-[#F1F8F1] py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-4">
                            Looking for Quick Answers?
                        </h2>
                        <p className="text-[#3E5A3E] mb-8">
                            Check out our frequently asked questions for immediate help.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Button variant="outline" className="border-[#4CAF50] text-[#2E7D32] hover:bg-[#E8F5E9]">
                                Shipping & Returns
                            </Button>
                            <Button variant="outline" className="border-[#4CAF50] text-[#2E7D32] hover:bg-[#E8F5E9]">
                                Product Information
                            </Button>
                            <Button variant="outline" className="border-[#4CAF50] text-[#2E7D32] hover:bg-[#E8F5E9]">
                                Order Tracking
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
