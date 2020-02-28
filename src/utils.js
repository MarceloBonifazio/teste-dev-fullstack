export const currency = val =>
  typeof val === 'number' && `R$ ${val.toLocaleString('pt-BR')}`;
