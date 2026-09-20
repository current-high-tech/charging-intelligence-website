# ⚡ Charging Intelligence - Resmi Web Sitesi (Landing Page & Legal)

Bu dizin, **Charging Intelligence** uygulamasının modern, duyarlı (responsive), Açık/Koyu mod destekli ve Türkçe/İngilizce çift dilli resmi tanıtım ve yasal sayfalar paketidir.

---

## 📂 Sayfa Yapısı

* **`index.html`** - Ana Tanıtım Sayfası (Hero, Apple CarPlay deneyimi, öne çıkan yetenekler, canlı istasyon istatistikleri, ekran görüntüleri galerisi, S.S.S., App Store ve Google Play butonları).
* **`terms-of-use.html`** - Apple Standart EULA uyumlu ve uygulama içi abonelik şartlarını içeren resmi Kullanım Koşulları sayfası.
* **`privacy.html`** - KVKK, GDPR ve Apple Privacy Nutrition Label uyumlu Gizlilik Politikası sayfası.
* **`support.html`** - Destek Merkezi, iletişim e-postası ve Apple/Google zorunlu Hesap Silme Talebi (Account Deletion) sayfası.
* **`css/style.css`** - Modern cam morfolojisi (Glassmorphism), CSS değişkenleri, zengin tipografi (Outfit & Plus Jakarta Sans) ve mikro animasyonlar.
* **`js/main.js`** - Anlık TR/EN dil değiştirici motoru, Koyu/Açık tema değiştirici (localStorage ve sistem tercihine duyarlı), mobil menü ve akordeon S.S.S. mantığı.
* **`assets/`** - Resmi uygulama ikonları (`app_icon_512x512.png`), şeffaf amblem (`extracted_emblem.png`), 1024x500 geniş görsel ve gerçek uygulama ekran görüntüleri.

---

## 🚀 Cloudflare Pages ile Yayına Alma (2 Kolay Yol)

### 1. Yol: Sürükle & Bırak (Direct Upload - 1 Dakika)
1. [Cloudflare Dashboard](https://dash.cloudflare.com)'a girin.
2. Sol menüden **Workers & Pages** > **Create application** > **Pages** > **Upload assets** seçin.
3. Proje adını `charging-intelligence-web` yapın.
4. Bu `website/` klasörünü sürükleyip Cloudflare'a bırakın ve **Deploy** deyin.
5. Siteniz saniyeler içinde yayına girer! Ardından **Custom Domains** sekmesinden `chargingintelligence.app` alan adınızı tek tıkla bağlayabilirsiniz.

### 2. Yol: Git / GitHub ile Otomatik Yayınlama (Önerilen)
1. Bu klasörü git deponuza push edin:
   ```bash
   git add website/
   git commit -m "Add modern multilingual landing page and legal pages"
   git push
   ```
2. Cloudflare Pages ekranında **Connect to Git** seçeneğini seçip GitHub deponuzu bağlayın.
3. **Build output directory** kısmına `website` yazın ve Deploy edin.
4. Bundan sonra yapacağınız her git push işleminde web siteniz 10 saniye içinde otomatik güncellenir.

---

## 💻 Yerel Olarak Test Etme

Tarayıcınızda test etmek için terminalde şu komutu çalıştırabilirsiniz:
```bash
python3 -m http.server 8000 --directory website
```
Ardından tarayıcınızda `http://localhost:8000` adresini açabilirsiniz.
