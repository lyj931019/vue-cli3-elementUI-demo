let global = {
    h:function () {
        console.log('hello')
    },
    showMessage:($this,str)=>{
        $this.$message({
            message:str
        })
    }
};


export default global;