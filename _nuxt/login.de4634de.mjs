import{o,c as l,H as a,a1 as c,a2 as m,a3 as u,G as p,R as e,u as g,S as r,a0 as f,a4 as x,I as h}from"./entry.b2d48240.mjs";import{u as v}from"./useAdmin.12eeb711.mjs";function b(i,t){return o(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[a("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"})])}const w={class:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"},y={class:"max-w-md w-full space-y-8"},_=e("div",null,[e("img",{class:"mx-auto h-12 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600",alt:"Workflow"}),e("h2",{class:"mt-6 text-center text-3xl tracking-tight font-bold text-gray-900"},"Sign in to your account"),e("p",{class:"mt-2 text-center text-sm text-gray-600"},[r(" Or "+h(" ")+" "),e("a",{href:"#",class:"font-medium text-indigo-600 hover:text-indigo-500"}," start your 14-day free trial ")])],-1),k={class:"mt-8 space-y-6",action:"#",method:"POST"},S=f('<input type="hidden" name="remember" value="true"><div class="rounded-md shadow-sm -space-y-px"><div><label for="email-address" class="sr-only">Email address</label><input id="email-address" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"></div><div><label for="password" class="sr-only">Password</label><input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"></div></div><div class="flex items-center justify-between"><div class="flex items-center"><input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"><label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label></div><div class="text-sm"><a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a></div></div>',3),V={class:"absolute left-0 inset-y-0 flex items-center pl-3"},B=r(" Sign in "),E={__name:"login",emits:["success"],setup(i,{emit:t}){c(),m(),v();const{login:n}=u(),s={data:{email:"admin@gmail.com",password:"password",rememberMe:!1},error:"",pending:!1};async function d(){await n(s.data.email,s.data.password,s.data.rememberMe),t("success"),await x("/")}return(z,N)=>(o(),p("div",w,[e("div",y,[_,e("form",k,[S,e("div",null,[e("button",{onClick:d,class:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},[e("span",V,[a(g(b),{class:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400","aria-hidden":"true"})]),B])])])])]))}};export{E as default};
