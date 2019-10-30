// const { productsMock } = require('../utils/mocks/products');
const MongoConnect = require('../lib/mongo');

class ProductService {
	constructor() {
		this.collection = 'products';
		this.mongoDB = new MongoConnect();
	}

	async getProducts() {
        const products = await this.mongoDB.getAll(this.collection);
        return products || [];
    }
}

module.exports = ProductService;
