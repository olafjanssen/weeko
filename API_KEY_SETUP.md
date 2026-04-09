# Google API Key Setup for Weeko

## For GitHub Pages Deployment

To use your own Google API key with GitHub Pages, you have several options:

### Option 1: Inject via GitHub Pages Environment (Recommended)

1. Go to your GitHub repository Settings → Environments
2. Create a new environment (e.g., `github-pages`)
3. Add an environment variable named `GOOGLE_API_KEY` with your API key value
4. In your GitHub Pages workflow, inject this variable into the HTML

Example workflow step:
```yaml
- name: Inject API key
  run: |
    sed -i "s|window.GOOGLE_API_KEY|'${{ secrets.GOOGLE_API_KEY }}'|g" index.html
```

### Option 2: Manual Injection

Add this script before the main script in your `index.html`:
```html
<script>
  window.GOOGLE_API_KEY = "YOUR_API_KEY_HERE";
</script>
```

### Option 3: Local Development

1. Open the Weeko app in your browser
2. Paste your Google API key in the "Optional: Paste Google API key" field
3. Click "Save & Load Calendar"
4. The API key will be saved in localStorage for future use

## Getting a Google API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the "Google Calendar API"
4. Go to "APIs & Services" → "Credentials"
5. Create a new API key
6. Restrict the API key to the Google Calendar API for security

## Security Notes

- **No hardcoded API key is provided** - you must supply your own
- API keys are subject to Google's usage limits and billing policies
- Keep your API keys secret and don't commit them to public repositories
- The application will not work without a valid API key