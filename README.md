# Puppeteer ile Web Sayfalarını Gezinerek Veri Çekme

Bu proje, Puppeteer kullanarak web sayfalarını otomatik olarak gezinip veri çeken bir örnektir. Projede, Örnek olarak REMAX emlak sitesindeki İzmir'deki satılık daire ilanlarını çekmek için Puppeteer kullanılmıştır.

## Kurulum

1. Öncelikle projeyi yerel makinenize klonlayın:

   ```bash
   git clone https://github.com/sencerarslan/nodejs-web-scraping.git
   ```

2. Proje dizinine gidin:

   ```bash
   cd proje
   ```

3. Gerekli Node.js paketlerini yükleyin:

   ```bash
   npm install
   ```

## Kullanım

Proje kurulduktan sonra aşağıdaki komutu çalıştırarak veri çekmeye başlayabilirsiniz:

    ```bash
    node index.js
    ```

Bu komut, Puppeteer aracılığıyla İzmir'deki REMAX satılık daire ilanlarını çekecek ve konsola çıktı olarak gösterecektir.
