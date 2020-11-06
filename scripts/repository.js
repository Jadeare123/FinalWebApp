var repository = (function () {
    'use strict';

    var products = [{
        id: 1,
        name: 'Boruto: Naruto Next Generation',
        price: 55.99,
        description: 'Boruto is the sun of the 7th hokage who happens to be the savior of the konoha during the great ninja war.',
        category: 'Anime'
    }, {
        id: 2,
        name: 'Hunter X Hunter',
        price: 58.99,
        description: 'Gon was seeking for his father gin.',
        category: 'Anime'
    }, {
        id: 3,
        name: 'The Seven Deadly Sins',
        price: 60.99,
        description: 'Melodias is a half demon and the future demon king',
        category: 'Anime'
    }, {
        id: 4,
        name: 'Assasination Classroom',
        price: 60.99,
        description: 'The students only aim is to learn while trying to kill their teacher.',
        category: 'Anime'
    }];
    
    return {
        getTopProducts: function () {
            return [products[1], products[2], products[3]];
        },
        getProduct: function (id) {
            return products.filter(p => p.id === id)[0];
        },
        search: function (q) {
            if (q == null) {
                return [];
            } else {
                return products.filter(p => p.name.toLowerCase().indexOf(q.toLowerCase()) >= 0);
            }
        }
    };
})();
