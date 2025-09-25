#!/bin/bash

# Deploy script for Puskesmas Modern
# This script automates the deployment process to GitHub Pages

set -e

echo "🚀 Starting deployment process..."

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

# Check if git is installed
if ! command -v git &> /dev/null; then
    print_error "Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    print_error "Not in a git repository. Please initialize git first."
    exit 1
fi

# Check if we're on the correct branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ] && [ "$CURRENT_BRANCH" != "master" ]; then
    print_warning "You are not on main/master branch. Current branch: $CURRENT_BRANCH"
    read -p "Do you want to continue? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_error "Deployment cancelled."
        exit 1
    fi
fi

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    print_warning "You have uncommitted changes."
    read -p "Do you want to commit them? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_status "Committing changes..."
        git add .
        read -p "Enter commit message: " commit_message
        git commit -m "$commit_message"
        print_success "Changes committed."
    else
        print_error "Please commit or stash your changes before deploying."
        exit 1
    fi
fi

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    print_error "No remote origin found. Please add a remote origin first."
    exit 1
fi

# Get remote URL
REMOTE_URL=$(git remote get-url origin)
print_status "Remote URL: $REMOTE_URL"

# Check if it's a GitHub repository
if [[ $REMOTE_URL != *"github.com"* ]]; then
    print_warning "This doesn't appear to be a GitHub repository."
    read -p "Do you want to continue? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_error "Deployment cancelled."
        exit 1
    fi
fi

# Push to remote
print_status "Pushing to remote repository..."
git push origin $CURRENT_BRANCH

if [ $? -eq 0 ]; then
    print_success "Successfully pushed to remote repository."
else
    print_error "Failed to push to remote repository."
    exit 1
fi

# Check if GitHub Pages is enabled
print_status "Checking GitHub Pages configuration..."

# Extract repository name from remote URL
REPO_NAME=$(basename "$REMOTE_URL" .git)
USER_NAME=$(echo "$REMOTE_URL" | sed -n 's/.*github.com[:/]\([^/]*\)\/.*/\1/p')

print_status "Repository: $USER_NAME/$REPO_NAME"

# Provide GitHub Pages URL
GITHUB_PAGES_URL="https://$USER_NAME.github.io/$REPO_NAME"
print_success "GitHub Pages URL: $GITHUB_PAGES_URL"

# Check if GitHub Pages is accessible
print_status "Checking if GitHub Pages is accessible..."
if curl -s --head "$GITHUB_PAGES_URL" | head -n 1 | grep -q "200 OK"; then
    print_success "GitHub Pages is accessible!"
else
    print_warning "GitHub Pages might not be set up yet or still building."
    print_status "Please check your repository settings:"
    print_status "1. Go to your repository on GitHub"
    print_status "2. Click on 'Settings' tab"
    print_status "3. Scroll down to 'Pages' section"
    print_status "4. Select 'Deploy from a branch'"
    print_status "5. Choose 'main' or 'master' branch"
    print_status "6. Select '/ (root)' folder"
    print_status "7. Click 'Save'"
fi

# Create a simple test to verify deployment
print_status "Creating deployment test..."
cat > test-deployment.html << EOF
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deployment Test - Puskesmas Modern</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        .success { color: #28a745; }
        .info { color: #17a2b8; }
    </style>
</head>
<body>
    <h1 class="success">✅ Deployment Successful!</h1>
    <p class="info">Puskesmas Modern has been successfully deployed to GitHub Pages.</p>
    <p>Deployment time: $(date)</p>
    <p>Repository: $USER_NAME/$REPO_NAME</p>
    <p>Branch: $CURRENT_BRANCH</p>
    <p>GitHub Pages URL: <a href="$GITHUB_PAGES_URL">$GITHUB_PAGES_URL</a></p>
</body>
</html>
EOF

print_success "Deployment test created: test-deployment.html"

# Summary
echo
print_success "🎉 Deployment process completed!"
echo
print_status "Summary:"
print_status "├── Repository: $USER_NAME/$REPO_NAME"
print_status "├── Branch: $CURRENT_BRANCH"
print_status "├── GitHub Pages URL: $GITHUB_PAGES_URL"
print_status "├── Landing Page: $GITHUB_PAGES_URL/"
print_status "├── Admin Panel: $GITHUB_PAGES_URL/dashboard-admin.html"
print_status "└── Test Page: $GITHUB_PAGES_URL/test-deployment.html"
echo
print_status "Next steps:"
print_status "1. Wait a few minutes for GitHub Pages to build"
print_status "2. Visit your GitHub Pages URL to verify deployment"
print_status "3. Check the test page to confirm everything is working"
print_status "4. Update your repository description and topics"
print_status "5. Add a GitHub Pages badge to your README"
echo
print_success "Happy coding! 🚀"
