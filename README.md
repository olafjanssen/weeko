# Weeko - Simple Calendar Viewer

A lightweight, elegant calendar viewer that works with Google Calendar public calendars.

## 🚀 Quick Start

1. **Make your Google Calendar public**
   - Go to Google Calendar
   - Find your calendar in the left sidebar
   - Click the 3 dots → **Settings and sharing**
   - Under "Access permissions", check **"Make available to public"**

2. **Get your Calendar ID**
   - Your calendar ID looks like: `your-name@group.calendar.google.com`
   - Or use a shareable link (the app will extract the ID automatically)

3. **Use the app**
   - Open `index.html` in your browser
   - Paste your calendar ID or shareable link
   - Click "Save & Load Calendar"

## 📁 Files

```
weeko/
├── index.html          # Main application
├── js/
│   ├── weeko.js        # Calendar rendering logic
│   ├── alarmoverlay.js  # Alarm overlay functionality
│   └── calendar-config.js # Configuration and localStorage
├── css/
│   ├── weeko.css        # Main calendar styling
│   └── calendar-config.css # Configuration UI styling
└── README.md          # This file
```
=======

## 🔧 Configuration

The app uses **localStorage** to remember your calendar ID, so you only need to set it once.

### Supported Input Formats

1. **Direct Calendar ID**: `your-calendar@group.calendar.google.com`
2. **Shareable Link**: `https://calendar.google.com/calendar?cid=XXX`
3. **Base64 encoded**: The app automatically decodes base64 calendar IDs

## 🌐 GitHub Pages

This app is designed to work on GitHub Pages! Just:

1. Fork this repository
2. Enable GitHub Pages in your repo settings
3. Visit your `username.github.io/repo-name`
4. Enter your calendar ID

## 📱 Mobile Friendly

The app works great on mobile devices:
- Responsive design
- Touch-friendly interface
- Works offline after first load (except calendar data)

## 🔒 Privacy

- **No authentication required** - Uses public calendar access
- **No data tracking** - Everything runs in your browser
- **Local storage only** - Your calendar ID is stored only in your browser

## 🎨 Customization

You can customize:
- `calendar-config.css` - Change colors, layout, etc.
- `js/weeko.js` - Modify calendar rendering
- `calendar-config.js` - Adjust configuration behavior

## 🐛 Troubleshooting

**Calendar not loading?**
- Make sure your calendar is truly public (Settings → Access permissions → "Make available to public")
- Check browser console (F12 → Console) for specific error messages
- Try refreshing the page
- Clear your browser cache and localStorage

**Common Errors:**

`gapi.client.calendar is undefined`:
- The Google API hasn't loaded yet
- Wait a few seconds and it should retry automatically
- Check your internet connection

`Cannot read property 'events' of undefined`:
- Similar to above, API not fully loaded
- The app has automatic retry logic

`Invalid calendar ID`:
- Make sure your ID ends with `@group.calendar.google.com`
- If using a shareable link, it should contain `?cid=` parameter

**"App not verified" errors?**
- This app uses API key only, so no OAuth verification needed
- If you see this, you might be using the wrong calendar ID format
- Make sure you're using the public calendar approach, not OAuth

**Debugging Tips:**
1. Open browser console (F12 or Ctrl+Shift+I)
2. Check the "Console" tab for error messages
3. Look for messages like "Using calendar ID:" to verify your ID
4. Check the "Network" tab to see if API calls are being made

**Still having issues?**
- Try the test page: `test-calendar-id.html` to verify your calendar ID format
- Check if your calendar is accessible via: `https://calendar.google.com/calendar/ical/YOUR_ID/public/basic.ics`
- Make sure you don't have browser extensions blocking Google API
=======

## 📝 License

MIT License - Free to use and modify!

## 🤝 Contributing

Pull requests welcome! Especially for:
- Additional calendar providers
- More customization options
- Accessibility improvements
- Localization

---

**Enjoy your simple, elegant calendar!** 🗓️✨