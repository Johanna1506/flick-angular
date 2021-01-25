import { Injectable } from '@angular/core';
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'angular';
// tslint:disable-next-line:only-arrow-functions
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log('Connected successfully to server');

  const db = client.db(dbName);

  insertDocuments(db, function() {
    client.close();
  });
});

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }




}
