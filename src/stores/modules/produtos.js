const state = {

    estaCarregando: true,
    produtoLista: [

        {
            id: 1,
            titulo: 'macbook Retina 13.3" ME662 (2013)',
            thumbnail_url: 'http://media.bizwebmedia.net//sites/72783/data/images/2016/2/4713895macbook_pro_retina.png',
            preco: 999.9,
            quantidade: 10,
            categoria: "macbook",
            descricao: "3.0GHz Dual-core Haswell Intel Core i5 Turbo Boost up to 3.2 GHz, 3MB L3 cache 8GB (two 4GB SO-DIMMs) of 1600MHz DDR3 SDRAM"
        }, {
            id: 2,
            titulo: 'Macbook Pro 13.3" Retina MF841LL/A',
            thumbnail_url: 'http://media.bizwebmedia.net//sites/72783/data/images/2015/11/3220113retina13.jpg',
            preco: 1199.9,
            quantidade: 15,
            categoria: "macbook",
            descricao: 'Macbook Pro 13.3" Retina MF841LL/A Model 2015 Option Ram Care 12/2016'
        }, {
            id: 3,
            titulo: 'Macbook Pro 15.4" Retina MC975LL/A Model 2012',
            thumbnail_url: 'http://media.bizwebmedia.net//sites/72783/data/images/2015/7/2913337mf841_13_inch_2_9ghz_with_retina_display_early_2015.png',
            preco: 1800,
            quantidade: 1,
            categoria: "macbook",
            descricao: "3.0GHz Dual-core Haswell Intel Core i5 Turbo Boost up to 3.2 GHz, 3MB L3 cache 8GB (two 4GB SO-DIMMs) of 1600MHz DDR3 SDRAM"
        }, {
            id: 4,
            titulo: 'Retina MacBook Pro 13 inch MF841',
            thumbnail_url: 'http://media.bizwebmedia.net//sites/72783/data/images/2016/2/4713895macbook_pro_retina.png',
            preco: 1000,
            quantidade: 0,
            categoria: "macbook",
            descricao: "2.9 Ghz Dual-Core Intel Core i5 Broadwell Tubro boost up to 3.3 GHz with L3 3MB cache"
        },
    ]

}

const mutations = {
    'ATUALIZAR_PRODUTO_LISTA' (state, produtoLista) {
        state.produtoLista = produtoLista
        state.estaCarregando = false
    }
}

const actions = {

}

const getters = {
    produtos: (state) => {
        return state.produtoLista
    },
    produtoEstaCarregando: (state) => {
        return state.estaCarregando
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}