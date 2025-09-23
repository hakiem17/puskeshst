#!/bin/bash

echo "🏥 PUSKESMAS MODERN - STARTING..."
echo "=================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if MongoDB is running
if ! pgrep -x "mongod" > /dev/null; then
    echo "⚠️  MongoDB is not running. Please start MongoDB first."
    echo "   On macOS: brew services start mongodb-community"
    echo "   On Ubuntu: sudo systemctl start mongod"
    echo "   On Windows: net start MongoDB"
    echo ""
    echo "Starting without MongoDB..."
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo "🎉 Setup complete! Starting the application..."
echo ""
echo "🌐 Website will be available at: http://localhost:5000"
echo "📊 API Health Check: http://localhost:5000/api/health"
echo ""
echo "Press Ctrl+C to stop the application"
echo ""

# Start the application
npm run dev
