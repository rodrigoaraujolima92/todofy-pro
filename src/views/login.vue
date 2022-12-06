<template>
  <div
    class="flex flex-col w-screen h-screen bg-cover bg-no-repeat bg-[url('https://cdn.pixabay.com/photo/2013/06/12/22/20/mountains-139012_960_720.jpg')]"
  >
    <div
      class="bg-white p-5 rounded-xl items-center justify-center w-[400px] mx-auto my-auto shadow-xl"
    >
      <div class="font-bold text-slate-800 text-2xl text-center py-2">
        Todofy Pro
      </div>
      <div id="form" class="pt-4">
        <div class="text-center bg-red-00 mx-5">
          <div class="relative">
            <div class="absolute mt-3 ml-3">
              <svgEmail
                class="stroke-slate-600 transition-transform"
                :class="{ iconError: v$.email.$error }"
              />
            </div>
            <input
              v-model="v$.email.$model"
              class="input hasIcon full"
              :class="{ error: v$.email.$error }"
              placeholder="Email"
              type="text"
            />
          </div>
          <div class="pt-2 relative">
            <div class="absolute mt-3 ml-3">
              <svgKey
                class="stroke-slate-600 transition-transform"
                :class="{ iconError: v$.password.$error }"
              />
            </div>
            <input
              v-model="v$.password.$model"
              class="input hasIcon full"
              :class="{ error: v$.password.$error }"
              placeholder="Senha"
              type="password"
            />
          </div>

          <div class="text-right mt-3">
            <a
              href="#"
              class="text-slate-700 text-sm underline tracking-wide"
              @click="esqueceuSenha()"
              >Esqueceu a senha ?</a
            >
          </div>

          <div class="pt-3 justify-center items-center">
            <div class="text-right">
              <button
                class="font-semibold text-sm bg-slate-900 hover:bg-slate-800 transition-colors text-white rounded px-5 py-3 w-full"
              >
                ENTRAR
              </button>
            </div>
          </div>
          <div class="text-center pt-5 justify-center items-center">
            <div class="text-center py-2">
              <span class="text-sm tracking-wide">Não possui conta?</span>
              <a
                class="text-sm text-slate-800 font-bold ml-2 cursor-pointer"
                @click="$router.push('/cadastro')"
                >Cadastrar</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import svgEmail from "@/assets/email.vue";
import svgKey from "@/assets/key.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "",
      password: "",
      typePass: true,
    };
  },
  methods: {
    esqueceuSenha() {
      this.$router.push("/esqueceu-senha");
    },
  },
  validations() {
    return {
      email: { required, email },
      password: { required, minLength: minLength(8) },
    };
  },
  components: {
    svgEmail,
    svgKey,
  },
};
</script>

<style></style>
