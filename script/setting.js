// Database simulation using localStorage
const database = {
  getSettings: () => {
      const settings = localStorage.getItem('varzCommunitySettings');
      return settings ? JSON.parse(settings) : {
          notifications: true,
          language: 'en',
          timezone: 'UTC',
          theme: 'light'
      };
  },
  saveSettings: (settings) => {
      localStorage.setItem('varzCommunitySettings', JSON.stringify(settings));
      return true;
  }
};

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const menuContent = document.getElementById('menuContent');
const mainContent = document.getElementById('mainContent');
const settingsBtn = document.getElementById('settingsBtn');
const profileBtn = document.getElementById('profileBtn');
const logoutBtn = document.getElementById('logoutBtn');

// Toggle menu
menuToggle.addEventListener('click', function(e) {
  e.stopPropagation();
  this.classList.toggle('active');
  menuContent.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  if (!menuContent.contains(event.target) && event.target !== menuToggle) {
      menuToggle.classList.remove('active');
      menuContent.classList.remove('active');
  }
});

// Load settings page
function loadSettingsPage() {
  const settings = database.getSettings();
  
  const settingsHTML = `
      <div class="settings-container">
          <h1><i class="fas fa-cog"></i> Settings</h1>
          
          <form id="settingsForm">
              <div class="setting-group">
                  <label for="notifications">
                      <i class="fas fa-bell"></i> Notifications
                  </label>
                  <input type="checkbox" id="notifications" name="notifications" 
                      ${settings.notifications ? 'checked' : ''}>
              </div>
              
              <div class="setting-group">
                  <label for="language">
                      <i class="fas fa-language"></i> Language
                  </label>
                  <select id="language" name="language">
                      <option value="en" ${settings.language === 'en' ? 'selected' : ''}>English</option>
                      <option value="id" ${settings.language === 'id' ? 'selected' : ''}>Bahasa Indonesia</option>
                      <option value="es" ${settings.language === 'es' ? 'selected' : ''}>Español</option>
                  </select>
              </div>
              
              <div class="setting-group">
                  <label for="timezone">
                      <i class="fas fa-globe"></i> Timezone
                  </label>
                  <select id="timezone" name="timezone">
                      <option value="UTC" ${settings.timezone === 'UTC' ? 'selected' : ''}>UTC</option>
                      <option value="GMT" ${settings.timezone === 'GMT' ? 'selected' : ''}>GMT</option>
                      <option value="WIB" ${settings.timezone === 'WIB' ? 'selected' : ''}>WIB (UTC+7)</option>
                  </select>
              </div>
              
              <button type="submit" class="save-btn">
                  <i class="fas fa-save"></i> Save Settings
              </button>
          </form>
      </div>
  `;
  
  mainContent.innerHTML = settingsHTML;
  
  // Handle form submission
  document.getElementById('settingsForm')?.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const updatedSettings = {
          notifications: document.getElementById('notifications').checked,
          language: document.getElementById('language').value,
          timezone: document.getElementById('timezone').value
      };
      
      if (database.saveSettings(updatedSettings)) {
          alert('Settings saved successfully!');
      } else {
          alert('Failed to save settings');
      }
  });
}

// Navigation
settingsBtn.addEventListener('click', function(e) {
  e.preventDefault();
  loadSettingsPage();
  menuToggle.classList.remove('active');
  menuContent.classList.remove('active');
});

function Home() {
  loading.style.display = "block";

  setTimeout(() => {
      window.open('../mod.html');
      loading.style.display = "none";
  }, 1000);
}

// Load default page (settings)
loadSettingsPage();