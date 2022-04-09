export const dayTexts = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

export const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export function formatFullDate(date: Date) { 
  return `${dayTexts[date.getDay()]}, ${date.getDate().toString().padStart(2, '0')} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
}

export function formatPercentage(percentage: number) {
  return percentage.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2, style: 'percent' })
}

export function formatMoney(money: number) {
  return money.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
}