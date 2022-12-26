export default {
  formatarData(data: any): string {
    if (data instanceof Date) return data.toLocaleString('pt-BR').substring(0, 10)

    const dtNasc = new Date(data);
    return new Date(dtNasc.getTime() - dtNasc.getTimezoneOffset() * -60000).toLocaleDateString('pt-BR');
  }
}