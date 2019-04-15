const user = {};
user.name = 'kyeongrok';
user.age = 31;
console.log(user);

const user2 = {};
user2['name'] = 'kyeongrok';
user2['age'] = 31;
console.log(user2);

const user3 = { name: 'kyeongrok', age: 31 }; // key에 해당하는 값에 원래는 ""를 붙여주어야 하지만 코딩 편의상 붙혀주지 않아도 됩니다.
console.log(user3);