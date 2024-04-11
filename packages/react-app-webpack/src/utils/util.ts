

/**
 * @description 获取鼠标事件dataset数据中指定key的值
 */
export const getDataset = (e: React.MouseEvent,type:string):string|null => {
    const {target} = e;
    let el:HTMLElement|null = target as HTMLElement;
    while(el){
        if(el.dataset[type]){
            return el.dataset[type] as string
        }
        el = el.parentElement
    }

    return null


}