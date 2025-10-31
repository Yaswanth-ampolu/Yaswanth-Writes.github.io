# Yaswanth Writes - Personal Blog

A modern, responsive, and feature-rich blogging website built with Jekyll and hosted on GitHub Pages.

![Jekyll](https://img.shields.io/badge/Jekyll-4.3-red?style=flat-square)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-success?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

## 🌟 Features

- **Modern, Clean Design** - Minimalist aesthetic with excellent typography
- **Fully Responsive** - Mobile-first design that works perfectly on all devices
- **Dark Mode Toggle** - Switch between light and dark themes seamlessly
- **SEO Optimized** - Built-in SEO tags, sitemap, and RSS feed
- **Fast Loading** - Optimized CSS and JavaScript for quick page loads
- **Search & Filter** - Find posts by keywords and filter by categories
- **Reading Time** - Automatic reading time calculation for each post
- **Share Buttons** - Easy social media sharing (Twitter, LinkedIn, Facebook)
- **Syntax Highlighting** - Beautiful code blocks for technical posts
- **Pagination** - Clean pagination for browsing posts
- **Categories & Tags** - Organize posts with categories and tags
- **Back to Top Button** - Smooth scroll to top functionality
- **Smooth Animations** - Subtle transitions and hover effects
- **Accessibility** - Semantic HTML and ARIA labels

## 🚀 Quick Start

### Prerequisites

- Ruby 2.7 or higher
- RubyGems
- GCC and Make

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Yaswanth-Writes/yaswanth-writes.github.io.git
   cd yaswanth-writes.github.io
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run the development server**
   ```bash
   bundle exec jekyll serve
   ```

4. **Open your browser**

   Navigate to `http://localhost:4000`

## 📁 Project Structure

```
yaswanth-writes.github.io/
├── _config.yml              # Site configuration
├── Gemfile                  # Ruby dependencies
├── index.html               # Homepage
├── about.md                 # About page
├── posts.html               # Blog archive page
│
├── _layouts/                # Page templates
│   ├── default.html         # Base layout
│   ├── post.html            # Blog post layout
│   └── page.html            # Static page layout
│
├── _includes/               # Reusable components
│   ├── head.html            # HTML head with meta tags
│   ├── header.html          # Site navigation
│   └── footer.html          # Site footer
│
├── _posts/                  # Blog posts
│   ├── 2024-10-28-welcome-to-yaswanth-writes.md
│   ├── 2024-10-29-the-power-of-deep-work.md
│   └── 2024-10-30-building-modern-websites-with-jekyll.md
│
├── _sass/                   # Sass partials
│   ├── _variables.scss      # Colors, fonts, spacing
│   ├── _base.scss           # Base styles and resets
│   ├── _layout.scss         # Layout components
│   ├── _components.scss     # UI components
│   └── _utilities.scss      # Utility classes
│
├── assets/
│   ├── css/
│   │   └── main.scss        # Main stylesheet
│   ├── js/
│   │   └── main.js          # JavaScript functionality
│   └── images/              # Image assets
│
└── README.md                # This file
```

## 📝 Creating New Posts

### Step 1: Create a New File

Create a new file in the `_posts/` directory with the format:

```
YYYY-MM-DD-your-post-title.md
```

Example: `2024-10-31-my-new-post.md`

### Step 2: Add Front Matter

Start your post with YAML front matter:

```yaml
---
layout: post
title: "Your Post Title"
date: 2024-10-31 10:00:00 +0530
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
description: "A brief description of your post for SEO"
author: Yaswanth Ampolu
---
```

### Step 3: Write Your Content

Write your post content in Markdown:

```markdown
# Main Heading

This is a paragraph with **bold text** and *italic text*.

## Subheading

- Bullet point 1
- Bullet point 2

### Code Example

```python
def hello_world():
    print("Hello, World!")
```

![Image description](path/to/image.jpg)

[Link text](https://example.com)
```

### Step 4: Preview Locally

```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` to see your new post.

## 🎨 Customization

### Updating Site Information

Edit `_config.yml`:

```yaml
title: Your Blog Name
description: Your blog description
author: Your Name
email: your.email@example.com
url: "https://yourusername.github.io"

social:
  twitter: your_twitter_handle
  github: your_github_username
  linkedin: your_linkedin_username
```

### Changing Colors

Edit `_sass/_variables.scss`:

```scss
:root {
  --color-primary: #3b82f6;        // Change primary color
  --color-secondary: #8b5cf6;      // Change secondary color
  --color-accent: #06b6d4;         // Change accent color
  // ... other colors
}
```

### Modifying Typography

Edit `_sass/_variables.scss`:

```scss
$font-family-sans: 'Your Font', sans-serif;
$font-family-serif: 'Your Serif Font', serif;
```

Don't forget to update the Google Fonts link in `_includes/head.html`.

### Adding New Pages

1. Create a new file: `your-page.md`
2. Add front matter:
   ```yaml
   ---
   layout: page
   title: Your Page Title
   permalink: /your-page/
   ---
   ```
3. Add your content in Markdown
4. Update navigation in `_includes/header.html`

### Customizing Navigation

Edit `_includes/header.html`:

```html
<ul class="nav-menu" id="navMenu">
  <li class="nav-item">
    <a href="/" class="nav-link">Home</a>
  </li>
  <li class="nav-item">
    <a href="/about" class="nav-link">About</a>
  </li>
  <li class="nav-item">
    <a href="/posts" class="nav-link">Blog</a>
  </li>
  <!-- Add more items here -->
</ul>
```

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Create a GitHub repository** named `username.github.io`

2. **Push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select source: `main` branch
   - Click Save

4. **Wait for deployment**

   Your site will be live at `https://username.github.io` in a few minutes!

### Custom Domain (Optional)

1. Buy a domain name
2. Add a `CNAME` file to your repository:
   ```
   yourdomain.com
   ```
3. Configure DNS settings with your domain provider:
   - Add A records pointing to GitHub's IPs
   - Or add CNAME record pointing to `username.github.io`
4. Enable HTTPS in GitHub Pages settings

## 🔧 Configuration Options

### Pagination

Edit `_config.yml`:

```yaml
paginate: 10                          # Posts per page
paginate_path: "/posts/page:num/"     # Pagination URL structure
```

### SEO Settings

```yaml
# _config.yml
title: Your Site Title
description: Your site description
url: "https://yourdomain.com"
author: Your Name

twitter:
  username: your_username
  card: summary_large_image
```

### Analytics (Optional)

Uncomment in `_config.yml`:

```yaml
google_analytics: UA-XXXXXXXXX-X
```

Then add tracking code to `_includes/head.html`.

## 📱 Features Walkthrough

### Dark Mode

Toggle between light and dark modes using the theme switcher in the navigation. Preference is saved in localStorage.

### Search & Filter

- Use the search box on the posts page to find posts by title or content
- Filter posts by category using the dropdown
- Sort posts by date or title

### Reading Time

Automatically calculated based on average reading speed (180 words per minute).

### Share Buttons

Each post includes share buttons for:
- Twitter
- LinkedIn
- Facebook
- Copy link to clipboard

### Back to Top

Smooth scroll to top button appears when scrolling down the page.

## 🛠️ Development

### Build for Production

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

The optimized site will be in the `_site/` directory.

### Run with Drafts

Create a `_drafts/` folder and add posts without dates:

```bash
bundle exec jekyll serve --drafts
```

### Incremental Build (Faster)

```bash
bundle exec jekyll serve --incremental
```

### Watch for Changes

```bash
bundle exec jekyll serve --watch
```

## 📚 Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Liquid Template Language](https://shopify.github.io/liquid/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)
- [Jekyll Themes](https://jekyllthemes.io/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Yaswanth Ampolu**

- Website: [yaswanth-writes.github.io](https://yaswanth-writes.github.io)
- Twitter: [@yaswanth_writes](https://twitter.com/yaswanth_writes)
- GitHub: [@Yaswanth-Writes](https://github.com/Yaswanth-Writes)
- LinkedIn: [yaswanth-ampolu](https://linkedin.com/in/yaswanth-ampolu)

## 🙏 Acknowledgments

- Built with [Jekyll](https://jekyllrb.com/)
- Hosted on [GitHub Pages](https://pages.github.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Icons from [Feather Icons](https://feathericons.com/)

## 📧 Support

If you have any questions or need help, feel free to:

- Open an issue on GitHub
- Reach out on Twitter
- Send an email to: your.email@example.com

---

**Happy blogging! 📝✨**

Made with ❤️ by Yaswanth Ampolu
