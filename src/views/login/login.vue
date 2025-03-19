<template>
    <div id="login">
        <div class="login-container">
            <h4>登录</h4>
            <div class="login-input">
                <div class="username">
                    <span class="input-text">邮箱</span>
                    <input v-model="email" class="input-container" type="text">
                </div>
                <div class="password">
                    <span class="input-text">密码</span>
                    <input v-model="password" class="input-container" type="password">
                </div>
            </div>
            <div class="login-btn">
                <button @click="getLogin">登录</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "login-index"
}
</script>
<script setup lang="ts">
import { ref } from 'vue';
import {login, ILoginItem, getUser} from '@/api/api';

const email = ref('test@example.com');
const password = ref('password');

/**  登录 */
const getLogin = async () => {
    const params: ILoginItem = {
        email: email.value,
        password: password.value
    }
    try {
        const res =  await login(params);
        getUserFunc();
    } finally {
        console.log();
    }
}
/**  获取用户信息 */
const getUserFunc = async () => {
    try {
        const res =  await getUser();
        console.log(res);
    } finally {
        console.log();
    }
}

</script>
<style lang="scss" scoped>
#login {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-container {
        width: 400px;
        background-color: #fff;
        border-radius: 5px;
        padding: 0 30px;
        h4 {
            text-align: center;
            font-size: 20px;
            padding:15px 0;
        }
        .login-input {
            display: flex;
            flex-direction: column;

            .username {
                display: flex;
                align-items: center;
                height: 30px;
                margin-bottom: 15px;
            }
            .password {
                display: flex;
                align-items: center;
                height: 30px;

            }
            .input-text {
                width: 50px;
            }
            .input-container {
                flex: 1;
            }
            input {
                padding: 0 15px;
                height: 30px;
                border: 1px solid #dad7d7;
                -webkit-border-radius: 3px;
                -moz-border-radius: 3px;
                border-radius: 3px;
            }
        }
        .login-btn {
            margin: 60px 0 30px 0;
            button {
                cursor: pointer;
                font-size: 16px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                background-color: rgba(8, 124, 238, 0.5);
            }
        }
    }
}
</style>