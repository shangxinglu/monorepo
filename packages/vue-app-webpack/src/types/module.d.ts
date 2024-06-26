declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent
  export default component;
}

declare module '*.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}