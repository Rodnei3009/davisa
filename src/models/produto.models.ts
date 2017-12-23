export class Produto {
    constructor (
        
        public codBarras: string,
        public marca: string,
        public codigo: string,
        public desc: string,
        public desc_lower: string,
        public cor: string,
        public tamanho: string,
        public valCompra: string,
        public valVenda: string,
        public qtd_disp: number

    ) {}
}