const kawa = 'history is history';

const fns = () => {
    console.log('fns()');    
}
//导出分两种
//1.默认导出  （一个模块中只能有一个默认导出）
export default kawa;

//2.命名导出
export const objs = {
    name:'Brian'
};

export {fns};