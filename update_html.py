import os
import re

privacy_en = """
        <!-- EN CONTENT -->
        <div lang="en">
          <p>
            At Charging Intelligence, we prioritize your privacy and the security of your personal data. This Privacy Policy is prepared to inform you about the data collected, processed, and protected while using our mobile application ("App") and website.
          </p>

          <h2>1. Information Collected and Purposes of Use</h2>
          <p>The following data may be processed for our app to provide its core functions:</p>
          <ul>
            <li><strong>Location Data (Precise / Approximate Location):</strong> Your device's GPS location data is used to show you the nearest electric vehicle charging stations on the map, calculate distances, and operate Apple CarPlay & Android Auto navigation. Your location data is not shared with third parties and is not stored on our servers for trip tracking purposes.</li>
            <li><strong>Device and Diagnostics Information:</strong> Anonymized device model, operating system version, and crash reports may be collected to monitor app performance, detect crashes, and improve the user experience.</li>
            <li><strong>User Preferences:</strong> Your favorite stations, filter selections (socket type, minimum kW power, etc.) are stored locally on your device or securely in our Firebase infrastructure if you are logged in.</li>
          </ul>

          <h2>2. Apple CarPlay & Android Auto Permissions</h2>
          <p>
            When using Apple CarPlay and Android Auto in-car systems, the App receives only the minimum telemetry information required from the vehicle multimedia system for driving and map display. No microphone or personal data is recorded through the vehicle systems.
          </p>

          <h2>3. Data Security</h2>
          <p>
            All data communications are encrypted with the latest SSL/TLS (HTTPS) protocols. Our server infrastructure is hosted in highly secure data centers that comply with international security standards (ISO 27001, SOC2).
          </p>

          <h2>4. Third-Party Integrations</h2>
          <p>
            Our app may use reliable map libraries such as Apple Maps, Google Maps, or Mapbox for map rendering operations and background services. These services are subject to their own privacy standards.
          </p>

          <h2>5. User Rights and Account Deletion</h2>
          <p>
            Under KVKK and GDPR; you have the right to access your data, request correction, and request the permanent deletion of your account and all data registered with it at any time.
          </p>
          <div class="legal-card-info">
            <strong>Account and Data Deletion Request:</strong><br>
            To delete your account and data, you can visit our <a href="support.html#delete-account" style="color: var(--brand-primary); text-decoration: underline;">Account Deletion Request</a> page or send an email directly to <a href="mailto:support@chargingintelligence.app" style="color: var(--brand-primary);">support@chargingintelligence.app</a>. Your request will be processed within 48 hours at the latest.
          </div>

          <h2>6. Contact Information</h2>
          <p>
            For your questions regarding our privacy policy or personal data, you can contact our Data Controller team:
          </p>
          <p>
            📧 <strong>Email:</strong> <a href="mailto:support@chargingintelligence.app" style="color: var(--brand-primary);">support@chargingintelligence.app</a><br>
            🌐 <strong>Web:</strong> <a href="https://chargingintelligence.app" style="color: var(--brand-primary);">https://chargingintelligence.app</a>
          </p>
        </div>
"""

terms_en = """
        <!-- EN CONTENT -->
        <div lang="en">
          <!-- Apple Standard EULA Notice Box -->
          <div class="legal-card-info">
            <h3 style="display: flex; align-items: center; gap: 8px;">
              <svg viewBox="0 0 170 170" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.07-7.66-7.83-11.87-14.28-5.55-8.49-9.87-17.65-12.98-27.49-3.11-9.83-4.66-19.34-4.66-28.53 0-14.38 3.59-26.24 10.77-35.59 7.18-9.35 16.27-14.15 27.27-14.42 4.14 0 8.89 1.13 14.26 3.39 5.37 2.26 9.17 3.44 11.39 3.55 1.74 0 5.69-1.29 11.86-3.87 6.17-2.58 11.19-3.72 15.07-3.44 14.7.74 25.75 6.46 33.15 17.16-12.87 7.78-19.19 18.36-18.96 31.73.23 10.45 4.14 19.14 11.72 26.06 7.58 6.92 16.48 10.97 26.7 12.16-2.22 6.75-4.83 13.51-7.84 20.28zM119.22 31.84c0-7.39 2.65-14.48 7.95-21.27 5.3-6.79 12.06-10.74 20.27-11.85.12 1.09.18 1.94.18 2.55 0 7.39-2.73 14.39-8.19 21-5.46 6.61-12.29 10.47-20.49 11.57-.06-.5-.12-1.17-.18-2z"/></svg>
              <span>Apple Standard End User License Agreement (EULA)</span>
            </h3>
            <p>
              Charging Intelligence is subject to Apple's Standard End User License Agreement (EULA) on the Apple iOS platform. You can visit the following link to review Apple's official license terms:
            </p>
            <p>
              👉 <strong>Apple Standard EULA:</strong> 
              <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" style="color: var(--brand-primary); text-decoration: underline;">
                https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
              </a>
            </p>
          </div>

          <h2>1. Scope of Service</h2>
          <p>
            Charging Intelligence ("App") is a navigation and information platform that offers electric vehicle drivers the ability to view station locations, live socket statuses, pricing tariffs of licensed charging operators across Turkey and Europe, and plan smart routes.
          </p>

          <h2>2. Information Accuracy and Operator Data</h2>
          <p>
            The charging station locations, socket availability statuses, and kWh tariffs presented in the App are compiled instantly from the open data sources of EPDK licensed charging operators and the API services of the relevant networks. Charging Intelligence cannot be held responsible for disruptions that may arise due to physical malfunctions at charging stations, power outages, or instant tariff changes caused by the operator. Drivers are advised to follow the physical guidance signs at the station before and during charging.
          </p>

          <h2>3. Driving Safety: Apple CarPlay & Android Auto</h2>
          <p>
            Charging Intelligence operates on in-car multimedia screens in accordance with safe driving principles via Apple CarPlay and Android Auto standards. However, it is entirely the driver's personal responsibility to obey all traffic rules, keep their attention on the road, and act in accordance with local regulations while driving. The phone device should not be interacted with manually while in motion.
          </p>

          <h2>4. Auto-Renewing Subscriptions and Purchases</h2>
          <p>
            Premium features or subscriptions that may be offered within the App ("Charging Intelligence Pro"):
          </p>
          <ul>
            <li>Payment will be charged to your Apple ID (iTunes) account at confirmation of purchase.</li>
            <li>Subscription automatically renews unless auto-renew is turned off at least 24 hours before the end of the current period.</li>
            <li>You can manage or cancel your subscriptions at any time from your Apple ID Account Settings after purchase.</li>
          </ul>

          <h2>5. Intellectual Property Rights</h2>
          <p>
            The Charging Intelligence logo, software codes, interface designs, database architecture, and proprietary algorithms are the exclusive property of the company. Reverse engineering, unauthorized copying of source codes, or unauthorized distribution for commercial purposes is prohibited.
          </p>

          <h2>6. Contact</h2>
          <p>
            You can contact us for any questions, feedback, or support requests regarding the terms of use:
          </p>
          <p>
            📧 <strong>Email:</strong> <a href="mailto:support@chargingintelligence.app" style="color: var(--brand-primary);">support@chargingintelligence.app</a><br>
            🌐 <strong>Web:</strong> <a href="https://chargingintelligence.app" style="color: var(--brand-primary);">https://chargingintelligence.app</a>
          </p>
        </div>
"""

nav_replacement = """        <div class="nav-actions">
          <div class="ctrl-pill">
            <button class="ctrl-btn lang-btn" data-lang="tr" aria-label="Türkçe">TR</button>
            <button class="ctrl-btn lang-btn active" data-lang="en" aria-label="English">EN</button>
          </div>
          <a href="index.html" class="btn btn-store" style="padding: 6px 14px; font-size: 0.85rem;" data-i18n="nav-home">
            ← Home
          </a>
          <button class="theme-toggle-btn" id="theme-toggle" aria-label="Toggle Theme">
            <span id="theme-icon">🌙</span>
          </button>
        </div>"""

def process_file(filename, en_content):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Update the language toggles
    nav_pattern = r'<div class="nav-actions">.*?</div>\s*</nav>'
    # We replace <div class="nav-actions"> ... </div> with the new one
    content = re.sub(r'<div class="nav-actions">.*?</div>\s*</nav>', nav_replacement + "\n      </nav>", content, flags=re.DOTALL)

    # 2. Add language wrappers to legal content
    content = content.replace('<div class="legal-content">', '<div class="legal-content">\n        <!-- TR CONTENT -->\n        <div lang="tr">')
    content = content.replace('      </div>\n    </div>\n  </main>', '        </div>\n' + en_content + '\n      </div>\n    </div>\n  </main>')
    
    # 3. Add translation for Headers (Title and Last Updated)
    # They are in `<header class="legal-page-header">`
    content = content.replace('<h1>Gizlilik Politikası (Privacy Policy)</h1>', '<h1 data-i18n="page-title-privacy">Gizlilik Politikası</h1>')
    content = content.replace('<h1>Kullanım Koşulları (Terms of Use)</h1>', '<h1 data-i18n="page-title-terms">Kullanım Koşulları</h1>')
    content = content.replace('<p style="color: var(--text-dim); margin-top: 8px;">Son Güncelleme: 20 Eylül 2026</p>', '<p style="color: var(--text-dim); margin-top: 8px;" data-i18n="page-date">Son Güncelleme: 20 Eylül 2026</p>')
    content = content.replace('<p style="color: var(--text-dim); margin-top: 8px;">Son Güncelleme / Last Updated: 20 Eylül 2026</p>', '<p style="color: var(--text-dim); margin-top: 8px;" data-i18n="page-date">Son Güncelleme: 20 Eylül 2026</p>')

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

process_file('privacy.html', privacy_en)
process_file('terms.html', terms_en)
process_file('terms-of-use.html', terms_en)

print("HTML files updated successfully.")
