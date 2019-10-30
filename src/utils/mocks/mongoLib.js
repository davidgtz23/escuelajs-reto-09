const sinon = require('sinon');

const { productsMock } = require('./products');

const getAllStub = sinon.stub();
getAllStub.withArgs('products').resolves(productsMock);

const createStub = sinon.stub().resolves(productsMock[0].id);

class MongoLibMock {
    getAll(collection) {
        return getAllStub(collection);
    }

    create(collection, data) {
        return createStub(collection, data);
    }
}

module.exports = {
    getAllStub,
    createStub,
    MongoLibMock
};