/**
 * Development server starter script
 * This script starts both the backend and frontend servers in development mode
 */

import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if .env file exists in backend, if not create it from .env.example
const envPath = path.join(__dirname, 'backend', '.env');
const envExamplePath = path.join(__dirname, 'backend', '.env.example');

if (!fs.existsSync(envPath) && fs.existsSync(envExamplePath)) {
  console.log('Creating .env file from .env.example...');
  fs.copyFileSync(envExamplePath, envPath);
}

// Function to start a process
function startProcess(command, args, name, cwd) {
  console.log(`Starting ${name}...`);
  
  const proc = spawn(command, args, { 
    cwd: cwd || __dirname,
    shell: true,
    stdio: 'pipe'
  });
  
  proc.stdout.on('data', (data) => {
    console.log(`[${name}] ${data.toString().trim()}`);
  });
  
  proc.stderr.on('data', (data) => {
    console.error(`[${name}] ${data.toString().trim()}`);
  });
  
  proc.on('close', (code) => {
    console.log(`${name} process exited with code ${code}`);
  });
  
  return proc;
}

// Start backend server
const backendPath = path.join(__dirname, 'backend');
const backendProcess = startProcess('npm', ['run', 'dev'], 'Backend', backendPath);

// Start frontend server
const frontendProcess = startProcess('npm', ['start'], 'Frontend');

// Handle process termination
process.on('SIGINT', () => {
  console.log('Shutting down development servers...');
  backendProcess.kill();
  frontendProcess.kill();
  process.exit(0);
});

console.log('\n🚀 Development servers started!');
console.log('📱 Frontend: http://localhost:3000');
console.log('🖥️ Backend: http://localhost:5000\n');
