// use e-comm
// 'switched to db e-comm'
// db.products.insertOne({name:'redmi9', brand:'mi', cost:9000, category:'mobile'})
// { acknowledged: true,
//   insertedId: ObjectId("62ae11a0492f40fc6c5c54af") }
// db.products.insertOne({name:'iphone12', brand:'apple', cost:50000, category:'mobile'})
// { acknowledged: true,
//   insertedId: ObjectId("62ae11c3492f40fc6c5c54b0") }
// db.products.find()
// { _id: ObjectId("62ae11a0492f40fc6c5c54af"),
//   name: 'redmi9',
//   brand: 'mi',
//   cost: 9000,
//   category: 'mobile' }
// { _id: ObjectId("62ae11c3492f40fc6c5c54b0"),
//   name: 'iphone12',
//   brand: 'apple',
//   cost: 50000,
//   category: 'mobile' }
// db.products.updateOne({name:'redmi9'},{$set:{brand:'oppo'}})
// { acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0 }
// db.products.find()
// { _id: ObjectId("62ae11a0492f40fc6c5c54af"),
//   name: 'redmi9',
//   brand: 'oppo',
//   cost: 9000,
//   category: 'mobile' }
// { _id: ObjectId("62ae11c3492f40fc6c5c54b0"),
//   name: 'iphone12',
//   brand: 'apple',
//   cost: 50000,
//   category: 'mobile' }
// db.products.deleteOne({rand:'apple'})
// { acknowledged: true, deletedCount: 0 }
// db.products.deleteOne({brand:'apple'})
// { acknowledged: true, deletedCount: 1 }
// db.products.find()
// { _id: ObjectId("62ae11a0492f40fc6c5c54af"),
//   name: 'redmi9',
//   brand: 'oppo',
//   cost: 9000,
//   category: 'mobile' }