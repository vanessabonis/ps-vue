import TransferenciaFiltro from "@/models/filtros/TransferenciaFiltro";
import Transferencia from "@/models/Transferencia";
import Page from "@/models/utils/Page";
import Pageable from "@/models/utils/Pageable";
import ContaService from "@/service/ContaService";
import { defineComponent } from "vue";

export default defineComponent({
  
  data() {
    return {
      contaService: {} as ContaService,

      transferencia: new Transferencia(),
      transferencias: new Page<Transferencia>(),

      filtro: new TransferenciaFiltro(),
      filters: {
        'nomeOperadorTransacao': {value: ''},
        'dataTransferencia': {value: []},
      },

      pageable: new Pageable(),

      idConta: 1,
      saldoTotal: 0
    }
  },

  created() {
      this.contaService = new ContaService();

      this.listarTransferencias({});
  },

  methods: {
    listarTransferencias(event: any): void {
      this.setFiltrosAndPaginaInfo(event);
      this.contaService.listarTransferencias(this.pageable, this.filtro, this.idConta).then(response => {
        this.transferencias = response.data;
        this.saldoTotal = this.transferencias.content.reduce((saldo, v) => saldo + v.valor , 0)
      });
    },

    setFiltrosAndPaginaInfo(event: any): void {

      this.pageable.page = event.page || 0;
      this.pageable.pageSize = event.rows || 25;
      this.pageable.sortField = event.sortField || '';
      this.pageable.sortOrder = event.sortOrder === 1 ? 'ASC' : 'DESC';

      this.filtro.nomeOperadorTransacao = this.filters.nomeOperadorTransacao.value || null;
      if (this.filters.dataTransferencia.value) {
        this.filtro.dataInicio =  this.filters.dataTransferencia.value[0] || null;
        if (this.filters.dataTransferencia.value.length > 1) this.filtro.dataFim =  this.filters.dataTransferencia.value[1] || null;
      }
    },
  }
})