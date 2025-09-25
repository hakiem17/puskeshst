#!/bin/bash

# Setup script for GitHub repository
# This script helps set up the GitHub repository with proper configuration

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

echo "🏥 Setting up Puskesmas Modern GitHub Repository..."

# Check if git is installed
if ! command -v git &> /dev/null; then
    print_error "Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    print_status "Initializing git repository..."
    git init
    print_success "Git repository initialized."
fi

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    print_status "No remote origin found. Please add a remote origin first."
    print_status "Example: git remote add origin https://github.com/hakiem17/puskesjshst.git"
    read -p "Enter your GitHub repository URL: " remote_url
    if [ -n "$remote_url" ]; then
        git remote add origin "$remote_url"
        print_success "Remote origin added: $remote_url"
    else
        print_error "No remote URL provided. Exiting."
        exit 1
    fi
fi

# Get remote URL
REMOTE_URL=$(git remote get-url origin)
print_status "Remote URL: $REMOTE_URL"

# Extract repository name and username
REPO_NAME=$(basename "$REMOTE_URL" .git)
USER_NAME=$(echo "$REMOTE_URL" | sed -n 's/.*github.com[:/]\([^/]*\)\/.*/\1/p')

print_status "Repository: $USER_NAME/$REPO_NAME"

# Create .gitattributes file
print_status "Creating .gitattributes file..."
cat > .gitattributes << EOF
# Auto detect text files and perform LF normalization
* text=auto

# HTML files
*.html text eol=lf

# CSS files
*.css text eol=lf

# JavaScript files
*.js text eol=lf

# JSON files
*.json text eol=lf

# Markdown files
*.md text eol=lf

# YAML files
*.yml text eol=lf
*.yaml text eol=lf

# XML files
*.xml text eol=lf

# Binary files
*.ico binary
*.png binary
*.jpg binary
*.jpeg binary
*.gif binary
*.svg binary
*.woff binary
*.woff2 binary
*.ttf binary
*.eot binary

# Archive files
*.zip binary
*.tar.gz binary
*.rar binary

# Executable files
*.sh text eol=lf
*.bat text eol=crlf
*.cmd text eol=crlf
EOF

print_success ".gitattributes file created."

# Create .gitattributes for line endings
print_status "Configuring line endings..."
git config core.autocrlf input
git config core.safecrlf true

# Add all files
print_status "Adding all files to git..."
git add .

# Check if there are changes to commit
if ! git diff-index --quiet HEAD --; then
    print_status "Committing initial files..."
    git commit -m "Initial commit: Puskesmas Modern - Sistem Manajemen Puskesmas

- 🏥 Admin panel dengan dashboard modern
- 🌐 Landing page responsif dengan hero carousel
- 🎨 Dark/Light mode toggle
- 📱 Responsive design untuk semua device
- 🖼️ Image upload dengan preview functionality
- 💾 LocalStorage integration untuk data persistence
- 🔔 Notification system
- 📊 Animated statistics counter
- 🎯 Smooth scrolling navigation
- 📝 Contact form dengan validasi
- 🎪 Hero carousel dengan auto-play
- 📋 CRUD operations untuk semua konten
- 🎨 Modern UI/UX design
- 🔧 Mobile-friendly admin interface
- 📱 Touch-friendly controls
- ⚡ Fast loading performance
- 🎨 CSS Grid dan Flexbox layout
- 🎯 SEO optimized structure
- 📊 Dynamic content loading dari admin panel

Technologies used:
- HTML5, CSS3, JavaScript ES6+
- Font Awesome icons
- LocalStorage API
- Responsive Grid Layout
- Mobile-first approach
- Cross-browser compatibility

Author: Ahmad Hakim
License: MIT"
    
    print_success "Initial commit created."
else
    print_warning "No changes to commit."
fi

# Create main branch if it doesn't exist
CURRENT_BRANCH=$(git branch --show-current)
if [ -z "$CURRENT_BRANCH" ]; then
    print_status "Creating main branch..."
    git checkout -b main
    print_success "Main branch created."
fi

# Push to remote
print_status "Pushing to remote repository..."
git push -u origin main

if [ $? -eq 0 ]; then
    print_success "Successfully pushed to remote repository."
else
    print_error "Failed to push to remote repository."
    exit 1
fi

# Create GitHub Pages configuration
print_status "Creating GitHub Pages configuration..."

# Create .nojekyll file to disable Jekyll
touch .nojekyll
git add .nojekyll
git commit -m "Add .nojekyll file for GitHub Pages"

# Create CNAME file if custom domain is provided
read -p "Do you have a custom domain for GitHub Pages? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    read -p "Enter your custom domain: " custom_domain
    if [ -n "$custom_domain" ]; then
        echo "$custom_domain" > CNAME
        git add CNAME
        git commit -m "Add custom domain: $custom_domain"
        print_success "Custom domain configured: $custom_domain"
    fi
fi

# Push additional changes
git push origin main

# Provide GitHub Pages URL
GITHUB_PAGES_URL="https://$USER_NAME.github.io/$REPO_NAME"
print_success "GitHub Pages URL: $GITHUB_PAGES_URL"

# Create deployment instructions
print_status "Creating deployment instructions..."
cat > DEPLOYMENT.md << EOF
# 🚀 Deployment Instructions

## GitHub Pages Setup

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch
   - Select "/ (root)" folder
   - Click "Save"

2. **Wait for Build:**
   - GitHub Pages will automatically build your site
   - This usually takes 1-2 minutes
   - You'll see a green checkmark when it's ready

3. **Access Your Site:**
   - Your site will be available at: $GITHUB_PAGES_URL
   - Landing page: $GITHUB_PAGES_URL/
   - Admin panel: $GITHUB_PAGES_URL/dashboard-admin.html

## Local Development

1. **Clone Repository:**
   \`\`\`bash
   git clone $REMOTE_URL
   cd $REPO_NAME
   \`\`\`

2. **Open in Browser:**
   \`\`\`bash
   # Option 1: Direct file opening
   open index.html
   
   # Option 2: Using Python HTTP server
   python -m http.server 8000
   # Then visit http://localhost:8000
   
   # Option 3: Using Node.js http-server
   npx http-server -p 8000 -o
   \`\`\`

## Custom Domain (Optional)

If you have a custom domain:

1. **Add CNAME file:**
   \`\`\`bash
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push origin main
   \`\`\`

2. **Configure DNS:**
   - Add a CNAME record pointing to \`$USER_NAME.github.io\`
   - Wait for DNS propagation (up to 24 hours)

## Troubleshooting

- **Site not loading:** Check if GitHub Pages is enabled in repository settings
- **404 errors:** Ensure all files are committed and pushed
- **Styling issues:** Check if .nojekyll file exists
- **Custom domain not working:** Verify DNS configuration

## Support

For issues and questions:
- GitHub Issues: https://github.com/$USER_NAME/$REPO_NAME/issues
- Email: hakiem17@example.com
EOF

git add DEPLOYMENT.md
git commit -m "Add deployment instructions"
git push origin main

print_success "Deployment instructions created."

# Summary
echo
print_success "🎉 GitHub repository setup completed!"
echo
print_status "Summary:"
print_status "├── Repository: $USER_NAME/$REPO_NAME"
print_status "├── Remote URL: $REMOTE_URL"
print_status "├── GitHub Pages URL: $GITHUB_PAGES_URL"
print_status "├── Landing Page: $GITHUB_PAGES_URL/"
print_status "├── Admin Panel: $GITHUB_PAGES_URL/dashboard-admin.html"
print_status "└── Deployment Guide: DEPLOYMENT.md"
echo
print_status "Next steps:"
print_status "1. Enable GitHub Pages in repository settings"
print_status "2. Wait for GitHub Pages to build (1-2 minutes)"
print_status "3. Visit your GitHub Pages URL to verify deployment"
print_status "4. Update repository description and topics"
print_status "5. Add a GitHub Pages badge to your README"
echo
print_success "Happy coding! 🚀"
