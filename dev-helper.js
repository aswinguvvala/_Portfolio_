#!/usr/bin/env node

/**
 * Development Helper Script
 * Provides utilities for better Next.js development server management
 */

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Clean development environment
function cleanEnv() {
  log('🧹 Cleaning development environment...', 'blue');
  
  const cleanCommands = [
    'rm -rf .next',
    'rm -rf node_modules/.cache',
    'rm -rf .turbo',
  ];
  
  cleanCommands.forEach(cmd => {
    try {
      exec(cmd, (error) => {
        if (!error) {
          log(`✓ Cleaned: ${cmd}`, 'green');
        }
      });
    } catch (err) {
      // Ignore errors for optional cleanup
    }
  });
}

// Kill processes on common ports
function killPorts() {
  log('🔌 Cleaning up ports...', 'blue');
  
  const ports = [3000, 3001, 3002];
  
  ports.forEach(port => {
    exec(`lsof -ti:${port} | xargs kill -9 2>/dev/null || true`, (error) => {
      if (!error) {
        log(`✓ Cleaned port ${port}`, 'green');
      }
    });
  });
}

// Monitor memory usage
function monitorMemory() {
  const used = process.memoryUsage();
  const mb = (bytes) => Math.round(bytes / 1024 / 1024 * 100) / 100;
  
  log('📊 Memory Usage:', 'yellow');
  console.log(`  RSS: ${mb(used.rss)} MB`);
  console.log(`  Heap Used: ${mb(used.heapUsed)} MB`);
  console.log(`  Heap Total: ${mb(used.heapTotal)} MB`);
  console.log(`  External: ${mb(used.external)} MB`);
}

// Health check
function healthCheck() {
  log('🔍 Development Environment Health Check', 'bright');
  
  // Check if .next exists
  const nextExists = fs.existsSync('.next');
  log(`Next.js build directory: ${nextExists ? '✓ Exists' : '✗ Missing'}`, nextExists ? 'green' : 'yellow');
  
  // Check node_modules
  const nodeModulesExists = fs.existsSync('node_modules');
  log(`Node modules: ${nodeModulesExists ? '✓ Installed' : '✗ Missing'}`, nodeModulesExists ? 'green' : 'red');
  
  // Check package.json
  const packageExists = fs.existsSync('package.json');
  log(`Package.json: ${packageExists ? '✓ Found' : '✗ Missing'}`, packageExists ? 'green' : 'red');
  
  monitorMemory();
}

// Command line interface
const command = process.argv[2];

switch (command) {
  case 'clean':
    cleanEnv();
    break;
  case 'kill-ports':
    killPorts();
    break;
  case 'memory':
    monitorMemory();
    break;
  case 'health':
    healthCheck();
    break;
  case 'full-restart':
    log('🚀 Full development server restart...', 'bright');
    killPorts();
    setTimeout(() => {
      cleanEnv();
      setTimeout(() => {
        log('✓ Environment cleaned. Run npm run dev:stable to start server', 'green');
      }, 2000);
    }, 1000);
    break;
  default:
    log('🛠️  Development Helper Commands:', 'bright');
    log('  node dev-helper.js clean         - Clean build cache', 'blue');
    log('  node dev-helper.js kill-ports    - Kill processes on ports 3000-3002', 'blue');
    log('  node dev-helper.js memory        - Show memory usage', 'blue');
    log('  node dev-helper.js health        - Run health check', 'blue');
    log('  node dev-helper.js full-restart  - Complete cleanup and restart prep', 'blue');
}