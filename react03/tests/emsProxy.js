module.exports = new Proxy(
    {},
    {get:function getter(target,key){
        if(key === '__esMdule'){
            return true;
        }
        return key;
    }}
);