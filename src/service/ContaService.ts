import type TransferenciaFiltro from '@/models/filtros/TransferenciaFiltro';
import type Transferencia from '@/models/Transferencia';
import type Page from '@/models/utils/Page';
import type Pageable from '@/models/utils/Pageable';
import { axiosClient } from '@/vue.config';
import type { AxiosResponse } from 'axios';


export default class ContaService {
  private urlApi = `/conta`;

  async listarTransferencias(page: Pageable, filtro: TransferenciaFiltro, idConta: number): Promise<AxiosResponse<Page<Transferencia>>> {

    let urlFiltroNomeOp = `nomeOperadorTransacao=${filtro.nomeOperadorTransacao}&`;
    // let urlFiltroPeriodo = `dataInicio=${filtro.dataInicio}&
    //                      dataFim=${filtro.dataFim}&`;
    let urlFiltro = '?';

    // if ((filtro.dataInicio && filtro.dataFim) || (filtro.dataInicio && filtro.dataFim) != undefined) urlFiltro = urlFiltro.concat(urlFiltroPeriodo);
    if (filtro.nomeOperadorTransacao || filtro.nomeOperadorTransacao != undefined) urlFiltro = urlFiltro.concat(urlFiltroNomeOp);
    const url = `${urlFiltro}size=${page.pageSize}&page=${page.page}&sort=${page.sortField},${page.sortOrder}`;
    return await axiosClient.get(`${this.urlApi}/${idConta}/transferencias${url}`);
  }
}