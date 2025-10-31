---
layout: post
title: "Building Modern Websites with Jekyll: A Complete Guide"
date: 2024-10-30 09:15:00 +0530
categories: [Technology, Web Development]
tags: [jekyll, static-sites, github-pages, web-development, tutorial]
description: "A comprehensive guide to building fast, modern websites with Jekyll and hosting them for free on GitHub Pages."
author: Yaswanth Ampolu
---

Static site generators have revolutionized the way we build websites. Among them, **Jekyll** stands out as one of the most popular and powerful options, especially when combined with **GitHub Pages** for free hosting. This is exactly the stack I used to build this blog!

## What is Jekyll?

Jekyll is a static site generator written in Ruby. It takes text written in your favorite markup language (Markdown, HTML, etc.) and uses layouts to create a static website. The result? A fast, secure, and maintainable website without the complexity of databases or server-side processing.

### Why Choose Jekyll?

**Advantages:**
- ✅ **Free hosting** with GitHub Pages
- ✅ **Lightning fast** - no database queries
- ✅ **Secure** - no server-side code to exploit
- ✅ **Version control** - your entire site is in Git
- ✅ **Markdown support** - write content easily
- ✅ **Powerful templating** with Liquid
- ✅ **Large ecosystem** of themes and plugins

**Best for:**
- Blogs and personal websites
- Documentation sites
- Project portfolios
- Landing pages
- Small business websites

## Getting Started

### Prerequisites

You'll need:
- Ruby (2.7 or higher)
- RubyGems
- GCC and Make
- A text editor
- Git and GitHub account (for deployment)

### Installation

#### On macOS:

```bash
# Install Ruby using Homebrew
brew install ruby

# Add Ruby to your PATH
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc

# Install Jekyll and Bundler
gem install jekyll bundler
```

#### On Ubuntu/Debian:

```bash
# Install Ruby and other dependencies
sudo apt-get install ruby-full build-essential zlib1g-dev

# Avoid installing gems as root
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Install Jekyll and Bundler
gem install jekyll bundler
```

#### On Windows:

Download and install Ruby using [RubyInstaller](https://rubyinstaller.org/), then:

```bash
gem install jekyll bundler
```

## Creating Your First Jekyll Site

### Quick Start

```bash
# Create a new Jekyll site
jekyll new my-awesome-site

# Navigate to the directory
cd my-awesome-site

# Build and serve the site
bundle exec jekyll serve
```

Visit `http://localhost:4000` and you'll see your site!

### Understanding the Structure

A typical Jekyll site looks like this:

```
my-awesome-site/
├── _config.yml          # Configuration file
├── _posts/              # Blog posts
│   └── 2024-10-30-welcome.md
├── _layouts/            # Page templates
│   ├── default.html
│   ├── post.html
│   └── page.html
├── _includes/           # Reusable components
│   ├── header.html
│   ├── footer.html
│   └── navigation.html
├── _sass/               # Sass partials
│   └── main.scss
├── assets/              # Static files
│   ├── css/
│   ├── js/
│   └── images/
├── _site/               # Generated site (don't edit!)
├── index.html           # Homepage
├── about.md             # About page
└── Gemfile              # Ruby dependencies
```

## Key Concepts

### 1. Front Matter

Every Jekyll page starts with YAML front matter:

```yaml
---
layout: post
title: "My Awesome Post"
date: 2024-10-30
categories: [Technology, Tutorial]
tags: [jekyll, web-dev]
---
```

This metadata controls how Jekyll processes the page.

### 2. Layouts

Layouts are templates that wrap your content. Example `_layouts/post.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>{{ page.title }}</title>
  </head>
  <body>
    <article>
      <h1>{{ page.title }}</h1>
      <time>{{ page.date | date: "%B %d, %Y" }}</time>
      {{ content }}
    </article>
  </body>
</html>
```

### 3. Includes

Reusable components you can insert anywhere:

```liquid
{% include header.html %}
{% include navigation.html %}
```

### 4. Liquid Templating

Jekyll uses Liquid for dynamic content:

```liquid
<!-- Loop through posts -->
{% for post in site.posts %}
  <h2>{{ post.title }}</h2>
  <p>{{ post.excerpt }}</p>
{% endfor %}

<!-- Conditional -->
{% if page.featured %}
  <span class="badge">Featured</span>
{% endif %}
```

## Building a Blog

### Creating Posts

Posts go in `_posts/` with the format: `YYYY-MM-DD-title.md`

Example: `_posts/2024-10-30-my-first-post.md`

```markdown
---
layout: post
title: "My First Post"
date: 2024-10-30 10:00:00 +0530
categories: [Blogging]
---

# Hello World!

This is my first blog post using Jekyll.

## Why Jekyll?

It's simple, fast, and powerful...
```

### Displaying Posts

Create `index.html`:

```html
---
layout: default
title: Blog
---

<div class="posts">
  {% for post in site.posts %}
    <article class="post">
      <h2>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </h2>
      <time>{{ post.date | date: "%B %d, %Y" }}</time>
      <p>{{ post.excerpt }}</p>
    </article>
  {% endfor %}
</div>
```

## Advanced Features

### Pagination

Add to `_config.yml`:

```yaml
plugins:
  - jekyll-paginate

paginate: 10
paginate_path: "/blog/page:num/"
```

Use in your template:

```liquid
{% for post in paginator.posts %}
  <!-- Post content -->
{% endfor %}

<!-- Pagination links -->
{% if paginator.total_pages > 1 %}
  <div class="pagination">
    {% if paginator.previous_page %}
      <a href="{{ paginator.previous_page_path }}">Previous</a>
    {% endif %}

    <span>Page {{ paginator.page }} of {{ paginator.total_pages }}</span>

    {% if paginator.next_page %}
      <a href="{{ paginator.next_page_path }}">Next</a>
    {% endif %}
  </div>
{% endif %}
```

### Categories and Tags

Organize posts by categories:

```liquid
{% for category in site.categories %}
  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
```

### Collections

For content types beyond posts:

```yaml
# _config.yml
collections:
  projects:
    output: true
    permalink: /projects/:name
```

### Data Files

Store structured data in `_data/`:

```yaml
# _data/navigation.yml
- name: Home
  link: /
- name: About
  link: /about
- name: Blog
  link: /blog
```

Use in templates:

```liquid
<nav>
  {% for item in site.data.navigation %}
    <a href="{{ item.link }}">{{ item.name }}</a>
  {% endfor %}
</nav>
```

## Styling Your Site

### Using Sass

Jekyll has built-in Sass support. Create `assets/css/main.scss`:

```scss
---
---

// Variables
$primary-color: #3b82f6;
$font-family: 'Inter', sans-serif;

// Base styles
body {
  font-family: $font-family;
  color: #333;
  line-height: 1.6;
}

// Components
@import 'components/navigation';
@import 'components/post-card';
```

### Responsive Design

```scss
// Mobile first
.container {
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }
}
```

## Deploying to GitHub Pages

### Step 1: Create Repository

Create a repo named `username.github.io`

### Step 2: Configure Jekyll

Add to `_config.yml`:

```yaml
url: "https://username.github.io"
baseurl: ""

# GitHub Pages uses these by default
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap
```

### Step 3: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to repository Settings
2. Navigate to Pages
3. Select source: `main` branch
4. Save

Your site will be live at `https://username.github.io` in a few minutes!

## Performance Optimization

### 1. Minimize Assets

```yaml
# _config.yml
sass:
  style: compressed
```

### 2. Lazy Load Images

```html
<img src="placeholder.jpg" data-src="actual-image.jpg" class="lazy">

<script>
  // Intersection Observer for lazy loading
  const images = document.querySelectorAll('.lazy');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  });
  images.forEach(img => observer.observe(img));
</script>
```

### 3. Use Jekyll Environment

```liquid
{% if jekyll.environment == "production" %}
  <!-- Production-only code (analytics, etc.) -->
{% endif %}
```

Build for production:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

## SEO Optimization

### Install SEO Plugin

Add to `Gemfile`:

```ruby
gem 'jekyll-seo-tag'
```

Add to `_config.yml`:

```yaml
plugins:
  - jekyll-seo-tag

# SEO settings
title: My Awesome Blog
description: A blog about technology and life
author: Your Name
twitter:
  username: yourusername
  card: summary_large_image
```

Add to layout:

```html
<head>
  {% seo %}
</head>
```

## Common Pitfalls and Solutions

### Problem: Changes Not Showing

**Solution**:
- Clear `_site/` folder
- Restart Jekyll server
- Check `_config.yml` is correct

### Problem: Slow Build Times

**Solution**:
- Use `--incremental` flag
- Exclude unnecessary files
- Limit posts in development

```yaml
# _config.yml
exclude:
  - node_modules
  - vendor

# Development only
limit_posts: 10
```

### Problem: GitHub Pages Build Fails

**Solution**:
- Check GitHub Pages supported plugins
- Validate `_config.yml` syntax
- Review build logs in repository

## Useful Plugins

```ruby
# Gemfile
group :jekyll_plugins do
  gem "jekyll-feed"           # RSS feed
  gem "jekyll-seo-tag"        # SEO optimization
  gem "jekyll-sitemap"        # Sitemap generation
  gem "jekyll-paginate"       # Pagination
  gem "jekyll-archives"       # Category/tag archives
  gem "jekyll-redirect-from"  # Redirects
end
```

## Resources for Learning More

- **Official Docs**: [jekyllrb.com](https://jekyllrb.com)
- **Jekyll Themes**: [jekyllthemes.io](https://jekyllthemes.io)
- **Liquid Docs**: [shopify.github.io/liquid](https://shopify.github.io/liquid/)
- **GitHub Pages Docs**: [docs.github.com/pages](https://docs.github.com/pages)

## Conclusion

Jekyll is a powerful tool for building fast, secure, and maintainable websites. Combined with GitHub Pages, you get free hosting and automatic deployments.

Whether you're building a personal blog, documentation site, or portfolio, Jekyll provides the perfect balance of simplicity and flexibility.

### Key Takeaways

1. **Jekyll is powerful yet simple** - Perfect for blogs and static sites
2. **GitHub Pages is free** - No hosting costs
3. **Markdown makes writing easy** - Focus on content, not HTML
4. **Liquid is flexible** - Create dynamic static sites
5. **Git-based workflow** - Version control for your entire site
6. **Fast and secure** - No databases or server-side code

---

## Next Steps

Ready to build your Jekyll site? Here's what to do:

1. Install Jekyll locally
2. Create a new site and explore the structure
3. Customize layouts and styles
4. Write your first post
5. Deploy to GitHub Pages
6. Share it with the world!

---

*Are you using Jekyll? What's your favorite feature? Let me know in the comments or reach out on social media!*
