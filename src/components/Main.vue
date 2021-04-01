<template>
  <div>
    <nav
      aria-label="Sections"
      class="flex-shrink-0 w-96 bg-white border-r border-blue-gray-200 flex flex-col"
    >
      <div
        class="flex-shrink-0 h-16 px-6 border-b border-blue-gray-200 flex items-center"
      >
        <p class="text-lg font-medium text-blue-500">Bas Finder</p>
      </div>
    </nav>

    <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
      <form @submit.prevent="search">
        <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
          <div>
            <p class="mt-1 text-sm leading-5 text-gray-500"></p>
          </div>

          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="word"
                class="block text-sm font-medium leading-5 text-gray-700 text-right"
                style="font-family: Typer-bold"
                >ހޯއްދަވާ ބަސް</label
              >
              <input
                id="word"
                v-model="word"
                class="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                dir="rtl"
              />
            </div>
          </div>
        </div>
        <div class="px-4 py-3 text-left sm:px-6">
          <span class="inline-flex rounded-md shadow-sm">
            <button
              type="submit"
              class="bg-blue-600 border border-transparent rounded-md py-2 px-4 inline-flex justify-center text-sm leading-5 font-medium text-white hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
              style="font-family: Typer-bold"
            >
              ހޯދާ
            </button>
          </span>
        </div>
      </form>
    </div>


<div class="bg-white shadow overflow-hidden">
  <ul>
    <li v-for="result in results" :key="result.id">
      <a href="#" class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
        <div class="px-4 py-4 sm:px-6">
          <div class="flex items-center justify-end">
            <div class="text-sm leading-5 font-medium text-blue-600 truncate" dir="rtl" style="font-family: Typer-bold">
          {{result.headword}}
            </div>
            
          </div>
          <div class="mt-2 flex justify-end">
           
            <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
              <span class="text-right" style="font-family: Typer-normal" dir="rtl" v-html="result.definition_raw">
              
              </span>
            </div>
          </div>
        </div>
      </a>
    </li>
    
  </ul>
</div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Main",

  data() {
    return {
      word: "",
      results: [],
      sending: false
    };
  },
  mounted() {
    browser.runtime.sendMessage({});
  },
  computed: {
    defaultText() {
      return browser.i18n.getMessage("extName");
    },
  },

  methods: {
    search() {
       const _self = this;
      axios
        .get(`http://bas-finder-api.test/?q=${_self.word}`)
        .then(function (response) {
          // handle success
          console.log(response);

          _self.results = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Typer-bold";
  src: url(../assets/fonts/mvtypebold.ttf);
}

@font-face {
  font-family: "Typer-normal";
  src: url(../assets/fonts/mvtyper.ttf);
}
p {
  font-size: 20px;
}
</style>
