import { defineComponent } from "vue";
export default defineComponent({
    props: {
        msg:{
            type:String,
            default:""
        },
    },
    setup(props) {
        return () => (
            <div>{props.msg}</div>
       )
    }
});