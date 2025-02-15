import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Profile = () => {
  const personalInfo = [
    { label: "Name", value: "Chinnam Sandeep" },
    { label: "Father's Name", value: "Chinnam Sateesh" },
    { label: "Date of Birth", value: "05-08-2002" },
    { label: "Gender", value: "Male" },
    { label: "Marital Status", value: "Unmarried" },
    { label: "Address", value: "1-3-262A, Vijayawada, NTR, Andhra Pradesh, India – 520012" },
  ];

  const socials = [
    { icon: Github, link: "https://github.com/sandeepchinnam", label: "GitHub" },
    { icon: Linkedin, link: "https://linkedin.com/in/sandeep939898", label: "LinkedIn" },
    { icon: Mail, link: "mailto:2000030196cse@gmail.com", label: "Email" },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/SANDEEP_RESUME.pdf"; // Path to the resume in the public folder
    link.download = "SANDEEP_RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="profile" className="py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 gradient-text"
        >
          Profile
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="premium-card p-8"
          >
            <div className="grid md:grid-cols-[300px,1fr] gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                  <img
                    src="MYPIC.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Button
                  onClick={handleDownloadResume}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
                <div className="flex gap-4 mt-4">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 border-b border-border pb-4"
                  >
                    <span className="font-medium text-foreground/60 w-32">{info.label}:</span>
                    <span className="text-foreground">{info.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
