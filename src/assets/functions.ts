export const formatNumber = (value: string | number, alt?: boolean) => {
  if(alt){
    const numericValue = String(value).replace(/\D/g, '');
    return parseInt(numericValue);
  } else {
    const numericValue = String(value).replace(/\D/g, '');
    return numericValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
}

export const percentage = (value: number, percent: number) => {
  return (value * percent) / 100;
}