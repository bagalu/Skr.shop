import axios from '../src/utils/request.js';

// 获取一级列表
// 参数，parent_name,post, url:'type/getproduct'
export async function getParentOneList(parent_name) {
    return await axios ({
        method:'post',
        url:'type/parent_name',
        data:{parent_name},
    }) 
}

// 获取二级列表
// 参数，name,post,url:/wares/getSpu
export async function getParentTwoList(name,series) {
    return await axios({ 
        method: 'post', 
        url: "/wares/getSecond", 
        data: { 
            name,
            series
        } 
    })
  }