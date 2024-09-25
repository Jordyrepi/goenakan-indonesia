export function formatContact(phone: string): string {
  // Replace the leading '0' with '+62'
  const formattedPhone = `+62 ${phone.slice(1, 5)} ${phone.slice(5, 9)} ${phone.slice(9)}`;

  return formattedPhone;
}

export function createWhatsAppLink(phone: string): string {
  const whatsappNumber = phone.startsWith("0") ? "62" + phone.slice(1) : phone;

  return `https://wa.me/${whatsappNumber}`;
}
