var Vm = new Vue({
    el:'#content',
    data:{
        resData:{
            data:{
                blog_lists:{}
            }
        },
        showHide:false,
    },
    mounted:function(){
        this.getList();
        this.getlogin();
    },
    methods:{
        getlogin:function(){
            if(window.localStorage.user_id){
                this.showHide=true;
            }
            else{
                this.showHide=false;
            }
        },
        getList:function(){
            var that=this;
            $.ajax({
                'url':'http://blog.com/api/index/index',
                'type':'get',
                'data':{},
                'dataType':'json',
                success:function(res){
                    that.resData=res;
                    console.log(res);
                    // alert("chenggong")
                },
                error:function(res){
                    alert("shibai")
                }

            })
        },
    }
})