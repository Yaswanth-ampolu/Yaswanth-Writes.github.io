---
layout: post
title: "How to Write a Blog Post - Template & Guide"
date: 2025-11-12 10:51:00 +0530
categories: [Blogging, Tutorial]
tags: [guide, template, how-to]
description: "A simple template and guide for creating new blog posts on this site"
author: Yaswanth Ampolu
---

# Welcome! This is Your Blog Post Template

This post serves as both a **template** and a **guide** for creating new blog posts on your Jekyll site.

## How to Create a New Post

### 1. File Name Format

Create a new file in the `_posts/` folder with this format:

```
YYYY-MM-DD-your-post-title.md
```

**Example:** `2025-11-12-my-first-post.md`

### 2. Front Matter (Copy This)

Every post must start with front matter (the section between the `---` lines at the top). Here's what you need:

```yaml
---
layout: post
title: "Your Post Title Here"
date: 2025-11-12 12:00:00 +0530
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
description: "A brief description of your post (good for SEO)"
author: Yaswanth Ampolu
---
```

### 3. Write Your Content

After the front matter, write your content using **Markdown**. Here are common formatting examples:

## Text Formatting

**Bold text** - use `**bold**`

*Italic text* - use `*italic*`

~~Strikethrough~~ - use `~~strikethrough~~`

## Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
```

## Lists

**Bullet List:**
- Item 1
- Item 2
  - Sub-item 2.1
  - Sub-item 2.2
- Item 3

**Numbered List:**
1. First item
2. Second item
3. Third item

## Links and Images

**Link:**
[Link text here](https://example.com)

**Image:**
![Image description](path/to/your/image.jpg)

Or use external images:
![Example](https://via.placeholder.com/400x200)

## Code Blocks

**Inline code:** Use `backticks` around code

**Code block with syntax highlighting:**

```python
def hello_world():
    print("Hello, World!")
    return True
```

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

## Quotes

> This is a blockquote.
> You can use it for quotes or important notes.
>
> — Author Name

## Horizontal Line

Use three dashes for a horizontal line:

---

## Tables

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |

## Emojis

You can use emojis directly: 🎉 🚀 💡 ✨ 📝 💻

## Publishing Your Post

### Method 1: Command Line

```bash
# 1. Create your post file
cd _posts/
nano 2025-11-12-my-post.md

# 2. Add, commit, and push
git add _posts/2025-11-12-my-post.md
git commit -m "Add new post: My Post Title"
git push origin main

# 3. Wait 2-3 minutes for GitHub Pages to deploy
```

### Method 2: GitHub Web Interface

1. Go to your repository on GitHub
2. Click on the `_posts/` folder
3. Click "Add file" → "Create new file"
4. Name it: `2025-11-12-my-post.md`
5. Paste your content (with front matter)
6. Click "Commit new file"
7. Wait 2-3 minutes for deployment

## Tips & Best Practices

### Good Post Titles
- ✅ "How to Learn Python in 30 Days"
- ✅ "My Journey into Web Development"
- ✅ "5 Productivity Tips That Changed My Life"

### Categories
Use 1-2 broad categories:
- `Personal`, `Technology`, `Productivity`, `Learning`, `Tutorial`, etc.

### Tags
Use 3-5 specific tags:
- `python`, `web-dev`, `tips`, `beginner-friendly`, etc.

### File Names
- ✅ `2025-11-12-learning-python.md`
- ❌ `2025-11-12-Learning_Python.MD`
- ❌ `my post.md`

## Example Post Structure

```markdown
---
layout: post
title: "My First Post"
date: 2025-11-12 12:00:00 +0530
categories: [Personal]
tags: [introduction, blogging]
description: "My first blog post"
---

# Introduction

Write your introduction here...

## Main Content

### Section 1
Your content...

### Section 2
More content...

## Conclusion

Wrap up your post...

---

*What did you think of this post? Let me know!*
```

## Need Help?

If you need to:
- **Preview locally:** Run `bundle exec jekyll serve` and visit `http://localhost:4000`
- **Check build status:** Go to repository → Actions tab
- **View your site:** Visit `https://yaswanth-ampolu.github.io/Yaswanth-Writes.github.io/`

---

**Now you're ready to start writing! Delete this template post and create your own.** ✨

Happy blogging! 🎉
