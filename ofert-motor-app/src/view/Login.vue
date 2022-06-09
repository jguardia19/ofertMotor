<template>
   <div class="container-login">
        <div class="login-session">
           <h2>Login</h2>
        </div>
   </div>
</template>

<script>

export default {

    data(){
        return{
           
        }
    },

    methods:{


    }
}
</script>

<style lang="scss">
    .container-login{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        .login-session{
            width: 400px;
            height: auto;
            background: rgba($color: #000000, $alpha: 0.5);
            padding: 30px;
            position: relative;
            @media(max-width:425px){
                width: 92%;
                height: 450px;
            }
            
            .btn-login,.btn-register{
                width:100%;
                padding: 10px;
                text-align: center;
                color: #fff;
            }
            .btn-login{
                background: rgb(75, 6, 185);
                transition: ease all 0.3s;
                &:hover{
                    background: rgb(41, 2, 104);
                }
            }
            .btn-register{
                background: none;
                text-decoration: underline;
                transition: ease all 0.3s;
                &:hover{
                    background: rgb(187, 154, 6);
                    text-decoration: none;
                }
            }
            .btn-forgot{
                background: none !important;
                color:blue;
                text-decoration: underline;
            }
            .btn-close{
                position: absolute;
                right: 5px;
                top: 8px;
            }
        }
    }


</style>