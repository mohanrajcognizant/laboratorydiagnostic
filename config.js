// Configuration file for Hitech Laboratory Diagnostic Centre Website

// Website Configuration
const SITE_CONFIG = {
    // Main site title - Change this to customize the website title
    siteName: "Hitech Laboratory",
    subtitle: "Diagnostic Centre",
    
    // Full site title for page title and copyright
    fullSiteName: "Hitech Laboratory Diagnostic Centre",
    
    // Contact Information
    contact: {
        address: {
            street: "123 Medical Plaza, Healthcare District",
            city: "Mumbai",
            state: "Maharashtra", 
            pincode: "400001"
        },
        phones: ["+91 9876543210", "+91 9876543211"],
        emails: ["info@hitechlab.com", "reports@hitechlab.com"],
        hours: {
            weekdays: "Mon - Sat: 7:00 AM - 9:00 PM",
            sunday: "Sunday: 8:00 AM - 6:00 PM"
        }
    },
    
    // Services offered
    services: [
        {
            name: "Haemogram (CBC)",
            description: "Complete Blood Count with fully automated analysis including RBC, WBC, platelets, and differential count.",
            icon: "fas fa-tint",
            tag: "Fully Automated"
        },
        {
            name: "Glucose Testing", 
            description: "Comprehensive glucose analysis: Fasting, Post Prandial, and Random glucose levels.",
            icon: "fas fa-candy-cane",
            tag: "Multiple Tests Available"
        },
        {
            name: "Lipid Profile",
            description: "Complete cardiovascular risk assessment including cholesterol, triglycerides, HDL, and LDL.",
            icon: "fas fa-heart", 
            tag: "Heart Health Focus"
        },
        {
            name: "Liver Function Test",
            description: "Comprehensive liver health evaluation with enzymes, proteins, and bilirubin analysis.",
            icon: "fas fa-user-md",
            tag: "Liver Health"
        },
        {
            name: "HbA1c Testing",
            description: "Glycosylated Hemoglobin test for long-term blood sugar monitoring and diabetes management.",
            icon: "fas fa-chart-line",
            tag: "Diabetes Management"
        },
        {
            name: "Thyroid Function Test",
            description: "Complete thyroid panel including TSH, T3, T4 for comprehensive thyroid health assessment.",
            icon: "fas fa-user-check",
            tag: "Thyroid Health"
        }
    ],
    
    // Social media links
    socialMedia: {
        facebook: "#",
        twitter: "#", 
        instagram: "#",
        linkedin: "#"
    },
    
    // Hero section content
    hero: {
        title: "Advanced Laboratory",
        subtitle: "Diagnostic Services",
        description: "State-of-the-art fully automated testing with precise results you can trust. Your health is our priority."
    },
    
    // Statistics
    stats: {
        testsCompleted: "10K+",
        accuracyRate: "99.9%"
    },
    
    // Franchisee information
    franchisee: {
        initialInvestment: "₹15-25 Lakhs",
        franchiseeFee: "₹2-5 Lakhs", 
        spaceRequired: "800-1200 sq ft",
        roiTimeline: "18-24 months"
    }
};

// Function to update site title throughout the website
function updateSiteConfiguration() {
    // Update main navigation title
    const siteTitle = document.getElementById('site-title');
    if (siteTitle) {
        siteTitle.textContent = SITE_CONFIG.siteName;
    }
    
    // Update footer title
    const footerTitle = document.getElementById('footer-title');
    if (footerTitle) {
        footerTitle.textContent = SITE_CONFIG.siteName;
    }
    
    // Update copyright title
    const copyrightTitle = document.getElementById('copyright-title');
    if (copyrightTitle) {
        copyrightTitle.textContent = SITE_CONFIG.fullSiteName;
    }
    
    // Update page title
    document.title = `${SITE_CONFIG.fullSiteName} - Advanced Medical Testing`;
    
    console.log(`Site configuration updated: ${SITE_CONFIG.fullSiteName}`);
}

// Function to customize site name (can be called from browser console)
function customizeSiteName(newName, newSubtitle = "Diagnostic Centre") {
    SITE_CONFIG.siteName = newName;
    SITE_CONFIG.subtitle = newSubtitle;
    SITE_CONFIG.fullSiteName = `${newName} ${newSubtitle}`;
    updateSiteConfiguration();
    
    // Update subtitle in navigation if exists
    const navSubtitle = document.querySelector('nav p.text-xs');
    if (navSubtitle) {
        navSubtitle.textContent = newSubtitle;
    }
    
    // Update footer subtitle
    const footerSubtitle = document.querySelector('footer p.text-gray-400.text-sm');
    if (footerSubtitle) {
        footerSubtitle.textContent = newSubtitle;
    }
    
    console.log(`Site name updated to: ${SITE_CONFIG.fullSiteName}`);
}

// Enhanced form validation
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        const value = input.value.trim();
        
        // Remove previous error styling
        input.classList.remove('form-error', 'form-success');
        
        if (!value) {
            input.classList.add('form-error');
            isValid = false;
        } else {
            // Additional validation based on input type
            if (input.type === 'email' && !isValidEmail(value)) {
                input.classList.add('form-error');
                isValid = false;
            } else if (input.type === 'tel' && !isValidPhone(value)) {
                input.classList.add('form-error');
                isValid = false;
            } else {
                input.classList.add('form-success');
            }
        }
    });
    
    return isValid;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation (Indian format)
function isValidPhone(phone) {
    const phoneRegex = /^(\+91|91|0)?[6789]\d{9}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
}

// Enhanced form submission with loading state
function handleFormSubmission(formElement, successMessage) {
    if (!validateForm(formElement)) {
        alert('Please fill in all required fields correctly.');
        return false;
    }
    
    // Add loading state
    const submitBtn = formElement.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Submitting...';
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    
    // Simulate API call
    setTimeout(() => {
        // Remove loading state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        
        // Show success message
        alert(successMessage);
        
        // Reset form
        formElement.reset();
        
        // Remove validation classes
        formElement.querySelectorAll('.form-error, .form-success').forEach(input => {
            input.classList.remove('form-error', 'form-success');
        });
    }, 2000);
    
    return false;
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe service cards and other elements
    document.querySelectorAll('.service-card, .bg-white.rounded-lg').forEach(el => {
        observer.observe(el);
    });
}

// Initialize configuration when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateSiteConfiguration();
    initScrollAnimations();
    
    // Enhanced form handlers
    const bookVisitForm = document.querySelector('#book-visit form');
    if (bookVisitForm) {
        bookVisitForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this, 'Thank you for your booking request! We will contact you shortly to confirm your appointment.');
        });
    }
    
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this, 'Thank you for your message! We will get back to you soon.');
        });
    }
    
    // Add real-time validation
    document.querySelectorAll('input[required], textarea[required]').forEach(input => {
        input.addEventListener('blur', function() {
            const value = this.value.trim();
            this.classList.remove('form-error', 'form-success');
            
            if (value) {
                if (this.type === 'email' && !isValidEmail(value)) {
                    this.classList.add('form-error');
                } else if (this.type === 'tel' && !isValidPhone(value)) {
                    this.classList.add('form-error');
                } else {
                    this.classList.add('form-success');
                }
            }
        });
    });
});

// Export configuration for external access
window.SITE_CONFIG = SITE_CONFIG;
window.customizeSiteName = customizeSiteName;

console.log('Hitech Laboratory Diagnostic Centre website loaded successfully!');
console.log('To customize the site name, use: customizeSiteName("Your Lab Name", "Your Subtitle")');
