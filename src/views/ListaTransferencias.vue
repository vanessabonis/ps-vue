<template>
  <Card class="shadow-4 lg:m-3">
    <template #title>
      <div class="flex justify-content-between">
        <span>Saldo Total: {{saldoTotal}}</span>
      </div>
    </template>

    <template #content>
      <div class="table-container" v-if="transferencias.content">
        <DataTable :value="transferencias.content" removableSort dataKey="id" responsiveLayout="scroll" :lazy="true" :rowHover="true"
              :autoLayout="false" :paginator="true" :rows="10" ref="dt" :totalRecords="transferencias.totalElements" :scrollable="true"
              paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
              :rowsPerPageOptions="[10, 15, 25]" currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" v-model:filters="filters"
              filterDisplay="row" @filter="listarTransferencias($event)" @sort="listarTransferencias($event)" @page="listarTransferencias($event)"
        >
          <Column field="dataTransferencia" header="Dados" ref="dataTransferencia" dataType="date" :showFilterMatchModes="false"
            :showFilterMenu="false" :sortable="true"  sortField="t.dataTransferencia">
              <template #filter="{ filterModel, filterCallback }">
                <Calendar v-model="filterModel.value" @date-select="filterCallback()" selectionMode="range" dateFormat="dd/mm/yy"
                  placeholder="dd/mm/yyyy" class="p-column-filter"/>
              </template>
              <template #body="{ data }">
                {{ $filters.formatarData(data.dataTransferencia)}}
              </template>
          </Column>

          <Column field="valor" header="Valentia" sortField="t.valor" :sortable="true" />

          <Column field="nomeOperadorTransacao" header="Nome do Operador" :showFilterMatchModes="false" :sortable="true"
                sortField="t.nomeOperadorTransacao" :showFilterMenu="false">
                <template #filter="{ filterModel, filterCallback }">
                  <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Nome do Operador"
                    @blur="filterCallback()" @keydown.enter="filterCallback()"/>
                </template>
              </Column>
        </DataTable>
      </div>
    </template>
  </Card>
</template>

<script src="./ListaTransferencias.ts" lang="ts"></script>
