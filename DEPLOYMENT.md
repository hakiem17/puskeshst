# 🚀 Deployment Instructions

## GitHub Pages Setup

### 1. Enable GitHub Pages

1. **Go to your repository on GitHub**
   - Navigate to: https://github.com/hakiem17/puskesjshst

2. **Click on "Settings" tab**
   - Located in the repository navigation bar

3. **Scroll down to "Pages" section**
   - Found in the left sidebar under "Code and automation"

4. **Configure Pages source:**
   - Under "Source", select "Deploy from a branch"
   - Choose "main" or "master" branch
   - Select "/ (root)" folder
   - Click "Save"

5. **Wait for Build**
   - GitHub Pages will automatically build your site
   - This usually takes 1-2 minutes
   - You'll see a green checkmark when it's ready

### 2. Access Your Site

- **Main URL**: https://hakiem17.github.io/puskesjshst/
- **Landing Page**: https://hakiem17.github.io/puskesjshst/
- **Admin Panel**: https://hakiem17.github.io/puskesjshst/dashboard-admin.html
- **Test Page**: https://hakiem17.github.io/puskesjshst/test-deployment.html

## Local Development

### Option 1: Direct File Opening
```bash
# Simply open the HTML files in your browser
open index.html
open dashboard-admin.html
```

### Option 2: Python HTTP Server
```bash
# Navigate to project directory
cd puskesjshst

# Start Python HTTP server
python -m http.server 8000

# Visit http://localhost:8000
```

### Option 3: Node.js http-server
```bash
# Install http-server globally
npm install -g http-server

# Navigate to project directory
cd puskesjshst

# Start server
http-server -p 8000 -o

# Server will open automatically in browser
```

### Option 4: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Server will start automatically

## Custom Domain Setup

### 1. Add CNAME File
```bash
# Create CNAME file with your domain
echo "yourdomain.com" > CNAME

# Add and commit
git add CNAME
git commit -m "Add custom domain: yourdomain.com"
git push origin main
```

### 2. Configure DNS
- **Add CNAME record** pointing to `hakiem17.github.io`
- **Wait for DNS propagation** (up to 24 hours)
- **Verify domain** in GitHub Pages settings

### 3. HTTPS Configuration
- GitHub Pages automatically provides HTTPS
- Custom domains get HTTPS after DNS propagation
- Check "Enforce HTTPS" in repository settings

## Automated Deployment

### GitHub Actions
The repository includes a workflow file (`.github/workflows/deploy.yml`) that:
- Automatically deploys on push to main branch
- Builds and deploys to GitHub Pages
- Runs on every pull request for testing

### Manual Deployment Script
```bash
# Make script executable
chmod +x deploy.sh

# Run deployment script
./deploy.sh
```

## Troubleshooting

### Common Issues

#### 1. Site Not Loading
**Problem**: GitHub Pages URL returns 404
**Solutions**:
- Check if GitHub Pages is enabled in repository settings
- Verify the branch and folder are correctly selected
- Wait a few minutes for the build to complete
- Check the "Actions" tab for build errors

#### 2. 404 Errors
**Problem**: Pages return 404 errors
**Solutions**:
- Ensure all files are committed and pushed
- Check if `.nojekyll` file exists (prevents Jekyll processing)
- Verify file paths are correct
- Check for typos in URLs

#### 3. Styling Issues
**Problem**: CSS not loading or styling broken
**Solutions**:
- Check if `.nojekyll` file exists
- Verify CSS file paths are correct
- Check browser console for errors
- Ensure all assets are committed

#### 4. Custom Domain Not Working
**Problem**: Custom domain not redirecting
**Solutions**:
- Verify DNS CNAME record points to `username.github.io`
- Check domain configuration in GitHub Pages settings
- Wait for DNS propagation (up to 24 hours)
- Verify domain is not using HTTPS redirect

#### 5. Build Failures
**Problem**: GitHub Pages build fails
**Solutions**:
- Check the "Actions" tab for error details
- Verify all files are properly committed
- Check for syntax errors in HTML/CSS/JS
- Ensure no conflicting Jekyll files

### Debug Steps

1. **Check Repository Settings**
   - Go to Settings > Pages
   - Verify source branch and folder
   - Check for any error messages

2. **Check Actions Tab**
   - Look for failed builds
   - Check build logs for errors
   - Verify workflow permissions

3. **Check File Structure**
   - Ensure all files are committed
   - Verify file paths are correct
   - Check for case sensitivity issues

4. **Check Browser Console**
   - Open developer tools
   - Look for JavaScript errors
   - Check network tab for failed requests

## Performance Optimization

### 1. Enable Compression
GitHub Pages automatically compresses files, but you can optimize further:
- Minify CSS and JavaScript
- Optimize images
- Use efficient file formats

### 2. Cache Headers
GitHub Pages sets appropriate cache headers automatically:
- Static assets: 1 year
- HTML files: 10 minutes
- Custom headers can be set in `.htaccess` (if supported)

### 3. CDN Usage
- GitHub Pages uses a global CDN
- Files are served from the nearest location
- No additional configuration needed

## Security Considerations

### 1. HTTPS
- GitHub Pages automatically provides HTTPS
- Custom domains get HTTPS after DNS propagation
- Enable "Enforce HTTPS" in repository settings

### 2. Content Security Policy
- Set appropriate CSP headers
- Restrict resource loading
- Prevent XSS attacks

### 3. Sensitive Data
- Never commit sensitive information
- Use environment variables for configuration
- Keep API keys secure

## Monitoring and Analytics

### 1. GitHub Pages Analytics
- Enable GitHub Pages analytics in repository settings
- View visitor statistics
- Monitor page performance

### 2. Custom Analytics
- Add Google Analytics
- Use other analytics services
- Monitor user behavior

### 3. Error Monitoring
- Set up error tracking
- Monitor for 404 errors
- Track performance metrics

## Backup and Recovery

### 1. Repository Backup
- GitHub automatically backs up repositories
- Enable repository backups
- Keep local copies

### 2. Content Backup
- Export content regularly
- Keep backups of important data
- Document configuration changes

### 3. Disaster Recovery
- Have a recovery plan
- Test restoration procedures
- Keep documentation updated

## Support and Resources

### 1. GitHub Pages Documentation
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Troubleshooting](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-github-pages)
- [GitHub Pages Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

### 2. Community Support
- [GitHub Community Forum](https://github.community/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/github-pages)
- [GitHub Discussions](https://github.com/hakiem17/puskesjshst/discussions)

### 3. Contact Information
- **Email**: hakiem17@example.com
- **GitHub**: [@hakiem17](https://github.com/hakiem17)
- **Issues**: [GitHub Issues](https://github.com/hakiem17/puskesjshst/issues)

---

**Last Updated**: January 1, 2024  
**Version**: 1.0.0  
**Author**: Ahmad Hakim
