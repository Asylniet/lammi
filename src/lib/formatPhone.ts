export const formatPhone = (phone: string): string => {
  if(phone.startsWith('+7')) return '7' + phone.slice(2).replaceAll(' ', '');
  return '7' + phone.slice(1).replaceAll(' ', '');
}