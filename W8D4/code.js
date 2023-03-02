function titleize(arr, callback){
  let res = arr.map(arr => `Mx. ${arr} Jingleheimer Schmidt`);
  callback(res);
};

titleize(["Mary", "Brian", "Leo"], (arr) =>{
  arr.forEach(arr => console.log(arr));
});
