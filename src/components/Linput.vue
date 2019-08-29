<template>
    <div class="cont">
        <input class="material" :placeholder="placeholder" :type="passwordType()" :value="value" @input="$emit('input', $event.target.value)"></input>
    </div>
</template>

<script>
    export default {
        name: "Linput",
        props: {
            placeholder: {
                type: String,
                default: '' 
            },
            hide: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                data: "data",
                value: ''
            }
        },
        methods: {
            passwordType() {
                if(this.hide){
                    return 'password';
                 } else {
                     return 'text';
                 }
            }
        },
    }
</script>

<style lang="scss" scoped>

.cont {
    display: flex;
    margin: 10px;
    background: #eeeeee;
    border: 0;
    border-radius: 20px;
    padding: 10px;
}


.material {
  display: inline-block;
  flex-grow: 1;
  text-decoration: none;
  color: #000000;
  font-size: 18px;
  font-weight: 400;
  background: none;
  padding-left: 16px;
  border: 0;
  margin: auto 0;
  caret-color: #3ddc84;
}

.material:active {
  background: none;
  border: none;
  outline: none;
}

.material:focus {
  background: none;
  border:0;
  outline: none;
}

</style>