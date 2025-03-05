
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Linkedin, 
  Mail, 
  Send, 
  CheckCircle2,
  Info,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. We'll get back to you soon.",
        variant: "default",
      });
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  return (
    <div className="container mx-auto px-4 py-20 mt-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              Get in Touch
              <span className="absolute -z-10 bottom-1 left-0 w-full h-3 bg-primary/10 dark:bg-primary/20 rounded-lg"></span>
            </h2>
            
            <p className="text-lg mb-8 text-muted-foreground">
              Have questions about Nutrigrade or want to provide feedback? Feel free to reach out using the contact form or through any of the channels below.
            </p>
            
            <div className="space-y-6">
              <div className="glass p-5 rounded-xl flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <a 
                    href="mailto:vithalraochavan2@gmail.com" 
                    className="text-primary hover:underline"
                  >
                    vithalraochavan2@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="glass p-5 rounded-xl flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/vithalrao-chavan-332a1631a" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline"
                  >
                    Vithalrao Chavan
                  </a>
                </div>
              </div>
              
              <div className="mt-12 glass p-5 rounded-xl flex items-start gap-4 bg-primary/5">
                <div className="p-3 rounded-full text-primary">
                  <Info className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Note</h3>
                  <p className="text-sm text-muted-foreground">
                    This is a demo contact form. In a real implementation, it would be connected to a backend service to process submissions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="glass p-8 rounded-2xl shadow-xl dark:shadow-none h-full">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              
              {isSubmitted ? (
                <div className="h-[320px] flex flex-col items-center justify-center text-center animate-scale-in">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thanks for reaching out. We'll get back to you soon.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="rounded-full glass"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="rounded-md"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="rounded-md"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      required
                      className="rounded-md min-h-[120px]"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white border-opacity-40 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
