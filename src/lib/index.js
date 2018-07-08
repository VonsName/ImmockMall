import ToasrComponent from './vue-toast'

let Toast={};
Toast.install=(Vue,options)=>{
  let opt={
    duration:3000
  };

  for(let key in options){
    opt[key]=options[key];
  }

  Vue.prototype.$toast=(message,option)=>{

    if (typeof option ==='object'){
      for(let key in option){
        opt[key]=options[key];
      }
    }
    const ToastController = Vue.extend(ToasrComponent);
    let instance = new ToastController().$mount(document.createElement('div'));
    instance.msg=message;
    instance.visible=true;
    setTimeout(()=>{
      instance.visible=false;
      document.body.removeChild(instance.$el);
    },opt.duration)
  };
  Vue.prototype.$toast['show']=(message,option)=>{
    Vue.prototype.$toast(message,option);
  };
  Vue.prototype.$toast['success']=(message,option)=>{
    Vue.prototype.$toast(message,option);
  };
};
export default Toast;
