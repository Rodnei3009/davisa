import { Produto } from './produto.models';

export class Pedido {
    constructor (
        public celCliente: string,
        public nomCliente: string,
        public dataHora: string,
        public totalItens: number,
        public valTotal: number
    ) {}
}