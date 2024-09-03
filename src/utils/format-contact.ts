export function formatContact(phone: string, name: string): string {
  // Format the phone number: +62 8123-1659-960
  const formattedPhone = `+${phone?.slice(0, 2)} ${phone?.slice(2, 6)}-${phone?.slice(6, 10)}-${phone?.slice(10)}`;

  // Combine with name: +62 8123-1659-960 (Marissa)
  return `${formattedPhone} (${name})`;
}

export function createWhatsAppLink(phone: string): string {
  const whatsappNumber = `+${phone}`;
  return `https://wa.me/${whatsappNumber}`;
}
