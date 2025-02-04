Proje Özeti

Bu uygulama, JSON formatındaki hiyerarşik verilerin görselleştirilmesini sağlar. Kullanıcılar, ağaç yapısındaki her öğeyi genişletip daraltabilir ve bu öğelerin içeriğini detaylı şekilde görüntüleyebilir. Proje, React, Jest ve ilgili test araçları kullanılarak geliştirilmiştir.
Özellikler

    Ağaç yapısındaki verileri kullanıcı dostu bir şekilde görselleştirir.
    JSON verilerini kolayca işleyip render eder.
    Her bir öğe, kullanıcı tarafından genişletilip daraltılabilir.
    Jest ile yazılmış birim testleri içerir.

Teknolojiler

    React: Uygulamanın kullanıcı arayüzünü oluşturmak için.
    Jest: Uygulamanın birim testlerini yazmak için.
    React Testing Library: React bileşenlerini test etmek için.
    Babel: Modern JavaScript ve JSX'i derlemek için.
    Node.js: Sunucu tarafı işlemleri ve bağımlılık yönetimi için.

Kurulum

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyebilirsiniz:
1. Depoyu Klonlayın

git clone https://github.com/btl0606/tree-search.git
cd tree-search

2. Bağımlılıkları Yükleyin

Proje bağımlılıklarını yüklemek için şu komutu çalıştırın:

npm install

Eğer yarn kullanıyorsanız:

yarn install

3. Uygulamayı Başlatın

Uygulamayı başlatmak için:

npm start

Eğer yarn kullanıyorsanız:

yarn start

Bu, uygulamanın yerel sunucuda çalışmasını sağlayacaktır. Tarayıcınızda http://localhost:3000 adresine giderek uygulamayı görüntüleyebilirsiniz.
Testler

Projede birim testleri Jestkullanılarak yazılmıştır. Testleri çalıştırmak için:

npm test

Eğer yarn kullanıyorsanız:

yarn test