function buySet(setName) {
  let price = 0;

  // 1. Switch orqali narxni aniqlaymiz
  switch (setName) {
    case 'snek':
      price = 79000;
      break;
    case 'klassik':
      price = 34000;
      break;
    case 'big':
      price = 62000;
      break;
    case 'kombo':
      price = 120000;
      break;
    case 'dost2':
      price = 79000;
      break;
    default:
      alert("❌ Bunday set mavjud emas.");
      return;
  }

  // 2. Foydalanuvchidan son so‘raymiz
  const quantity = parseInt(prompt("Nechta olmoqchisiz?"));

  if (isNaN(quantity) || quantity <= 0) {
    alert("⚠️ Noto‘g‘ri miqdor kiritildi.");
    return;
  }

  // 3. Umumiy summani hisoblaymiz
  const total = price * quantity;

  // 4. Tasdiqlatamiz
  const confirmOrder = confirm(`Umumiy narx: ${total.toLocaleString()} so'm\nTasdiqlaysizmi?`);

  // 5. Javob chiqaramiz
  if (confirmOrder) {
    alert("✅ Xaridingiz qabul qilindi!");
  } else {
    alert("❌ Xarid bekor qilindi.");
  }
}
