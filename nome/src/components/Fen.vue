<template>
    <div class="Fen">
        <div v-for="(item,index) in list">
            <h3>{{item.id}}:{{item.text}}</h3>
        </div>
        <ul>
            <li v-for="(item,index) in list.length" @click="Ind(index)" :class="{active:idx==index}">{{index+1}}</li>
        </ul>
    </div>
</template>
<script>
    import  mock from '../mock/index'
    import  axios from 'axios'
export default {
    props:["pages","pageSize"],
    data(){
        return{
            list:[],
            page:1,
            pagesize:5,
            idx:0
        }
    },mounted() {
        this.pagesize=this.pageSize
        axios.post("/list",{page:this.page,pagesize:this.pagesize})
        .then(res=>{
            this.list=res.data
        })
    },methods: {
        Ind(idx){
            this.page=idx+1
            this.idx=idx
            axios.post("/list",{page:this.page,pagesize:this.pagesize})
                .then(res=>{
            this.list=res.data
            })
        }
    },
}
</script>
<style lang="">
    .Fen{
        width: 100%;
        height: 100%;
    }
    .Fen ul{
        width: 250px;
        height: 30px;
        
    }
    .Fen ul li{
        display: inline-block;
        width: 15%;
        height: 100%;
        border:1px solid #000;
        margin: 0 5px;
        text-align: center;
        line-height: 30px;
    }
    .active{
        background: red;
    }
</style>