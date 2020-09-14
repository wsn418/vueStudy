/**
 * @param {Array} arr 需要排序的数组
 * @param {string} key 根据key进行排序
 * @return {Array} 返回排序好的数组
 */
//字符串排序 根据key值
function sortByKey(arr,key){
    return arr.sort((a,b)=>{
        let x = a[key];
        let y = b[key];
        return ((x<y)?-1:((x>y)?1:0));
    })
}

//解绑vue
function unbind(){
    app.$destroy();
}