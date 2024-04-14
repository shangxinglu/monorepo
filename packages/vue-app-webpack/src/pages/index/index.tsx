import { defineComponent } from "vue";
import style  from "./index.module.less";
import Test from "@/components/Test/index.vue";
import Test2 from "@/components/Test2";
export default defineComponent({
    setup(props) {
        return () => (
            <div>
                <Test />
                <Test2 />
            </div>
        )
    }
});