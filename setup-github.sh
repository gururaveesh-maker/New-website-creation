#!/bin/bash

echo "🚀 Setting up GitHub repository for WebCraft Pro Website Builder"
echo "================================================================"

# Check if repository exists
echo "Checking repository status..."
if curl -s -o /dev/null -w "%{http_code}" https://github.com/gururaveesh-maker/Website-Builder | grep -q "200"; then
    echo "✅ Repository exists and is accessible"
else
    echo "❌ Repository not found or not accessible"
    echo ""
    echo "Please ensure:"
    echo "1. You're logged into GitHub"
    echo "2. The repository 'Website-Builder' exists in your account"
    echo "3. The repository is public or you have access"
    echo ""
    echo "Repository URL: https://github.com/gururaveesh-maker/Website-Builder"
    echo ""
    read -p "Press Enter once you've confirmed the repository exists..."
fi

# Check Git status
echo ""
echo "📋 Current Git status:"
git status

# Check remote
echo ""
echo "🔗 Current remote configuration:"
git remote -v

# Try to push
echo ""
echo "🚀 Attempting to push to GitHub..."
if git push -u origin main --force; then
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🎉 Your repository is now live at:"
    echo "https://github.com/gururaveesh-maker/Website-Builder"
    echo ""
    echo "📦 Next steps:"
    echo "1. Deploy to Netlify: https://netlify.com"
    echo "2. Connect your GitHub repository"
    echo "3. Your site will be live in minutes!"
else
    echo "❌ Failed to push to GitHub"
    echo ""
    echo "Troubleshooting:"
    echo "1. Check if you have write access to the repository"
    echo "2. Ensure you're authenticated with GitHub"
    echo "3. Try creating the repository manually on GitHub first"
fi
