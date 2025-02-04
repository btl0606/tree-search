module.exports = {
  testEnvironment: 'jsdom',  // Tarayıcı ortamı
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',  // JSX ve JS dosyalarını Babel ile işleyin
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],  // Hangi dosya uzantılarının tanınacağını belirtin
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],  // Testlerde göz ardı edilecek klasörler
};