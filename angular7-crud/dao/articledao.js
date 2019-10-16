let dbConfig = require("../Utilities/mysqlConfig");
<p> 
let getArticle = (criteria, callback) => {
//criteria.aricle_id ? conditions += <code> and aricle_id = '${criteria.aricle_id}'</code> : true;
dbConfig.getDB().query(<code>select * from article where 1</code>,criteria, callback);
}
 
let getArticleDetail = (criteria, callback) => {
    let conditions = “”;
criteria.id ? conditions += <code> and id = '${criteria.id}'</code> : true;
dbConfig.getDB().query(<code>select * from article where 1&nbsp;${conditions}</code>, callback);
}
 
let createArticle = (dataToSet, callback) => {
console.log(“insert into article set ? “, dataToSet,‘pankaj’)
dbConfig.getDB().query(“insert into article set ? “, dataToSet, callback);
}
 
let deleteArticle = (criteria, callback) => {
let conditions = “”;
criteria.id ? conditions += <code> and id = '${criteria.id}'</code> : true;
console.log(<code>delete from article where 1&nbsp;${conditions}</code>);
dbConfig.getDB().query(<code>delete from article where 1&nbsp;${conditions}</code>, callback);
 
}
 
let updateArticle = (criteria,dataToSet,callback) => {
    let conditions = “”;
let setData = “”;
criteria.id ? conditions += <code> and id = '${criteria.id}'</code> : true;
dataToSet.category ? setData += <code>category = '${dataToSet.category}'</code> : true;
dataToSet.title ? setData += <code>, title = '${dataToSet.title}'</code> : true;
console.log(<code>UPDATE article SET&nbsp;${setData}&nbsp;where 1&nbsp;${conditions}</code>);
dbConfig.getDB().query(<code>UPDATE article SET&nbsp;${setData}&nbsp;where 1&nbsp;${conditions}</code>, callback);
}
module.exports = {
getArticle : getArticle,
createArticle : createArticle,
deleteArticle : deleteArticle,
updateArticle : updateArticle,
getArticleDetail : getArticleDetail
}