import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Send, Briefcase, GraduationCap, Users, ArrowDown } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().nonempty({ message: "Full name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  organization: z.string().trim().max(150).optional(),
  role: z.string().trim().max(100).optional(),
  interest: z.string().trim().max(100).optional(),
  message: z.string().trim().max(1000).optional(),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Please check your input",
        description: result.error.issues[0]?.message ?? "Invalid form data",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Request sent",
      description: "Thanks! We'll get back to you shortly.",
    });
    setForm({ name: "", email: "", organization: "", role: "", interest: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-4 pb-0">
        <div className="bg-primary rounded-[2rem] md:rounded-[3rem] mx-4 md:mx-6 min-h-[60vh] md:min-h-[70vh] flex items-center justify-center">
          <div className="container mx-auto px-6 py-12 md:py-16">
            <div className="flex flex-col items-center text-center">
              <div className="max-w-5xl">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block px-4 py-1.5 rounded-full border border-primary-foreground/20 text-sm text-primary-foreground/70 mt-8 md:mt-12 mb-6"
                >
                  Contact
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.15] max-w-5xl mb-6"
                >
                  Get in <span className="text-accent">Touch</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-primary-foreground/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
                >
                  Ready to accelerate your scientific discovery? Let's talk about how Saipuram can transform your R&D pipeline.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <button
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors animate-float hover-scale"
                  >
                    <ArrowDown className="w-5 h-5 text-primary-foreground/60" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section id="contact-form" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <AnimatedSection className="lg:col-span-2">
              <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm">
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
                  Request a Demo
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Doe"
                        maxLength={100}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@company.com"
                        maxLength={255}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input
                        id="organization"
                        value={form.organization}
                        onChange={(e) => setForm({ ...form, organization: e.target.value })}
                        placeholder="Acme Pharma"
                        maxLength={150}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Select
                        value={form.role}
                        onValueChange={(v) => setForm({ ...form, role: v })}
                      >
                        <SelectTrigger id="role">
                          <SelectValue placeholder="Researcher / Scientist" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="researcher">Researcher / Scientist</SelectItem>
                          <SelectItem value="executive">Executive / Leadership</SelectItem>
                          <SelectItem value="academic">Academic / Faculty</SelectItem>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">Interest Area</Label>
                    <Select
                      value={form.interest}
                      onValueChange={(v) => setForm({ ...form, interest: v })}
                    >
                      <SelectTrigger id="interest">
                        <SelectValue placeholder="Drug Discovery & Target Validation (TBEP)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tbep">Drug Discovery & Target Validation (TBEP)</SelectItem>
                        <SelectItem value="traces">Knowledge Discovery (TRACES)</SelectItem>
                        <SelectItem value="taukg">Disease Knowledge Graph (TAU-KG)</SelectItem>
                        <SelectItem value="enterprise">Enterprise Partnership</SelectItem>
                        <SelectItem value="academic">Academic Collaboration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your research challenges..."
                      rows={5}
                      maxLength={1000}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
                  >
                    Send Request
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={0.1} className="space-y-6">
              <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                <h3 className="font-display text-xl text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">Email</div>
                      <a href="mailto:contact@saipuram.in" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                        contact@saipuram.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">Location</div>
                      <p className="text-sm text-muted-foreground">India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                <h3 className="font-display text-xl text-foreground mb-6">
                  Quick Access
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">Enterprise Demo</div>
                      <p className="text-xs text-muted-foreground">For pharma & biotech</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">Academic Access</div>
                      <p className="text-xs text-muted-foreground">Free educational tier</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">Partnership</div>
                      <p className="text-xs text-muted-foreground">Research collaborations</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
