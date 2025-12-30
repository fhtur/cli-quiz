# CLI Quiz Game 🎯

Sebuah permainan kuis interaktif yang berjalan langsung di terminal (CLI) menggunakan Node.js!

Game ini dilengkapi dengan:
- Animasi teks neon yang keren menggunakan `chalk-animation`
- Warna-warni cerah dengan `chalk` dan `gradient-string`
- Spinner saat mengecek jawaban (`nanospinner`)
- Input nama pemain dengan `inquirer`
- Efek dramatis: Jika salah jawab, proses akan "dibunuh" (process.exit) 💀
## Cara Main
```bash
git clone https://github.com/fhtur/cli-quiz.git
cd cli-quiz
npm install
node index.js
