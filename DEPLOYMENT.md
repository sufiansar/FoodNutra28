# 🚀 FoodNutra - Deployment Guide

Complete guide for deploying your FoodNutra application to production.

## 📋 Pre-Deployment Checklist

- [ ] Backend runs successfully locally
- [ ] Frontend runs successfully locally
- [ ] API connection works between frontend and backend
- [ ] All dependencies are documented
- [ ] Environment variables are configured
- [ ] Code is version controlled (Git)
- [ ] Application tested on different devices

## 🎯 Deployment Options

### Option 1: Simple Deployment (Recommended for Beginners)

**Backend**: PythonAnywhere / Heroku
**Frontend**: Vercel / Netlify

### Option 2: Professional Deployment

**Backend**: AWS EC2 / DigitalOcean / Google Cloud
**Frontend**: Vercel / Netlify / AWS S3+CloudFront

### Option 3: All-in-One

**Both**: Single VPS (DigitalOcean, Linode, Vultr)

---

## 🔵 Option 1: Vercel (Frontend) + PythonAnywhere (Backend)

### Frontend Deployment on Vercel (FREE)

1. **Create Vercel Account**

   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Push Code to GitHub**

   ```bash
   cd frontend
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Import Project to Vercel**
   - Click "New Project" in Vercel
   - Import your GitHub repository
   - Framework Preset: Next.js
   - Root Directory: `frontend`
4. **Configure Environment Variables**

   - Add: `NEXT_PUBLIC_API_URL`
   - Value: Your backend URL (will set this after backend deployment)

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at: `your-project.vercel.app`

### Backend Deployment on PythonAnywhere (FREE Tier Available)

1. **Create PythonAnywhere Account**

   - Go to [pythonanywhere.com](https://www.pythonanywhere.com)
   - Sign up for free account

2. **Upload Files**

   - Go to "Files" tab
   - Create folder: `foodnutra`
   - Upload:
     - `Flask_API_With_CORS.py`
     - `best_models_per_label.pkl`
     - `preprocessor.pkl`
     - `Bangladeshi Regional Food Data Rajkumar.json`

3. **Install Dependencies**

   - Open "Bash console"

   ```bash
   cd foodnutra
   pip install --user flask flask-cors pandas numpy scikit-learn joblib
   ```

4. **Configure Web App**
   - Go to "Web" tab
   - Click "Add a new web app"
   - Choose "Flask"
   - Python version: 3.10
5. **WSGI Configuration**
   Edit `/var/www/yourusername_pythonanywhere_com_wsgi.py`:

   ```python
   import sys
   path = '/home/yourusername/foodnutra'
   if path not in sys.path:
       sys.path.append(path)

   from Flask_API_With_CORS import app as application
   ```

6. **Reload Web App**

   - Click "Reload" button
   - Your API is now live at: `yourusername.pythonanywhere.com`

7. **Update Frontend Environment**
   - Go back to Vercel
   - Update `NEXT_PUBLIC_API_URL` to: `https://yourusername.pythonanywhere.com`
   - Redeploy frontend

---

## 🟢 Option 2: Netlify (Frontend) + Heroku (Backend)

### Backend on Heroku

1. **Prepare Files**
   Create `Procfile` in Backend folder:

   ```
   web: gunicorn Flask_API_With_CORS:app
   ```

   Create `runtime.txt`:

   ```
   python-3.10.12
   ```

   Update `requirements.txt`:

   ```
   flask
   flask-cors
   gunicorn
   pandas
   numpy
   scikit-learn
   joblib
   ```

2. **Deploy to Heroku**

   ```bash
   cd Backend
   heroku login
   heroku create your-app-name
   git init
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

3. **Note Your URL**: `your-app-name.herokuapp.com`

### Frontend on Netlify

1. **Build Frontend**

   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy**

   - Drag & drop `.next` folder to [netlify.com/drop](https://app.netlify.com/drop)
   - Or connect GitHub repository

3. **Configure Environment**
   - Site Settings → Environment Variables
   - Add: `NEXT_PUBLIC_API_URL=https://your-app-name.herokuapp.com`

---

## 🟠 Option 3: VPS Deployment (DigitalOcean/Linode)

### 1. Create Droplet/VPS

- Ubuntu 22.04 LTS
- 1GB RAM minimum
- $5-10/month

### 2. Initial Server Setup

```bash
# SSH into server
ssh root@your-server-ip

# Update system
apt update && apt upgrade -y

# Install Python and Node.js
apt install python3-pip python3-venv nginx -y
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install nodejs -y

# Create user
adduser foodnutra
usermod -aG sudo foodnutra
su - foodnutra
```

### 3. Backend Setup

```bash
# Clone or upload files
mkdir -p /home/foodnutra/backend
cd /home/foodnutra/backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install flask flask-cors gunicorn pandas numpy scikit-learn joblib

# Test
gunicorn --bind 0.0.0.0:5000 Flask_API_With_CORS:app
```

### 4. Create Systemd Service

Create `/etc/systemd/system/foodnutra.service`:

```ini
[Unit]
Description=FoodNutra Flask API
After=network.target

[Service]
User=foodnutra
WorkingDirectory=/home/foodnutra/backend
Environment="PATH=/home/foodnutra/backend/venv/bin"
ExecStart=/home/foodnutra/backend/venv/bin/gunicorn --workers 3 --bind 0.0.0.0:5000 Flask_API_With_CORS:app

[Install]
WantedBy=multi-user.target
```

Enable and start:

```bash
sudo systemctl enable foodnutra
sudo systemctl start foodnutra
sudo systemctl status foodnutra
```

### 5. Frontend Setup

```bash
cd /home/foodnutra
git clone YOUR_FRONTEND_REPO frontend
cd frontend
npm install
npm run build

# Install PM2 for process management
sudo npm install -g pm2
pm2 start npm --name "foodnutra-frontend" -- start
pm2 save
pm2 startup
```

### 6. Nginx Configuration

Create `/etc/nginx/sites-available/foodnutra`:

```nginx
# Frontend
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Backend API
server {
    listen 80;
    server_name api.your-domain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

Enable site:

```bash
sudo ln -s /etc/nginx/sites-available/foodnutra /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 7. SSL Certificate (FREE with Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com -d api.your-domain.com
```

---

## 🔐 Security Best Practices

### Backend

1. **Remove Debug Mode**

   ```python
   app.run(debug=False)
   ```

2. **Set CORS Origins**

   ```python
   CORS(app, origins=["https://your-frontend-domain.com"])
   ```

3. **Environment Variables**

   ```python
   import os
   SECRET_KEY = os.environ.get('SECRET_KEY')
   ```

4. **Rate Limiting**
   ```python
   from flask_limiter import Limiter
   limiter = Limiter(app, default_limits=["200 per day", "50 per hour"])
   ```

### Frontend

1. **Environment Variables**

   - Never commit `.env.local`
   - Use platform environment variables

2. **API Key Security**
   - Keep API keys in environment variables
   - Never expose in client-side code

---

## 📊 Monitoring & Maintenance

### Application Monitoring

- **Uptime**: UptimeRobot (free)
- **Errors**: Sentry (free tier)
- **Analytics**: Google Analytics

### Backend Monitoring

```bash
# Check service status
sudo systemctl status foodnutra

# View logs
sudo journalctl -u foodnutra -f

# PM2 monitoring
pm2 monit
```

### Database Backups (if added later)

```bash
# Backup models
tar -czf backup-$(date +%Y%m%d).tar.gz *.pkl *.json

# Automate with cron
0 2 * * * /path/to/backup-script.sh
```

---

## 🐛 Troubleshooting Deployment

### Frontend Issues

**Build Fails**

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

**API Connection Failed**

- Check `NEXT_PUBLIC_API_URL` is correct
- Ensure it has `https://` prefix
- Check CORS settings on backend

### Backend Issues

**Import Errors**

```bash
# Ensure all dependencies installed
pip list | grep flask
pip list | grep pandas
```

**Port Issues**

```bash
# Check what's using port
sudo lsof -i :5000
# Kill process if needed
sudo kill -9 PID
```

**Model Loading Errors**

- Ensure `.pkl` files are in correct directory
- Check file permissions
- Verify scikit-learn version matches

---

## 📈 Performance Optimization

### Frontend

1. Enable compression in Next.js
2. Optimize images
3. Use CDN for static assets
4. Enable caching headers

### Backend

1. Use gunicorn with multiple workers
2. Implement caching for predictions
3. Use connection pooling
4. Optimize database queries (if added)

---

## 💰 Cost Estimation

### Free Tier (Good for Demo/Testing)

- **Frontend**: Vercel/Netlify (Free)
- **Backend**: PythonAnywhere (Free tier)
- **Total**: $0/month

### Hobby Tier (Good for Small Projects)

- **Frontend**: Vercel (Free)
- **Backend**: Heroku (Free tier ended, use Railway $5/mo)
- **Total**: $5/month

### Production Tier

- **Frontend**: Vercel Pro ($20/month)
- **Backend**: DigitalOcean Droplet ($10-20/month)
- **Domain**: $10-15/year
- **SSL**: Free (Let's Encrypt)
- **Total**: $30-40/month

---

## ✅ Post-Deployment Checklist

- [ ] Application is accessible via public URL
- [ ] SSL certificate is installed (HTTPS)
- [ ] API endpoint works from frontend
- [ ] All features are functional
- [ ] Error handling works correctly
- [ ] Mobile responsiveness verified
- [ ] Performance is acceptable
- [ ] Monitoring is set up
- [ ] Backups are configured
- [ ] Documentation is updated with URLs

---

## 🎉 You're Live!

Congratulations! Your FoodNutra application is now deployed and accessible to users worldwide!

### Share Your App

- Frontend URL: `https://your-app.vercel.app`
- API URL: `https://your-api.herokuapp.com`

### Next Steps

1. Share with users for feedback
2. Monitor usage and errors
3. Iterate based on feedback
4. Add more features
5. Scale as needed

---

**Need help? Check the troubleshooting section or open an issue!** 🚀
