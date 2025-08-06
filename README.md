# Hitech Laboratory Diagnostic Centre Website

A professional, responsive website for laboratory diagnostic centers built with HTML5, Tailwind CSS v3, and JavaScript.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design using Tailwind CSS v3
- **Configurable**: Easy to customize site name, contact information, and services
- **Fully Automated Services**: Showcases 6 key diagnostic services
- **Home Visit Booking**: Interactive form for scheduling home sample collection
- **Contact Forms**: Integrated contact and booking forms with validation
- **Franchisee Section**: Information for potential franchise partners
- **News & Events**: Section for announcements and health events
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Services Offered

1. **Haemogram (CBC)** - Complete Blood Count with fully automated analysis
2. **Glucose Testing** - Fasting, Post Prandial, and Random glucose tests
3. **Lipid Profile** - Cardiovascular risk assessment
4. **Liver Function Test** - Comprehensive liver health evaluation
5. **HbA1c Testing** - Long-term blood sugar monitoring
6. **Thyroid Function Test** - Complete thyroid panel (TSH, T3, T4)

## Getting Started

1. **Download/Clone** the project files
2. **Open** `index.html` in your web browser
3. **Customize** the site name and content (see customization section)

## File Structure

```
laboratorydiagnostic/
├── index.html          # Main website file
├── styles.css          # Custom CSS styles and animations
├── config.js          # Configuration file for easy customization
└── README.md          # This file
```

## Customization

### Changing Site Name

You can easily change the website title using the JavaScript console or by modifying the configuration:

#### Method 1: Using Browser Console
1. Open the website in your browser
2. Press F12 to open Developer Tools
3. Go to Console tab
4. Type: `customizeSiteName("Your Lab Name", "Your Subtitle")`
5. Press Enter

#### Method 2: Editing config.js
Open `config.js` and modify the SITE_CONFIG object:

```javascript
const SITE_CONFIG = {
    siteName: "Your Lab Name",           // Change this
    subtitle: "Diagnostic Centre",       // Change this
    fullSiteName: "Your Lab Name Diagnostic Centre", // Change this
    // ... rest of configuration
};
```

### Updating Contact Information

Edit the contact section in `config.js`:

```javascript
contact: {
    address: {
        street: "Your Address",
        city: "Your City",
        state: "Your State", 
        pincode: "Your Pincode"
    },
    phones: ["Your Phone 1", "Your Phone 2"],
    emails: ["your-email@domain.com", "reports@domain.com"],
    hours: {
        weekdays: "Mon - Sat: Your Hours",
        sunday: "Sunday: Your Hours"
    }
}
```

### Modifying Services

You can add, remove, or modify services in the `config.js` file:

```javascript
services: [
    {
        name: "Service Name",
        description: "Service description",
        icon: "fas fa-icon-name", // FontAwesome icon
        tag: "Service Tag"
    }
    // Add more services here
]
```

### Updating Colors and Branding

Modify the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #1e40af;     /* Main brand color */
    --secondary-color: #3b82f6;   /* Secondary brand color */
    --accent-color: #06b6d4;      /* Accent color */
    --success-color: #10b981;     /* Success/positive color */
    --danger-color: #ef4444;      /* Error/danger color */
}
```

## Features in Detail

### Navigation
- Responsive navigation bar with mobile hamburger menu
- Smooth scrolling to sections
- Fixed navigation with scroll effects

### Hero Section
- Eye-catching gradient background with pattern overlay
- Call-to-action buttons for booking and services
- Responsive typography

### Services Section
- Grid layout showcasing all diagnostic services
- Hover effects and animations
- Icons from FontAwesome

### Home Visit Booking
- Interactive form with validation
- Checkbox selection for multiple tests
- Professional styling with Tailwind CSS

### News & Events
- Card-based layout for announcements
- Gradient backgrounds for visual appeal
- Scalable for adding more events

### Franchisee Information
- Business opportunity details
- Investment requirements
- Benefits of joining the network

### About Us
- Company mission and vision
- Statistics and achievements
- Quality assurance information

### Contact Section
- Contact information with icons
- Contact form with validation
- Operating hours and location details

## Form Features

- **Real-time Validation**: Forms validate as users type
- **Loading States**: Visual feedback during form submission
- **Success/Error Styling**: Clear visual indicators
- **Mobile Optimized**: Touch-friendly form controls

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Dependencies

- **Tailwind CSS v3**: Loaded via CDN
- **FontAwesome 6**: For icons
- **No jQuery required**: Vanilla JavaScript only

## Performance Features

- **Optimized Images**: Placeholder gradients instead of heavy images
- **Minimal Dependencies**: Only essential external resources
- **Efficient CSS**: Utility-first approach with Tailwind
- **Fast Loading**: Optimized code structure

## Accessibility Features

- **Semantic HTML**: Proper HTML5 structure
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Friendly**: Proper ARIA labels
- **High Contrast Support**: Respects user preferences
- **Reduced Motion**: Respects prefers-reduced-motion

## SEO Features

- **Meta Tags**: Proper title, description, and viewport
- **Semantic Structure**: Proper heading hierarchy
- **Schema Markup Ready**: Easy to add structured data
- **Mobile-First**: Responsive design principles

## Deployment

1. **Upload Files**: Upload all files to your web server
2. **Configure Domain**: Point your domain to the hosting location
3. **SSL Certificate**: Ensure HTTPS is enabled
4. **Test**: Verify all functionality works correctly

## Customization Examples

### Example 1: Changing to "HealthCare Labs"
```javascript
customizeSiteName("HealthCare Labs", "Medical Centre");
```

### Example 2: Adding a New Service
```javascript
// Add to services array in config.js
{
    name: "X-Ray Services",
    description: "Digital X-ray imaging with instant results",
    icon: "fas fa-x-ray",
    tag: "Digital Imaging"
}
```

### Example 3: Updating Colors for Different Branding
```css
:root {
    --primary-color: #059669;     /* Green theme */
    --secondary-color: #10b981;
    --accent-color: #34d399;
}
```

## Support

For technical support or customization assistance:
- Review the configuration options in `config.js`
- Check browser console for any JavaScript errors
- Ensure all files are uploaded to the same directory
- Verify external CDN resources are loading properly

## License

This template is created for educational and commercial use. Feel free to customize and deploy for your laboratory diagnostic center.

---

**Built with ❤️ for healthcare professionals**
