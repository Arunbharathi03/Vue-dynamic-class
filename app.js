new Vue({
    el: '#Vue-content' ,
    data: {
        inactive: true,
        active : false,
        stats: 'Push'
    },

    methods:{
        toggle: function(){
            return this.active = !this.active 
                
        },
        
    }

});