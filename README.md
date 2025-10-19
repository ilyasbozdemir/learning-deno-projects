# 🦕 Learning Deno Projects

Minimal, framework’süz **Deno Serverless API** altyapısı.  
Her dosya `functions/` klasörü altında bağımsız bir endpoint olarak çalışır —  
tamamen `Deno.serve` tabanlı, dinamik router ve middleware destekli ⚙️

---

## 🚀 Özellikler

- 🔹 **Dynamic Routing:** `functions/*.ts` → `/api/<filename>` olarak otomatik yüklenir  
- 🔹 **Serverless Functions:** Her `.ts` dosyası kendi handler’ını içerir  
- 🔹 **.env & Config:** Ortam değişkenleri `@std/dotenv` ve `config.ts` üzerinden yönetilir  
- 🔹 **Middleware:** `middlewares/logger.ts` ile request loglama  
- 🔹 **Hot Reload:** `--watch` ile canlı geliştirme desteği  
- 🔹 **Frameworkless:** Fresh veya Hono gibi yapılara geçmeden saf Deno çekirdeği  

---

## 📁 Proje Yapısı

```
.
├── server.ts                # Ana sunucu, dinamik router
├── config.ts                # Ortam değişkeni yönetimi
├── deno.json                # Deno ayarları ve izinler
├── .env                     # Ortam değişkenleri
├── functions/               # Serverless fonksiyonlar
│   ├── hello.ts
│   ├── time.ts
│   ├── math.ts
│   ├── config.ts
│   └── random.ts
├── middlewares/
│   └── logger.ts
└── README.md
```

---

## ⚙️ Kurulum

```bash
# Bağımlılıkları yükle (dotenv modülü)
deno add jsr:@std/dotenv

# Geliştirme modunda başlat
deno task dev
```

---

## 🌍 API Endpoint’leri

| Endpoint | Açıklama |
|-----------|----------|
| `/api/hello?name=İlyas` | Basit “Hello” mesajı |
| `/api/time` | ISO formatında zaman döndürür |
| `/api/math?a=5&b=3` | Toplama işlemi yapar |
| `/api/random` | Rastgele sayı üretir |
| `/api/config` | .env değerlerini döndürür |

---

## 🧩 Ortam Değişkenleri (`.env`)

```
APP_NAME=learning-deno-project
PORT=8000
DEBUG=true
API_KEY=super-secret-key
```

---

## 📜 Logger Çıktısı (örnek)

```
[GET] http://localhost:8000/api/time → 200 (1.43ms)
[GET] http://localhost:8000/api/hello?name=ilyas → 200 (0.98ms)
```

---

## 🧠 İleri Plan

- [x] CORS middleware eklendi  
- [ ] Global error handler  
- [ ] Deno KV veya PostgreSQL bağlantısı  
- [ ] Fresh framework’e geçiş (`feature/fresh-base` branch)

---

## 📄 Lisans

MIT © 2025 — Built with 💙 using [Deno](https://deno.com/)
